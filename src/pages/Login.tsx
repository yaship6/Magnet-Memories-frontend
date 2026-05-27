import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useStore } from "../context/StoreContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login({ name, email });
    navigate("/shop");
  };

  return (
    <div className="min-h-screen bg-[#f8efe6] text-[#1a1a1a]">
      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center px-8 py-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl rounded-[40px] bg-[#ca3a3c] p-10 text-white shadow-[0px_24px_70px_rgba(121,4,5,0.28)]"
        >
          <h1 className="text-5xl font-black">Login</h1>
          <p className="mt-4 text-xl text-[#ffe1dc]">
            Save your cart and keep your Memory Magnets together.
          </p>

          <label className="mt-8 flex flex-col gap-2 text-lg font-semibold">
            Name
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="rounded-2xl border border-[#ffb6b6] bg-[#f8efe6] px-5 py-4 text-[#1a1a1a] outline-none"
            />
          </label>

          <label className="mt-5 flex flex-col gap-2 text-lg font-semibold">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="rounded-2xl border border-[#ffb6b6] bg-[#f8efe6] px-5 py-4 text-[#1a1a1a] outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-8 w-full rounded-2xl border-2 border-[#790405] bg-[#5a0205] py-5 text-xl font-semibold text-white transition hover:scale-105 hover:border-[#ff9999]"
          >
            Login
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
