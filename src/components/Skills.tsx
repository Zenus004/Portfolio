"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Java", level: 90 },
    { name: "React / Next.js", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js / Express", level: 70 },
    { name: "Spring Boot", level: 80 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Git", level: 85 },
    { name: "TypeScript", level: 50 },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center"
                >
                    My <span className="text-secondary">Skills</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-background p-4 rounded-xl border border-border/50 shadow-sm"
                        >
                            <div className="flex justify-between mb-3">
                                <span className="font-medium text-lg">{skill.name}</span>
                                <span className="text-primary font-mono">{skill.level}%</span>
                            </div>
                            <div className="h-2.5 bg-card rounded-full overflow-hidden border border-border/30">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
