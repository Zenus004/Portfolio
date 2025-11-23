"use client";

import { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

            {/* Floating Orbs with Parallax */}
            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed"
                style={{
                    transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
                }}
            />
            <div
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
                style={{
                    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                }}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Status Badge with Shimmer */}
                <div className="inline-block relative mb-8 animate-fade-in">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
                    <span className="relative inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-800/80 backdrop-blur-sm text-blue-400 text-sm font-medium border border-blue-500/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for Hire
                    </span>
                </div>

                {/* Main Heading with Gradient Animation */}
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
                    <span className="block text-white mb-2">Building Digital</span>
                    <span className="relative inline-block">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-50 animate-gradient-shift" />
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-text">
                            Experiences
                        </span>
                    </span>
                </h1>

                {/* Typing Effect Description */}
                <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up-delayed">
                    Full Stack Developer specializing in building exceptional digital experiences.
                    <br />
                    <span className="text-blue-400 font-medium">Creating accessible, human-centered products.</span>
                </p>

                {/* CTA Buttons with Hover Effects — using anchors */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up-more-delayed">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
                        aria-label="View Projects"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center gap-2">
                            View Projects
                            <FiArrowRight className={`transition-transform ${isHovering ? 'translate-x-1' : ''}`} />
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="group px-8 py-4 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 text-white font-medium transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
                        aria-label="Contact Me"
                    >
                        Contact Me
                        <span className="group-hover:rotate-45 transition-transform">→</span>
                    </a>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div className="relative w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-blue-400 rounded-full animate-scroll-indicator" />
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(20px); }
                }
                @keyframes gradient-shift {
                    0%, 100% { transform: scale(1) rotate(0deg); }
                    50% { transform: scale(1.2) rotate(180deg); }
                }
                @keyframes gradient-text {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scroll-indicator {
                    0% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0; transform: translateY(10px); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                    animation-delay: 1s;
                }
                .animate-gradient-shift {
                    animation: gradient-shift 8s ease-in-out infinite;
                    background-size: 200% 200%;
                }
                .animate-gradient-text {
                    animation: gradient-text 3s ease-in-out infinite;
                    background-size: 200% 200%;
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in 0.8s ease-out 0.2s forwards;
                    opacity: 0;
                }
                .animate-fade-in-up-delayed {
                    animation: fade-in 0.8s ease-out 0.4s forwards;
                    opacity: 0;
                }
                .animate-fade-in-up-more-delayed {
                    animation: fade-in 0.8s ease-out 0.6s forwards;
                    opacity: 0;
                }
                .animate-fade-in-up-final {
                    animation: fade-in 0.8s ease-out 0.8s forwards;
                    opacity: 0;
                }
                .animate-bounce-slow {
                    animation: bounce 2s ease-in-out infinite;
                }
                .animate-scroll-indicator {
                    animation: scroll-indicator 1.5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}