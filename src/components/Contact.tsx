"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as FiIcons from "react-icons/fi";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setSubmitStatus("success");
            reset();
        } catch (err) {
            console.error(err);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Animated Orbs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8 animate-slide-in-left">
                        {/* Header */}
                        <div>
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20 flex items-center gap-2 w-fit">
                                    <FiIcons.FiMail className="w-4 h-4" />
                                    Let's Connect
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="text-white">Get In</span>{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                    Touch
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Have a project in mind or just want to say hi? I'd love to hear from you. Let's create
                                something amazing together.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {[
                                { icon: FiIcons.FiMail, label: "Email", value: "satyajyoti05@gmail.com", href: "mailto:satyajyoti05@gmail.com" },
                                // { icon: FiPhone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                                { icon: FiIcons.FiMapPin, label: "Location", value: "Jatani, Odisha", href: null },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href || "#"}
                                    className="group flex items-center gap-4 p-5 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer"
                                >
                                    <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                                        <item.icon className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="text-slate-500 text-sm">{item.label}</div>
                                        <div className="text-white font-medium group-hover:text-purple-400 transition-colors">{item.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h3 className="text-white font-semibold text-lg">Follow Me</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: FiIcons.FiGithub, href: "https://github.com/Zenus004", label: "GitHub" },
                                    { icon: FiIcons.FiLinkedin, href: "https://www.linkedin.com/in/satyajyoti-mohanty-716674266", label: "LinkedIn" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="group relative p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                                        <div className="absolute inset-0 bg-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="animate-slide-in-right">
                        <div className="space-y-6">
                            {/* Form Card */}
                            <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
                                {/* Gradient Glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl opacity-20 blur-xl animate-gradient-shift" />

                                <div className="relative space-y-6">
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        {/* Name Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-semibold text-slate-300 flex items-center gap-2">
                                                <FiIcons.FiUser className="w-4 h-4 text-purple-400" />
                                                Name
                                            </label>
                                            <div className="relative group">
                                                <input
                                                    {...register("name")}
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    onFocus={() => setFocusedField("name")}
                                                    onBlur={() => setFocusedField(null)}
                                                    className={`w-full px-5 py-4 rounded-xl bg-slate-800/50 border-2 border-slate-700 focus:border-purple-500 focus:bg-slate-800 outline-none transition-all text-white placeholder-slate-500 ${focusedField === "name" ? "" : ""
                                                        }`}
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-400 flex items-center gap-1 animate-shake">
                                                    <FiIcons.FiAlertCircle /> {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-300 flex items-center gap-2">
                                                <FiIcons.FiMail className="w-4 h-4 text-purple-400" />
                                                Email
                                            </label>
                                            <div className="relative group">
                                                <input
                                                    {...register("email")}
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    onFocus={() => setFocusedField("email")}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border-2 border-slate-700 focus:border-purple-500 focus:bg-slate-800 outline-none transition-all text-white placeholder-slate-500"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-400 flex items-center gap-1 animate-shake">
                                                    <FiIcons.FiAlertCircle /> {errors.email.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Message Field */}
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="block text-sm font-semibold text-slate-300 flex items-center gap-2">
                                                <FiIcons.FiMessageSquare className="w-4 h-4 text-purple-400" />
                                                Message
                                            </label>
                                            <div className="relative group">
                                                <textarea
                                                    {...register("message")}
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    onFocus={() => setFocusedField("message")}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border-2 border-slate-700 focus:border-purple-500 focus:bg-slate-800 outline-none transition-all resize-none text-white placeholder-slate-500"
                                                    placeholder="Your message..."
                                                />
                                            </div>
                                            {errors.message && (
                                                <p className="mt-1 text-sm text-red-400 flex items-center gap-1 animate-shake">
                                                    <FiIcons.FiAlertCircle /> {errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative w-full py-5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden hover:scale-105"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <span className="relative z-10 flex items-center gap-3">
                                                {isSubmitting ? (
                                                    <>
                                                        <FiIcons.FiLoader className="animate-spin w-5 h-5" /> Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <FiIcons.FiSend className="w-5 h-5" /> Send Message
                                                    </>
                                                )}
                                            </span>
                                        </button>

                                        {/* Status Messages */}
                                        {submitStatus === "success" && (
                                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-5 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center gap-3 border border-emerald-500/30 animate-slide-down">
                                                <FiIcons.FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                                                <span>Message sent successfully! I'll get back to you soon.</span>
                                            </motion.div>
                                        )}

                                        {submitStatus === "error" && (
                                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-5 rounded-xl bg-red-500/10 text-red-400 flex items-center gap-3 border border-red-500/30 animate-slide-down">
                                                <FiIcons.FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                                                <span>Something went wrong. Please try again later.</span>
                                            </motion.div>
                                        )}
                                    </form>
                                </div>

                                {/* Privacy Notice */}
                                <p className="text-slate-500 text-sm text-center mt-4">
                                    Your information is safe and will never be shared with third parties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }
      `}</style>
        </section>
    );
}
