"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/ashrafuzzamannobel@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please email me directly at ashrafuzzamannobel@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-28 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <span className="font-mono-custom text-emerald-400 text-sm">
            <span className="text-slate-600">$</span> ssh ashraf@get-in-touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Let&apos;s Work Together</h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            Open to freelance projects, full-time roles and infrastructure consulting. Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {[
              { icon: <FiMail className="text-emerald-400 text-xl" />, label: "Email", value: "ashrafuzzamannobel@gmail.com", href: "mailto:ashrafuzzamannobel@gmail.com" },
              { icon: <FiMapPin className="text-cyan-400 text-xl" />, label: "Location", value: "Mirpur 12, Dhaka, Bangladesh", href: "#" },
              { icon: <FiLinkedin className="text-violet-400 text-xl" />, label: "LinkedIn", value: "linkedin.com/in/imashrafuzzaman", href: "https://www.linkedin.com/in/imashrafuzzaman/" },
              { icon: <FiGithub className="text-slate-300 text-xl" />, label: "GitHub", value: "github.com/imashnobel", href: "https://github.com/imashnobel" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#10151d] border border-white/[0.06] rounded-xl p-4 hover:border-emerald-500/20 transition-all group"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="font-mono-custom text-xs text-slate-500">{item.label}</p>
                  <p className="text-slate-200 text-sm font-medium group-hover:text-emerald-400 transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form styled as a terminal window */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center bg-[#10151d] border border-emerald-500/20 rounded-2xl p-10 text-center">
                <div className="font-mono-custom text-emerald-400 text-3xl mb-4">[ OK ]</div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out — I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <div className="bg-[#0d1117] border border-white/[0.08] rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-mono-custom text-[11px] text-slate-500">new_message.sh</span>
                </div>
                <form onSubmit={handleSubmit} className="p-6 md:p-7 flex flex-col gap-5">
                  <div>
                    <label className="block font-mono-custom text-xs text-slate-500 mb-1.5">--name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-custom text-xs text-slate-500 mb-1.5">--email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-custom text-xs text-slate-500 mb-1.5">--message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-rose-400 text-sm text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-[#061109] font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        ./send_message
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
