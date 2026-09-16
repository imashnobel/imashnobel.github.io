"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  SiKubernetes, SiTerraform,
  SiDocker, SiGithubactions, SiPrometheus,
  SiGrafana, SiPostgresql, SiNginx, SiGit,
  SiAnsible, SiJenkins, SiMysql, SiMongodb, SiCloudflare,
  SiCplusplus, SiUbuntu,
} from "react-icons/si";
import { FiDatabase, FiCloud, FiTerminal, FiActivity, FiShield, FiLayers } from "react-icons/fi";

const categories = [
  {
    name: "cloud_aws",
    color: "emerald",
    skills: [
      { icon: <FiCloud />, name: "EC2 / RDS / S3" },
      { icon: <SiKubernetes />, name: "EKS" },
      { icon: <FiCloud />, name: "Lambda / CloudFormation" },
      { icon: <FiLayers />, name: "IAM / VPC / Route 53" },
    ],
  },
  {
    name: "automation_iac",
    color: "cyan",
    skills: [
      { icon: <SiTerraform />, name: "Terraform" },
      { icon: <SiAnsible />, name: "Ansible" },
      { icon: <FiDatabase />, name: "Packer" },
      { icon: <FiCloud />, name: "AWS CodeDeploy" },
    ],
  },
  {
    name: "containers_cicd",
    color: "violet",
    skills: [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiGithubactions />, name: "GitHub Actions" },
      { icon: <SiJenkins />, name: "Jenkins" },
    ],
  },
  {
    name: "monitoring",
    color: "sky",
    skills: [
      { icon: <SiPrometheus />, name: "Prometheus" },
      { icon: <SiGrafana />, name: "Grafana" },
      { icon: <FiActivity />, name: "CloudWatch" },
      { icon: <FiActivity />, name: "Graylog / Monit" },
    ],
  },
  {
    name: "security_network",
    color: "amber",
    skills: [
      { icon: <FiShield />, name: "SSL/TLS" },
      { icon: <SiCloudflare />, name: "Cloudflare" },
      { icon: <FiShield />, name: "IAM Policies / VPN" },
      { icon: <SiNginx />, name: "Nginx / Apache" },
    ],
  },
  {
    name: "databases",
    color: "rose",
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    name: "os_scm_lang",
    color: "slate",
    skills: [
      { icon: <SiUbuntu />, name: "Ubuntu / CentOS" },
      { icon: <SiGit />, name: "Git / GitHub" },
      { icon: <FiTerminal />, name: "Bash / PowerShell" },
      { icon: <SiCplusplus />, name: "C++ / HTML / CSS" },
    ],
  },
];

const colorMap: Record<string, string> = {
  emerald: "border-emerald-500/30 dark:border-emerald-500/20 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  cyan: "border-cyan-500/30 dark:border-cyan-500/20 hover:border-cyan-500/60 dark:hover:border-cyan-500/50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
  violet: "border-violet-500/30 dark:border-violet-500/20 hover:border-violet-500/60 dark:hover:border-violet-500/50 group-hover:text-violet-600 dark:group-hover:text-violet-400",
  sky: "border-sky-500/30 dark:border-sky-500/20 hover:border-sky-500/60 dark:hover:border-sky-500/50 group-hover:text-sky-600 dark:group-hover:text-sky-400",
  amber: "border-amber-500/30 dark:border-amber-500/20 hover:border-amber-500/60 dark:hover:border-amber-500/50 group-hover:text-amber-600 dark:group-hover:text-amber-400",
  rose: "border-rose-500/30 dark:border-rose-500/20 hover:border-rose-500/60 dark:hover:border-rose-500/50 group-hover:text-rose-600 dark:group-hover:text-rose-400",
  slate: "border-slate-400/40 dark:border-slate-500/20 hover:border-slate-500/60 dark:hover:border-slate-500/50 group-hover:text-slate-700 dark:group-hover:text-slate-300",
};

const titleColorMap: Record<string, string> = {
  emerald: "text-emerald-600 dark:text-emerald-400",
  cyan: "text-cyan-600 dark:text-cyan-400",
  violet: "text-violet-600 dark:text-violet-400",
  sky: "text-sky-600 dark:text-sky-400",
  amber: "text-amber-600 dark:text-amber-400",
  rose: "text-rose-600 dark:text-rose-400",
  slate: "text-slate-600 dark:text-slate-400",
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 md:py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16"
        >
          <span className="font-mono-custom text-emerald-600 dark:text-emerald-400 text-sm">
            <span className="text-slate-400 dark:text-slate-600">$</span> cat skills.json
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3">Skills &amp; Tools</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl">
            The technologies I use daily to build and operate production infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.08 }}
              className="bg-white dark:bg-[#10151d] border border-slate-200 dark:border-white/[0.06] shadow-sm dark:shadow-none rounded-2xl p-6 hover:border-slate-300 dark:hover:border-white/10 transition-all"
            >
              <h3 className={`font-mono-custom text-sm font-semibold mb-4 ${titleColorMap[cat.color]}`}>
                <span className="text-slate-400 dark:text-slate-600">&quot;</span>
                {cat.name}
                <span className="text-slate-400 dark:text-slate-600">&quot;:</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((s) => (
                  <div
                    key={s.name}
                    className={`group flex items-center gap-3 bg-black/[0.015] dark:bg-white/[0.02] border rounded-xl px-3 py-2.5 transition-all cursor-default ${colorMap[cat.color]}`}
                  >
                    <span className={`text-xl text-slate-500 transition-colors ${colorMap[cat.color]}`}>
                      {s.icon}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
