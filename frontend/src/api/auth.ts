import axios from "axios";
import type { User } from "../context/StoreContext";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

type AuthResponse = {
  user: User;
};

export async function signupUser(payload: {
  name: string;
  gmail: string;
  password: string;
}) {
  const response = await api.post<AuthResponse>("/auth/signup", payload);
  return response.data.user;
}

export async function loginUser(payload: { email: string; password: string }) {
  const response = await api.post<AuthResponse>("/auth/login", payload);
  return response.data.user;
}
