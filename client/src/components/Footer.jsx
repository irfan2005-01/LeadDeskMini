import { ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-white">

      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-black">
              LeadDesk
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Mini
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              A modern lead management platform built for the
              Digital Heroes Full Stack Development Internship
              Assessment.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a
                href="#features"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Features
              </a>

              <a
                href="#contact"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Contact
              </a>

              <a
                href="/login"
                className="block text-slate-400 transition hover:text-blue-400"
              >
                Admin Login
              </a>

            </div>

          </div>

          {/* Tech Stack */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Tech Stack
            </h3>

            <p className="leading-8 text-slate-400">
              React • Vite • Tailwind CSS • Express • Prisma ORM • SQLite • JWT Authentication
            </p>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © {year} LeadDesk Mini • Built by Syed Irfan Ahmed for the Digital Heroes Internship Assessment.
          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
          >
            Back to Top
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}