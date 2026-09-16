"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiDocker, SiJenkins } from "react-icons/si";
import { FiDatabase, FiCloud, FiShield, FiActivity } from "react-icons/fi";

const projects = [
  {
    title: "ZiCharge",
    subtitle: "Mobile Wallet",
    description:
      "ZiCharge is a secure mobile wallet and fintech application designed for digital transactions, shopping, and online payments where I manage containerized application deployments and AWS infrastructure, backed by CI/CD pipelines, centralized logging, metrics, tracing and service-availability monitoring.",
    tags: ["Docker", "AWS", "CI/CD", "Observability"],
    icons: [<SiDocker key="docker" />, <FiActivity key="activity" />],
    color: "cyan",
    category: "FinTech · Mobile Wallet",
  },
  {
    title: "FastPay",
    subtitle: "Digital Payment Platform (Iraq)",
    description:
      "A large-scale digital payment platform running on-premises infrastructure in Iraq. Provide remote DevOps and infrastructure operations from Bangladesh, managing MySQL Enterprise Cluster, Redis, Jenkins-based CI/CD, production monitoring, security hardening, system reliability, and day-to-day infrastructure support.",
    tags: ["MySQL Clusters", "Redis Sentinel", "Jenkins", "Security & DR", "PCI DSS"],
    icons: [<SiJenkins key="jenkins" />, <FiShield key="shield" />],
    color: "emerald",
    category: "FinTech · Payments",
  },  
  {
    title: "ShotMob",
    subtitle: "Sports Platform",
    description:
      "A popular sports mobile application specifically tailored for football fans in Iraq and the Kurdistan Region. Contributed to AWS infrastructure management, monitoring, and system reliability to support high availability and smooth application performance.",
    tags: ["AWS", "RDS", "SigNoz"],
    icons: [<FiCloud key="aws" />, <SiDocker key="docker" />],
    color: "violet",
    category: "Sports Tech",
  },
  {
    title: "CardSelling",
    subtitle: "Digital Card Platform",
    description:
      "A digital card-selling platform running on production-grade AWS infrastructure.Managed AWS infrastructure, Docker-based deployments, CI/CD automation with OIDC-based authentication, AWS CodeDeploy, monitoring and logging, application health monitoring, security hardening, troubleshooting, and high-availability components to maintain secure, reliable, and resilient production operations.",
    tags: ["AWS", "Automated Deployments", "Monitoring & Logging", "High Availability"],
    icons: [<FiCloud key="aws" />, <FiDatabase key="db" />],
    color: "sky",
    category: "FinTech · eCommerce",
  },
  {
    title: "TktatIQ",
    subtitle: "Ticketing & Event Management",
    description:
      "The primary electronic platform for booking football tickets in Iraq. Managed AWS infrastructure, Docker deployments, CI/CD, monitoring and logging, security, troubleshooting, and production reliability.",
    tags: ["CI/CD", "Cloud Infra", "Docker", "Production Monitoring"],
    icons: [<SiJenkins key="jenkins" />, <SiDocker key="docker" />],
    color: "amber",
    category: "Ticketing & Events",
  },
  {
    title: "Fast Connect",
    subtitle: "POS Solution · Advanced e-KYC",
    description:
      "A digital Point of Sale solution designed to streamline merchant operations and customer onboarding through advanced electronic KYC capabilities. Contributed to the infrastructure, deployment, and operational support of the platform, focusing on reliable application delivery and production environment management.",
    tags: ["POS", "e-KYC", "Cloud Infra", "Production Support"],
    icons: [<FiCloud key="aws" />, <FiShield key="shield" />],
    color: "rose",
    category: "FinTech · POS & e-KYC",
  },
];

const colorBorderMap: Record<string, string> = {
  emerald: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  cyan: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
  violet: "hover:border-violet-500/40 hover:shadow-violet-500/10",
  amber: "hover:border-amber-500/40 hover:shadow-amber-500/10",
  sky: "hover:border-sky-500/40 hover:shadow-sky-500/10",
  rose: "hover:border-rose-500/40 hover:shadow-rose-500/10",
};

const tagColorMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
  violet: "bg-violet-500/10 text-violet-700 dark:text-violet-400",
  amber: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  sky: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  rose: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
};

const catColorMap: Record<string, string> = {
  emerald: "text-emerald-600 dark:text-emerald-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  violet: "text-violet-600 dark:text-violet-400",
  amber: "text-amber-600 dark:text-amber-400",
  sky: "text-sky-600 dark:text-sky-400",
  rose: "text-rose-600 dark:text-rose-400",
};

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 md:py-28 px-6 bg-slate-50 dark:bg-[#080a0f]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <span className="font-mono-custom text-emerald-600 dark:text-emerald-400 text-sm">
            <span className="text-slate-400 dark:text-slate-600">$</span> ls -la ./projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl">
            Production platforms I&apos;ve built, deployed and operated — spanning fintech, EV charging, sports and ticketing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`group relative bg-white dark:bg-[#10151d] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl ${colorBorderMap[p.color]}`}
            >
              {/* Category */}
              <span className={`text-xs font-semibold tracking-wide ${catColorMap[p.color]}`}>
                {p.category}
              </span>

              {/* Title */}
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-xs mt-0.5">{p.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${tagColorMap[p.color]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer icons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/[0.06]">
                <div className="flex gap-3 text-slate-400 dark:text-slate-600 text-xl">
                  {p.icons.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <a href="https://github.com/imashnobel" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/imashrafuzzaman/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors" aria-label="Link">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
