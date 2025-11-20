"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { cn } from "@/lib/utils";

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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
                            Satya<span className="text-foreground">jyoti</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/Zenus004" target="Satyajyoti" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                            <FiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/satyajyoti-mohanty-716674266" target="Satyajyoti Mohanty" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                            <FiLinkedin size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-foreground/80 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex space-x-4 px-3 py-2 mt-4 border-t border-border pt-4">
                                <a href="https://github.com/Zenus004" target="Satyajyoti" rel="noreferrer" className="text-foreground/60 hover:text-primary">
                                    <FiGithub size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/satyajyoti-mohanty-716674266" target="Satyajyoti Mohanty" rel="noreferrer" className="text-foreground/60 hover:text-primary">
                                    <FiLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
