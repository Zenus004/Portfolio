"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                        Available for Hire
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                >
                    Building Digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Experiences
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
                >
                    I'm a Full Stack Developer specializing in building exceptional digital experiences.
                    Currently focused on accessible, human-centered products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                    >
                        View Projects <FiArrowRight />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-transparent border border-border hover:bg-foreground/5 transition-colors font-medium flex items-center gap-2"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-foreground/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
