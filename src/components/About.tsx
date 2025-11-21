"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="text-primary">About</span> Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
                            <p>
                                Hello! I'm a passionate Full Stack Developer with a knack for creating beautiful and functional web applications. I specialize in the React ecosystem and modern web technologies.
                            </p>
                            <p>
                                I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me exploring new technologies, contributing to open source, or sharing my knowledge with the community.
                            </p>
                            <p>
                                My goal is to build accessible, performant, and scalable applications that provide real value to users.
                            </p>
                        </div>
                        <div className="relative h-64 md:h-96 bg-card rounded-2xl overflow-hidden border border-border shadow-xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center text-foreground/20 font-mono text-xl">
                                [Profile Image Placeholder]
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
