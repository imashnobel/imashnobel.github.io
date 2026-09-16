"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certifications = [
  { name: "AWS Solutions Architect Associate Training", org: "Azzda Technology Solution", date: "Sep–Dec 2022" },
  { name: "DevOps Training", org: "CSL Training", date: "Sep–Dec 2022" },
  { name: "AWS Cloud Practitioner Essentials", org: "AWS", date: "Nov 2022" },
  { name: "Linux Cloud and DevOps", org: "Coursera", date: "Nov 2022" },
  { name: "AWS Community Day Bangladesh — Terraform & EKS Workshop", org: "AWS Community", date: "Dec 2022" },
  { name: "CCNA: Switching, Routing & Wireless Essentials", org: "Cisco", date: "Dec 2020" },
];

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="certifications" className="py-24 md:py-28 px-6 bg-slate-50 dark:bg-[#080a0f]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono-custom text-emerald-600 dark:text-emerald-400 text-sm">
            <span className="text-slate-400 dark:text-slate-600">$</span> cat certifications.log
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Certifications &amp; Training
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3 bg-white dark:bg-[#10151d] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none rounded-xl p-4 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-colors"
            >
              <FiAward className="text-emerald-600 dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-slate-800 dark:text-slate-200 text-sm font-medium leading-snug">{c.name}</p>
                <p className="text-slate-500 text-xs mt-1">
                  {c.org} <span className="text-slate-400 dark:text-slate-700">·</span>{" "}
                  <span className="font-mono-custom">{c.date}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
