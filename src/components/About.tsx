"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiServer, FiCloud, FiShield, FiActivity } from "react-icons/fi";

const highlights = [
  { icon: <FiCloud className="text-emerald-400 text-xl" />, text: "Manage and optimize AWS cloud infrastructure — EC2, RDS, S3, IAM, ECS, EKS, CloudWatch — for cost-effective, highly available production systems" },
  { icon: <FiServer className="text-cyan-400 text-xl" />, text: "Run FastPay, ZiCharge, ShotMob, TktatIQ & CardSelling in production — spanning fintech, ecommerce, sports and ticketing" },
  { icon: <FiShield className="text-amber-400 text-xl" />, text: "Ship changes safely with CI/CD — GitHub Actions, Jenkins & CodeDeploy — backed by Terraform for repeatable, auditable deployments" },
  { icon: <FiActivity className="text-violet-400 text-xl" />, text: "Catch issues before customers do — using Prometheus, Grafana, CloudWatch, OpenTelemetry, and the LGTM Stack for full-stack observability, alerting, and faster root-cause analysis." },
];

const stats = [
  { val: "9+", label: "years in IT" },
  { val: "3.5+", label: "years in DevOps" },
  { val: "7+", label: "production services" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="py-24 md:py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <span className="font-mono-custom text-emerald-400 text-sm">
            <span className="text-slate-600">$</span> cat about.md
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left - Bio as a code/comment block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-sm" />
              <div className="relative bg-[#0d1117] border border-white/[0.08] rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 font-mono-custom text-[11px] text-slate-500">about.md</span>
                </div>
                <div className="p-6 md:p-8 font-mono-custom text-[13px] md:text-sm leading-relaxed">
                  <p className="text-slate-500 mb-4"># role</p>
                  <p className="text-slate-300 mb-5">
                    I keep production infrastructure reliable, secure and easy to ship to — so
                    product teams can move fast without breaking things. I&apos;m a{" "}
                    <span className="text-emerald-400">DevOps Engineer</span> at{" "}
                    <span className="text-white">Newroz Technologies Limited</span>, a fintech
                    company, where I own that end to end: design, build and operate the cloud
                    infrastructure our products run on.
                  </p>
                  <p className="text-slate-500 mb-4"># stack</p>
                  <p className="text-slate-300 mb-5">
                    Day to day that means running workloads on{" "}
                    <span className="text-emerald-400">EC2</span>,{" "}
                    <span className="text-emerald-400">Docker</span> and{" "}
                    <span className="text-emerald-400">AWS EKS</span>, codifying it with{" "}
                    <span className="text-cyan-400">Terraform</span> and{" "},
                    <span className="text-cyan-400">Ansible</span>, automate it with{" "}
                    <span className="text-amber-400">Git Actions</span> and{" "},
                    <span className="text-amber-400">Codedeploy</span>, and closing the loop with{" "}
                    <span className="text-violet-400">Prometheus</span>,{" "}
                    <span className="text-violet-400">Grafana</span> and{" "}
                    <span className="text-violet-400">CloudWatch</span> — so problems surface as
                    alerts, not outages.
                  </p>
                  <p className="text-slate-500 mb-4"># education</p>
                  <p className="text-slate-300">
                    BSc. in EEE from Ahsanullah University of Science &amp; Technology (2015),
                    currently pursuing an MSc. in ICT at Bangladesh University of Professionals
                    (2023–present).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 bg-[#10151d] border border-white/[0.06] rounded-xl p-5 hover:border-emerald-500/20 transition-colors"
              >
                <div className="mt-0.5 flex-shrink-0">{h.icon}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{h.text}</p>
              </motion.div>
            ))}

            <div className="grid grid-cols-3 gap-4 mt-2">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#10151d] border border-white/[0.06] rounded-xl p-4 text-center">
                  <div className="font-mono-custom text-2xl font-bold text-emerald-400">{s.val}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
