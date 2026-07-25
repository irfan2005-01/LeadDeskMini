import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Search,
  BarChart3,
  Clock3,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: <Users size={34} />,
    title: "Lead Management",
    description:
      "Capture, organize and manage every lead from a single dashboard without losing opportunities.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Secure Authentication",
    description:
      "JWT authentication keeps your dashboard protected and your business data secure.",
  },
  {
    icon: <Search size={34} />,
    title: "Smart Search",
    description:
      "Instantly find leads by customer name or email using real-time filtering.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Live Dashboard",
    description:
      "Monitor total leads, contacted customers and conversions with beautiful statistics.",
  },
  {
    icon: <Clock3 size={34} />,
    title: "Fast Workflow",
    description:
      "Update lead status with one click and keep your sales pipeline organized.",
  },
  {
    icon: <Smartphone size={34} />,
    title: "Responsive Design",
    description:
      "Works perfectly across desktops, tablets and mobile devices with a clean UI.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400">
            FEATURES
          </span>

          <h2 className="mt-8 text-5xl font-bold">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            LeadDesk Mini gives businesses a modern lead management experience
            with secure authentication, real-time updates and a clean dashboard.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]"
            >

              <div className="mb-8 inline-flex rounded-2xl bg-blue-500/10 p-5 text-blue-400 transition group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="leading-8 text-slate-400">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}