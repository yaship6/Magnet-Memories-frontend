import crypto from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import cors from "cors";
import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "data");
const usersFile = path.join(dataDir, "users.json");
const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  })
);
app.use(express.json({ limit: "1mb" }));

async function readUsers() {
  try {
    const contents = await readFile(usersFile, "utf-8");
    return JSON.parse(contents);
  } catch {
    return [];
  }
}

async function writeUsers(users) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(usersFile, JSON.stringify(users, null, 2));
}

function createPasswordHash(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto
    .pbkdf2Sync(password, salt, 100000, 64, "sha512")
    .toString("hex");

  return { salt, hash };
}

function verifyPassword(password, user) {
  const { hash } = createPasswordHash(password, user.salt);
  return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(user.passwordHash));
}

function toPublicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/api/auth/signup", async (request, response) => {
  const name = String(request.body.name ?? "").trim();
  const email = String(request.body.email ?? "").trim().toLowerCase();
  const password = String(request.body.password ?? "");

  if (!name || !email || !password) {
    return response.status(400).json({ message: "Name, email, and password are required." });
  }

  if (password.length < 6) {
    return response.status(400).json({ message: "Password must be at least 6 characters." });
  }

  const users = await readUsers();
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return response.status(409).json({ message: "An account with this email already exists." });
  }

  const { salt, hash } = createPasswordHash(password);
  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    salt,
    passwordHash: hash,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  await writeUsers(users);

  return response.status(201).json({ user: toPublicUser(user) });
});

app.post("/api/auth/login", async (request, response) => {
  const email = String(request.body.email ?? "").trim().toLowerCase();
  const password = String(request.body.password ?? "");

  if (!email || !password) {
    return response.status(400).json({ message: "Email and password are required." });
  }

  const users = await readUsers();
  const user = users.find((storedUser) => storedUser.email === email);

  if (!user || !verifyPassword(password, user)) {
    return response.status(401).json({ message: "Invalid email or password." });
  }

  return response.json({ user: toPublicUser(user) });
});

app.listen(port, () => {
  console.log(`Memory Magnets backend running on http://127.0.0.1:${port}`);
});
