import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      login(data.token);

      toast.success("Welcome back!");

      navigate("/admin");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Invalid Credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl backdrop-blur lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden flex-col justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-14 lg:flex"
        >
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
            <ShieldCheck size={40} />
          </div>

          <h1 className="text-5xl font-black leading-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Sign in to access your LeadDesk Mini dashboard and manage customer
            enquiries securely.
          </p>

          <div className="mt-12 space-y-5 text-blue-100">
            <div>✓ Secure JWT Authentication</div>
            <div>✓ Real-time Lead Dashboard</div>
            <div>✓ Fast & Responsive Interface</div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12"
        >
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black text-white">
              Admin Login
            </h2>

            <p className="mt-3 text-slate-400">
              Enter your credentials to continue.
            </p>
          </div>

          <form onSubmit={submit} className="space-y-6">

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 py-4 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            <button
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? (
                "Signing In..."
              ) : (
                <>
                  Sign In
                  <ArrowRight size={20} />
                </>
              )}
            </button>

          </form>

          <div className="mt-10 rounded-xl border border-slate-800 bg-slate-950 p-5">

            <p className="text-sm font-semibold text-blue-400">
              Demo Credentials
            </p>

            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <p>
                <strong>Email:</strong> admin@leaddesk.com
              </p>

              <p>
                <strong>Password:</strong> Admin@123
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}