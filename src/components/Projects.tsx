"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  SiTerraform,
  SiJenkins, SiDocker, SiCloudflare,
} from "react-icons/si";
import { FiDatabase, FiCloud, FiShield } from "react-icons/fi";

const projects = [
  {
    title: "FastPay — e-Wallet (Iraq)",
    description:
      "Iraq's most awaited mobile wallet enabling money transfers, mobile/internet recharge, shopping, and bill payments. Maintained Jenkins CI/CD pipelines to automate build, test and deployment, and ensured PCI DSS compliance through security hardening and access controls.",
    tags: ["Jenkins", "CI/CD", "PCI DSS", "Security Hardening"],
    icons: [<SiJenkins key="jenkins" />, <FiShield key="shield" />],
    color: "orange",
    category: "FinTech · e-Wallet",
  },
  {
    title: "ZiCharge — Mobile Wallet Platform",
    description:
      "A feature-rich mobile wallet offering shopping, gaming, online card purchasing, bill payments, promotions and reward points. Containerized the application with Docker and Amazon ECR for image management, managing deployments for high availability and seamless scaling.",
    tags: ["Docker", "AWS ECR", "High Availability", "Scaling"],
    icons: [<SiDocker key="docker" />, <FiCloud key="aws" />],
    color: "amber",
    category: "FinTech · Mobile Wallet",
  },
  {
    title: "HappyHaat — E-Commerce Platform",
    description:
      "An e-commerce platform for safe and organic food products, connecting consumers with trusted vendors. Built and maintained CI/CD pipelines and configured Cloudflare for DNS management, DDoS protection and performance optimization.",
    tags: ["CI/CD", "Cloudflare", "DNS", "DDoS Protection"],
    icons: [<SiCloudflare key="cf" />, <FiCloud key="aws" />],
    color: "emerald",
    category: "e-Commerce",
  },
  {
    title: "Fast Connect — POS & KYC Solution",
    description:
      "An advanced electronic Point of Sale solution with integrated Know Your Customer (KYC) capabilities for customer identity verification. Managed AWS infrastructure and Git workflows for deployment and version control across environments.",
    tags: ["AWS", "Git Workflows", "KYC", "POS"],
    icons: [<FiCloud key="aws" />, <FiDatabase key="db" />],
    color: "teal",
    category: "FinTech · POS",
  },
  {
    title: "Production Infrastructure & IaC",
    description:
      "Provisioned infrastructure as code using Terraform for repeatable, auditable deployments across production services. Configured SSL/TLS, IAM roles/policies, and enforced cloud security best practices across the AWS environment.",
    tags: ["Terraform", "IAM", "SSL/TLS", "AWS"],
    icons: [<SiTerraform key="tf" />, <FiShield key="shield" />],
    color: "violet",
    category: "Cloud · Platform",
  },
];

const colorBorderMap: Record<string, string> = {
  orange: "hover:border-orange-500/40 hover:shadow-orange-500/10",
  emerald: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
  amber: "hover:border-amber-500/40 hover:shadow-amber-500/10",
  teal: "hover:border-teal-500/40 hover:shadow-teal-500/10",
  rose: "hover:border-rose-500/40 hover:shadow-rose-500/10",
  violet: "hover:border-violet-500/40 hover:shadow-violet-500/10",
};

const tagColorMap: Record<string, string> = {
  orange: "bg-orange-500/10 text-orange-400",
  emerald: "bg-emerald-500/10 text-emerald-400",
  amber: "bg-amber-500/10 text-amber-400",
  teal: "bg-teal-500/10 text-teal-400",
  rose: "bg-rose-500/10 text-rose-400",
  violet: "bg-violet-500/10 text-violet-400",
};

const catColorMap: Record<string, string> = {
  orange: "text-orange-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  teal: "text-teal-400",
  rose: "text-rose-400",
  violet: "text-violet-400",
};

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">Featured Projects</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Production fintech services I&apos;ve built, deployed and operated at Newroz Technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`group relative bg-[#0f172a] border border-white/5 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl ${colorBorderMap[p.color]}`}
            >
              {/* Category badge */}
              <span className={`text-xs font-semibold tracking-wide ${catColorMap[p.color]}`}>
                {p.category}
              </span>

              {/* Title */}
              <h3 className="text-white font-bold text-lg leading-snug group-hover:text-white transition-colors">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
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
              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <div className="flex gap-3 text-slate-600 text-xl">
                  {p.icons.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <a href="https://github.com/imashnobel" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/imashrafuzzaman/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" aria-label="Link">
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
