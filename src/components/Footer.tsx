"use client";

import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="py-8 bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-foreground/60 text-sm">
                    © {new Date().getFullYear()} Satyajyoti Mohanty. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/Zenus004"
                        target="Satyajyoti"
                        rel="noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/satyajyoti-mohanty-716674266"
                        target="Satyajyoti Mohanty"
                        rel="noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin size={20} />
                    </a>
                </div>

                <div className="text-foreground/60 text-sm flex items-center gap-1">
                    Made with <FiHeart className="text-red-500 fill-current" /> using Next.js
                </div>
            </div>
        </footer>
    );
}
