import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-white"
        >
          LeadDesk
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Mini
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">

          <a
            href="#features"
            className="text-slate-300 transition hover:text-blue-400"
          >
            Features
          </a>

          <a
            href="#contact"
            className="text-slate-300 transition hover:text-blue-400"
          >
            Contact
          </a>

          <Link
            to="/login"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
          >
            Sign In →
          </Link>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">

          <div className="flex flex-col gap-6 px-6 py-6">

            <a
              href="#features"
              onClick={closeMenu}
              className="text-slate-300 transition hover:text-blue-400"
            >
              Features
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-slate-300 transition hover:text-blue-400"
            >
              Contact
            </a>

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-700"
            >
              Sign In
            </Link>

          </div>

        </div>
      )}
    </header>
  );
}