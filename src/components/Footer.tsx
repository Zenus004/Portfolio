"use client";

import { FiGithub, FiLinkedin, FiHeart, FiArrowUp, FiMail, FiCode } from "react-icons/fi";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative py-16 bg-slate-950 border-t border-slate-800 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            {/* Gradient Orbs */}
            <div className="absolute -bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    {/* Left Side - Branding */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <FiCode className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Satyajyoti Mohanty</h3>
                                <p className="text-slate-500 text-xs">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Center - Quick Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <a href="#about" className="text-slate-400 hover:text-purple-400 transition-colors">About</a>
                        <a href="#skills" className="text-slate-400 hover:text-purple-400 transition-colors">Skills</a>
                        <a href="#projects" className="text-slate-400 hover:text-purple-400 transition-colors">Projects</a>
                        <a href="#experience" className="text-slate-400 hover:text-purple-400 transition-colors">Experience</a>
                        <a href="#contact" className="text-slate-400 hover:text-purple-400 transition-colors">Contact</a>
                    </div>

                    {/* Right Side - Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Zenus004"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative p-3 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                            <div className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/satyajyoti-mohanty-716674266"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative p-3 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                            <div className="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-800" />
                    </div>
                    <div className="relative flex justify-center">
                        <div className="px-4 bg-slate-950">
                            <div className="flex items-center gap-2 text-slate-600">
                                <div className="w-2 h-2 bg-purple-500/50 rounded-full animate-pulse" />
                                <div className="w-2 h-2 bg-blue-500/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                                <div className="w-2 h-2 bg-pink-500/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <span>© {new Date().getFullYear()} Satyajyoti Mohanty. All rights reserved.</span>
                    </div>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="group relative p-3 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-110"
                        aria-label="Scroll to top"
                    >
                        <FiArrowUp className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors group-hover:-translate-y-1 transition-transform" />
                        <div className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
            `}</style>
        </footer>
    );
}