"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import skillsData from "@/data/skills.json";

import {
    FiCode,
    FiDatabase,
    FiGitBranch,
    FiLayers,
    FiServer,
    FiBox,
} from "react-icons/fi";
import { IconType } from "react-icons";

type Skill = {
    name: string;
    level: number;
    icon: string | IconType | null;
    color: string;
    category: "frontend" | "backend" | "database" | "tools";
    description?: string;
};

type Category = {
    id: string;
    label: string;
    icon: IconType;
};

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const resolveIcon = (name?: string) => {
        const si = Icons as unknown as Record<string, any>;
        const fa = FaIcons as unknown as Record<string, any>;

        return si[name ?? ""] || fa[name ?? ""] || null;
    };

    const allowedCategories = new Set<Skill['category']>([
        "frontend",
        "backend",
        "database",
        "tools",
    ]);

    const skills: Skill[] = skillsData.map((skill: any) => {
        const resolvedIcon = resolveIcon(skill.icon as string);
        const rawCategory = skill.category as string;

        const category = allowedCategories.has(rawCategory as Skill['category'])
            ? (rawCategory as Skill['category'])
            : "frontend";

        return {
            ...skill,
            icon: resolvedIcon,
            category,
        } as Skill;
    });

    const categories: Category[] = [
        { id: "all", label: "All Skills", icon: FiLayers },
        { id: "frontend", label: "Frontend", icon: FiCode },
        { id: "backend", label: "Backend", icon: FiServer },
        { id: "database", label: "Database", icon: FiDatabase },
        { id: "tools", label: "Tools & IDE", icon: FiBox },
    ];

    const filteredSkills =
        activeCategory === "all"
            ? skills
            : skills.filter((skill) => skill.category === activeCategory);

    const getLevelBadge = (level: number) => {
        if (level >= 80)
            return {
                label: "Expert",
                color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
            };
        if (level >= 60)
            return {
                label: "Advanced",
                color: "text-blue-400 bg-blue-400/10 border-blue-400/30",
            };
        return {
            label: "Intermediate",
            color: "text-purple-400 bg-purple-400/10 border-purple-400/30",
        };
    };

    return (
        <section id="skills" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Floating Orbs */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header (FRAMER MOTION) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 animate-fade-in-up"
                >
                    <div className="inline-block mb-4">
                        <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20">
                            My Expertise
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="text-white">Technical</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Skills
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
                        A comprehensive toolkit of modern technologies and frameworks
                    </p>
                </motion.div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up-delayed">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 scale-105"
                                : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700"
                                }`}
                        >
                            <category.icon className="w-4 h-4" />
                            {category.label}
                            {activeCategory === category.id && (
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50 -z-10" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Skills Grid (cards animated with Framer Motion) */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, index) => {
                        const levelBadge = getLevelBadge(skill.level);
                        const Icon = (skill.icon as IconType) ?? FiCode; // fallback

                        return (
                            <motion.div
                                key={skill.name}
                                onMouseEnter={() => setHoveredSkill(index)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="group relative animate-scale-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* Card */}
                                <div className="relative h-full p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 overflow-hidden">
                                    {/* Gradient Background on Hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                    />

                                    {/* Glow Effect */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon Container */}
                                        <div className="mb-4">
                                            <div
                                                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>

                                        {/* Skill Name */}
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                                            {skill.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                            {skill.description}
                                        </p>

                                        {/* Level Badge and Percentage */}
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelBadge.color}`}
                                            >
                                                {levelBadge.label}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-1.5 h-6 rounded-full transition-all duration-300 ${i < Math.ceil(skill.level / 20)
                                                                ? `bg-gradient-to-t ${skill.color}`
                                                                : "bg-slate-700"
                                                                }`}
                                                            style={{
                                                                animationDelay: `${i * 0.1}s`,
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-slate-400 text-sm font-mono font-semibold">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner Accent */}
                                    <div
                                        className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${skill.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            {/* Bottom Stats */}
            {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up-final">
                    {[
                        { label: "Technologies", value: skills.length, icon: FiCode },
                        { label: "Years Experience", value: "5+", icon: FiLayers },
                        { label: "Projects Built", value: "50+", icon: FiBox },
                        { label: "Certifications", value: "8+", icon: FiGitBranch },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="relative p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <stat.icon className="w-8 h-8 text-purple-400 mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div> */}
            <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-final {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
        </section>
    );
}