"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiCode } from "react-icons/fi";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((link) => link.href.substring(1));
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });
            if (current) {
                setActiveSection(`#${current}`);
            } else {
                setActiveSection("");
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // close mobile menu on navigation (helps SPA anchors)
    const handleNavClick = () => setIsOpen(false);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-purple-500/5"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Enhanced Logo */}
                    <div className="flex-shrink-0 group">
                        {/* Link now takes className directly — no legacyBehavior */}
                        <Link href="/" className="flex items-center gap-3">
                            {/* Logo Icon */}
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FiCode className="w-5 h-5 text-white" />
                                </div>
                                <div className="absolute inset-0 bg-purple-500 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                            </div>

                            {/* Logo Text */}
                            <div className="text-2xl font-bold tracking-tight select-none">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    Satya
                                </span>
                                <span className="text-white">jyoti</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1 bg-slate-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-slate-800">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.href ? "text-white" : "text-slate-400 hover:text-white"
                                        }`}
                                    onClick={handleNavClick}
                                >
                                    {activeSection === link.href && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://github.com/Zenus004"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative p-2.5 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                            <div className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/satyajyoti-mohanty-716674266"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative p-2.5 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                            <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen((v) => !v)}
                            className="relative p-3 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX className="w-6 h-6 text-white" /> : <FiMenu className="w-6 h-6 text-white" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="md:hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-3 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="group relative block px-5 py-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all overflow-hidden animate-fade-in"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                    onClick={() => {
                                        handleNavClick();
                                        setTimeout(() => {
                                            const id = link.href.replace("#", "");
                                            const el = document.getElementById(id);
                                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }, 80);
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative z-10 text-slate-300 group-hover:text-white font-medium transition-colors">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}

                            {/* Mobile Social Links */}
                            <div className="flex gap-3 pt-4 border-t border-slate-800">
                                <a
                                    href="https://github.com/Zenus004"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 group relative p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all flex items-center justify-center"
                                    aria-label="GitHub"
                                >
                                    <FiGithub className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                                    <div className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/satyajyoti-mohanty-716674266"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 group relative p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all flex items-center justify-center"
                                    aria-label="LinkedIn"
                                >
                                    <FiLinkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
        </nav>
    );
}
