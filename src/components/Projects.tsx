"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "@/data/projects.json";
import ProjectModal from "./ProjectModal";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

    // Extract unique categories (tech stack)
    const categories = useMemo(() => {
        const allTech = projectsData.flatMap((p) => p.tech);
        const uniqueTech = Array.from(new Set(allTech));
        // Too many unique tags might be cluttered. Let's hardcode some broad categories or just use "All" and filter by text search/tags.
        // For simplicity in this portfolio, let's filter by "All", "React", "Next.js", "Node.js" etc based on presence.
        return ["All", "Next.js", "React", "Node.js", "TypeScript"];
    }, []);

    const filteredProjects = projectsData.filter((project) => {
        if (selectedCategory === "All") return true;
        return project.tech.includes(selectedCategory);
    });

    return (
        <section id="projects" className="py-20 bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-card border border-border hover:border-primary/50 text-foreground/70"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors cursor-pointer flex flex-col h-full"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image Placeholder */}
                                <div className="relative h-48 bg-muted overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center text-foreground/20 font-bold text-xl">
                                        {project.title}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground/60 text-sm mb-4 line-clamp-2 flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.slice(0, 3).map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs px-2 py-1 rounded-md bg-muted text-foreground/60 font-medium">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
