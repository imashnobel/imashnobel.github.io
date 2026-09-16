"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SiPrometheus, SiGrafana } from "react-icons/si";
import {
  FiActivity,
  FiAlertTriangle,
  FiFileText,
  FiServer,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const pipeline = [
  {
    label: "Services",
    sublabel: "FastPay · ZiCharge · Cardselling",
    icon: <FiServer />,
    color: "slate",
  },
  {
    label: "Prometheus",
    sublabel: "Metrics collection",
    icon: <SiPrometheus />,
    color: "violet",
  },
  {
    label: "Grafana",
    sublabel: "Dashboards · visualization",
    icon: <SiGrafana />,
    color: "amber",
  },
  {
    label: "CloudWatch",
    sublabel: "AWS-native monitoring & alarms",
    icon: <FiActivity />,
    color: "emerald",
  },
];

const capabilities = [
  {
    icon: <FiActivity className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    title: "Metrics & Dashboards",
    description:
      "Set up Prometheus scraping and Grafana dashboards to track application and infrastructure health across production services in real time.",
    projects: ["ZiCharge", "FastPay"],
  },
  {
    icon: <FiFileText className="text-cyan-600 dark:text-cyan-400 text-xl" />,
    title: "Centralized Logging",
    description:
      "Used Graylog and CloudWatch Logs to centralize application and infrastructure logs for fast searching and correlation during incident debugging.",
    projects: ["ZiCharge", "CardSelling"],
  },
  {
    icon: <FiAlertTriangle className="text-amber-600 dark:text-amber-400 text-xl" />,
    title: "Alerting & Incident Response",
    description:
      "Investigated production incidents with CloudWatch and Performance Insights, ran root cause analysis, and set up alerting to catch issues before customers report them.",
    projects: ["ZiCharge", "FastPay"],
  },
  {
    icon: <FiServer className="text-violet-600 dark:text-violet-400 text-xl" />,
    title: "Infra Monitoring",
    description:
      "Tracked EC2, RDS and container-level metrics — CPU, memory, disk, network — alongside application telemetry in one place.",
    projects: ["ZiCharge", "ShotMob"],
  },
];

const colorRing: Record<string, string> = {
  slate: "border-slate-400/40 dark:border-slate-500/30 text-slate-700 dark:text-slate-300 bg-slate-500/5",
  violet: "border-violet-500/40 dark:border-violet-500/30 text-violet-700 dark:text-violet-400 bg-violet-500/5",
  amber: "border-amber-500/40 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 bg-amber-500/5",
  emerald: "border-emerald-500/40 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 bg-emerald-500/5",
};

export default function Observability() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="monitoring" className="py-24 md:py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <span className="font-mono-custom text-emerald-600 dark:text-emerald-400 text-sm">
            <span className="text-slate-400 dark:text-slate-600">$</span> tail -f /var/log/production.log
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">
            Monitoring &amp; Observability
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl">
            I set up monitoring with Prometheus, Grafana and CloudWatch across
            production services — so problems surface as alerts,
            not as customer tickets.
          </p>
        </motion.div>

        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-2 font-mono-custom text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-500/[0.06] border border-emerald-500/15 rounded-lg px-4 py-2.5 mb-6"
        >
          <FiCheckCircle className="shrink-0" />
          <span>all systems operational — 5/5 services reporting healthy</span>
        </motion.div>

        {/* Pipeline flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-[#10151d] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none rounded-2xl p-6 md:p-8 mb-10"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
            {pipeline.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 flex-1">
                <div
                  className={`flex-1 flex items-center gap-3 rounded-xl border px-4 py-3.5 ${colorRing[step.color]}`}
                >
                  <span className="text-xl shrink-0">{step.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                      {step.label}
                    </p>
                    <p className="text-xs text-slate-500 leading-tight mt-0.5 truncate">
                      {step.sublabel}
                    </p>
                  </div>
                </div>
                {i < pipeline.length - 1 && (
                  <FiArrowRight className="hidden md:block text-slate-400 dark:text-slate-600 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="bg-white dark:bg-[#10151d] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none rounded-2xl p-5 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-colors flex flex-col gap-3"
            >
              <div>{c.icon}</div>
              <h3 className="text-slate-900 dark:text-white font-semibold text-sm">{c.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed flex-1">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {c.projects.map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-black/[0.02] dark:bg-white/5 border border-slate-200 dark:border-white/[0.06] px-2 py-0.5 rounded-full"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
