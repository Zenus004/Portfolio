"use client";

import { motion } from "framer-motion";
import experienceData from "@/data/experience.json";

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    Work <span className="text-primary">Experience</span>
                </motion.h2>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 md:mb-0 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-3 h-3 bg-primary rounded-full border-2 border-background z-10" />

                            {/* Content */}
                            <div className="ml-6 md:ml-0 md:w-1/2 md:px-8">
                                <div
                                    className={`bg-card p-6 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}
                                >
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                    <h4 className="text-foreground/70 mb-4 font-medium">{exp.company}</h4>
                                    <p className="text-foreground/60 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
