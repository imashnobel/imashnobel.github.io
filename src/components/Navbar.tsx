"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#monitoring", label: "monitoring" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#090c11]/90 backdrop-blur-md border-b border-black/[0.06] dark:border-white/[0.06] shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 font-mono-custom font-semibold text-lg">
          <Image src="/logo.svg" alt="Ashrafuzzaman logo" width={30} height={30} className="rounded-lg" />
          <span className="text-slate-400 dark:text-slate-500">~/</span>
          <span className="text-slate-900 dark:text-white">ashraf</span>
          <span className="text-emerald-600 dark:text-emerald-400">.sh</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono-custom text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-[13px] transition-colors duration-200"
              >
                <span className="text-slate-400 dark:text-slate-600">/</span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle className="w-9 h-9" />
          </li>
          <li>
            <a
              href="/Ashrafuzzaman_Resume_DevOps.pdf"
              download
              className="flex items-center gap-1.5 border border-slate-300 dark:border-white/10 hover:border-emerald-400/50 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-[13px] font-medium px-3.5 py-2 rounded-lg transition-colors duration-200"
            >
              <FiDownload className="text-sm" />
              resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-mono-custom bg-emerald-500 hover:bg-emerald-400 text-[#061109] text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              &gt; hire_me
            </a>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle className="w-9 h-9" />
          <button
            className="text-slate-700 dark:text-slate-300 text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-[#090c11]/95 backdrop-blur-md border-t border-black/[0.06] dark:border-white/[0.06] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono-custom block text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 text-base transition-colors"
                >
                  <span className="text-slate-400 dark:text-slate-600">/</span>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Ashrafuzzaman_Resume_DevOps.pdf"
                download
                className="flex items-center justify-center gap-2 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-2.5 rounded-lg"
              >
                <FiDownload />
                Download Resume
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-mono-custom block bg-emerald-500 text-[#061109] text-center text-sm font-semibold px-4 py-2.5 rounded-lg"
              >
                &gt; hire_me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
