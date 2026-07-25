import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import api from "../services/api";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/leads", form);

      toast.success("Lead submitted successfully!");

      setForm({
        name: "",
        email: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-28 text-white"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
              CONTACT US
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight">
              Ready to Grow
              <br />
              Your Business?
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              Tell us about your project and our team will
              contact you as soon as possible.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-green-500/10 p-3 text-green-400">
                  <CheckCircle2 />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Fast Response
                  </h4>

                  <p className="text-slate-400">
                    We usually reply within 24 hours.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-green-500/10 p-3 text-green-400">
                  <CheckCircle2 />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Free Consultation
                  </h4>

                  <p className="text-slate-400">
                    Discuss your requirements with our experts.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-green-500/10 p-3 text-green-400">
                  <CheckCircle2 />
                </div>

                <div>

                  <h4 className="font-semibold">
                    Secure Communication
                  </h4>

                  <p className="text-slate-400">
                    Your information stays private and protected.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur"
          >

            <div className="grid gap-6">

              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
              />

              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
              >
                <option value="">Select Budget</option>
                <option>Less than ₹50,000</option>
                <option>₹50,000 - ₹1,00,000</option>
                <option>More than ₹1,00,000</option>
              </select>

              <textarea
                rows={6}
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none transition focus:border-blue-500"
              />

              <button
                disabled={loading}
                className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Lead
                    <Send size={18} />
                  </>
                )}
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}