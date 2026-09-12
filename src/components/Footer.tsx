import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#080a0f] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 font-mono-custom font-semibold text-lg">
          <span className="text-slate-500">~/</span>
          <span className="text-white">ashraf</span>
          <span className="text-emerald-400">.sh</span>
        </a>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono-custom text-sm text-slate-500">
          {["about", "experience", "skills", "projects", "monitoring", "contact"].map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="hover:text-emerald-400 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-slate-500 text-xl">
          <a href="https://github.com/imashnobel" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/imashrafuzzaman/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:ashrafuzzamannobel@gmail.com" className="hover:text-emerald-400 transition-colors" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 font-mono-custom text-slate-600 text-xs">
        © {year} Md Ashrafuzzaman — built with Next.js &amp; Tailwind CSS
      </div>
    </footer>
  );
}
