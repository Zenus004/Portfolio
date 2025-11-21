"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    repo: string;
    demo: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-card w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-border pointer-events-auto flex flex-col max-h-[90vh]"
                        >
                            {/* Header Image */}
                            <div className="relative h-48 md:h-64 bg-muted">
                                {/* Placeholder for actual image */}
                                <div className="absolute inset-0 flex items-center justify-center text-foreground/20 bg-gradient-to-br from-primary/10 to-secondary/10">
                                    <span className="text-4xl font-bold opacity-20">{project.title}</span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 overflow-y-auto">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:bg-accent/10 hover:border-accent transition-colors font-medium"
                                    >
                                        <FiGithub /> View Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
