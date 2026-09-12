"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

type Line = { prompt?: boolean; text: string; className?: string };

const SCRIPT: Line[] = [
  { prompt: true, text: "whoami" },
  { text: "M. Ashrafuzzaman — DevOps Engineer", className: "text-white" },
  { prompt: true, text: "cat focus.txt" },
  { text: "Cloud Infrastructure · CI/CD Automation · Observability", className: "text-emerald-400" },
  { prompt: true, text: "./uptime.sh --summary" },
  { text: "9+ yrs IT · 3.5+ yrs DevOps · 7+ production services shipped", className: "text-slate-400" },
];

function useTypewriter(lines: Line[], speed = 22, lineDelay = 260) {
  const [rendered, setRendered] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const out: string[] = [];

    async function run() {
      for (const line of lines) {
        if (cancelled) return;
        const lineIndex = out.length;
        out.push("");
        let current = "";
        for (const ch of line.text) {
          if (cancelled) return;
          current += ch;
          out[lineIndex] = current;
          setRendered([...out]);
          await new Promise((r) => setTimeout(r, speed));
        }
        await new Promise((r) => setTimeout(r, lineDelay));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { rendered, done };
}

export default function Hero() {
  const { rendered, done } = useTypewriter(SCRIPT);
  const visibleCount = rendered.length > 0 ? rendered.length : 0;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 bg-[#080a0f]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-500/[0.07] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 md:w-80 md:h-80 bg-cyan-500/[0.06] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-6 w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-10 items-center">
        {/* Left: intro text */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="relative block w-fit mx-auto lg:mx-0 mb-5"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-md opacity-40" />
            <Image
              src="/profile.jpg"
              alt="M. Ashrafuzzaman"
              width={112}
              height={112}
              priority
              className="relative rounded-full w-24 h-24 lg:w-28 lg:h-28 object-cover border-2 border-emerald-400/40 shadow-xl shadow-black/40"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono-custom px-3.5 py-1.5 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            status: open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-2 leading-[1.05] tracking-tight"
          >
            M.{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Ashrafuzzaman
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="font-mono-custom text-base md:text-lg text-slate-300 mb-6"
          >
            DevOps Engineer <span className="text-slate-600">·</span>{" "}
            <span className="text-slate-400">building infrastructure that just keeps running</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="max-w-lg mx-auto lg:mx-0 text-slate-400 text-base md:text-lg leading-relaxed mb-9"
          >
            I&apos;m a DevOps Engineer designing and operating AWS infrastructure for
            production platforms across fintech, ecommerce and beyond — CI/CD, containers
            and infrastructure-as-code, watched over by monitoring that catches problems
            before customers do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-[#061109] font-semibold px-7 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 hover:bg-emerald-500/5 text-center"
            >
              Get In Touch
            </a>
            <a
              href="/Ashrafuzzaman_Resume_DevOps.pdf"
              download
              className="flex items-center justify-center gap-2 text-slate-400 hover:text-emerald-400 font-medium transition-colors py-1"
            >
              <FiDownload className="text-lg" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex justify-center lg:justify-start gap-5"
          >
            {[
              { icon: <FiGithub />, href: "https://github.com/imashnobel", label: "GitHub" },
              { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/imashrafuzzaman/", label: "LinkedIn" },
              { icon: <FiMail />, href: "mailto:ashrafuzzamannobel@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-slate-500 hover:text-emerald-400 text-xl transition-colors duration-200 p-2 -m-2"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-md" />
          <div className="relative scanlines overflow-hidden bg-[#0d1117] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/40">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono-custom text-[11px] text-slate-500">
                ashraf@devops:~
              </span>
            </div>
            {/* Body */}
            <div className="p-5 md:p-6 font-mono-custom text-[13px] md:text-sm leading-relaxed min-h-[260px]">
              {SCRIPT.map((line, i) => {
                const text = rendered[i] ?? "";
                const isCurrent = i === visibleCount - 1 && !done;
                if (i > visibleCount - 1) return null;
                return (
                  <div key={i} className={line.prompt ? "flex gap-2 mt-3 first:mt-0" : "pl-4"}>
                    {line.prompt && <span className="text-emerald-400 shrink-0">$</span>}
                    <span className={line.className ?? "text-slate-300"}>
                      {text}
                      {isCurrent && <span className="animate-caret text-emerald-400">▍</span>}
                    </span>
                  </div>
                );
              })}
              {done && (
                <div className="flex gap-2 mt-3">
                  <span className="text-emerald-400">$</span>
                  <span className="animate-caret text-emerald-400">▍</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
