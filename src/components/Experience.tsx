"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const roles = [
  {
    title: "DevOps Engineer",
    company: "Newroz Technologies Limited",
    meta: "Fintech · Mirpur DOHS, Dhaka",
    period: "Mar 2023 — Present",
    current: true,
    points: [
      "Manage and optimize AWS cloud infrastructure for cost-effective, highly available production systems.",
      "Build and maintain CI/CD pipelines with GitHub Actions, Jenkins & CodeDeploy, improving release frequency and reliability.",
      "Provision infrastructure as code with Terraform; containerize microservices with Docker.",
      "Configure SSL/TLS, Cloudflare, IAM roles/policies and enforce cloud security best practices.",
      "Run monitoring & observability with Prometheus, Grafana and CloudWatch; own root-cause analysis and on-call rotation.",
    ],
  },
  {
    title: "Assistant Manager, Technical Service Division",
    company: "PSP Group",
    meta: "IT, Security, Surveillance & Intelligence Solutions · Tejgaon, Dhaka",
    period: "Sep 2022 — Feb 2023",
    points: [
      "Managed end-to-end project lifecycle from initiation to customer deployment.",
      "Deployed and acceptance-tested specialized GSM, UMTS and LTE solutions in enterprise environments.",
    ],
  },
  {
    title: "System Support Engineer",
    company: "PSP Group",
    meta: "IT, Security, Surveillance & Intelligence Solutions",
    period: "Jan 2018 — Aug 2022",
    points: [
      "Provided technical support, managed infrastructure incidents, and maintained system stability.",
    ],
  },
  {
    title: "Junior Executive, Technical Service Division",
    company: "PSP Group",
    meta: "IT, Security, Surveillance & Intelligence Solutions",
    period: "Feb 2016 — Dec 2017",
    points: [
      "Assisted in technical operations and client-facing support for IT and surveillance solutions.",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="experience" className="py-24 md:py-28 px-6 bg-slate-50 dark:bg-[#080a0f]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <span className="font-mono-custom text-emerald-600 dark:text-emerald-400 text-sm">
            <span className="text-slate-400 dark:text-slate-600">$</span> git log --oneline --author=ashraf
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">Experience</h2>
        </motion.div>

        <div className="relative pl-8 md:pl-10">
          {/* vertical line */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-black/10 dark:via-white/10 to-transparent" />

          <div className="flex flex-col gap-10">
            {roles.map((r, i) => (
              <motion.div
                key={r.title + r.period}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative"
              >
                {/* node */}
                <span
                  className={`absolute -left-8 md:-left-10 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 ${
                    r.current
                      ? "bg-emerald-400 border-emerald-300 shadow-[0_0_0_4px_rgba(62,207,142,0.15)]"
                      : "bg-white dark:bg-[#10151d] border-slate-300 dark:border-slate-600"
                  }`}
                />

                <div className="bg-white dark:bg-[#10151d] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none rounded-xl p-5 md:p-6 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-colors">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                    <h3 className="text-slate-900 dark:text-white font-semibold text-base md:text-lg">{r.title}</h3>
                    {r.current && (
                      <span className="font-mono-custom text-[10px] uppercase tracking-wide bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        current
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-1">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">{r.company}</span>
                    <span className="text-slate-400 dark:text-slate-600">·</span>
                    <span className="text-slate-500">{r.meta}</span>
                  </div>
                  <p className="font-mono-custom text-xs text-slate-500 mb-4">{r.period}</p>
                  <ul className="flex flex-col gap-2">
                    {r.points.map((p, pi) => (
                      <li key={pi} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="text-slate-400 dark:text-slate-600 mt-0.5 shrink-0">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
