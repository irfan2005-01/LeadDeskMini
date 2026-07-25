import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-between gap-20 px-6 py-20 lg:flex-row">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">

            <ShieldCheck size={18} className="text-blue-400" />

            <span className="text-sm text-blue-300">
              Secure Lead Management Platform
            </span>

          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            Capture Every

            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">

              Business Opportunity

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

            LeadDesk Mini helps agencies collect enquiries,
            manage prospects, and convert more visitors into
            paying customers using a fast, secure dashboard.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-blue-700"
            >
              Get Started
            </a>

            <button
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-4 transition hover:border-blue-500 hover:bg-slate-900"
            >
              Learn More

              <ArrowRight size={18} />

            </button>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">

              <TrendingUp className="mb-4 text-blue-400" />

              <h2 className="text-3xl font-bold">

                250+

              </h2>

              <p className="mt-2 text-slate-400">

                Businesses

              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">

              <CheckCircle2 className="mb-4 text-green-400" />

              <h2 className="text-3xl font-bold">

                4,800+

              </h2>

              <p className="mt-2 text-slate-400">

                Leads Managed

              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">

              <ShieldCheck className="mb-4 text-cyan-400" />

              <h2 className="text-3xl font-bold">

                99.9%

              </h2>

              <p className="mt-2 text-slate-400">

                Uptime

              </p>

            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex w-full max-w-xl justify-center"
        >
          <div className="relative">

            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

              <img
                src="/hero.png"
                alt="LeadDesk Dashboard"
                className="w-full object-cover"
              />

            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="absolute -left-8 top-8 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur"
            >

              <p className="text-sm text-slate-400">
                Total Leads
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                248
              </h2>

              <p className="mt-2 text-sm text-green-400">
                ↑ 18% this month
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="absolute -right-8 bottom-10 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl backdrop-blur"
            >

              <p className="text-sm text-slate-400">
                Conversion Rate
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                64%
              </h2>

              <p className="mt-2 text-sm text-cyan-400">
                Excellent Performance
              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
