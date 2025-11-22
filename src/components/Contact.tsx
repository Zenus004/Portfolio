"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-foreground/60 text-center mb-12">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="Your Name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                    <FiAlertCircle /> {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="your@email.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                    <FiAlertCircle /> {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                {...register("message")}
                                id="message"
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                placeholder="Your message..."
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                                    <FiAlertCircle /> {errors.message.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <FiLoader className="animate-spin" /> Sending...
                                </>
                            ) : (
                                <>
                                    <FiSend /> Send Message
                                </>
                            )}
                        </button>

                        {submitStatus === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-lg bg-green-500/10 text-green-500 flex items-center gap-2 border border-green-500/20"
                            >
                                <FiCheckCircle /> Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        )}

                        {submitStatus === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-lg bg-red-500/10 text-red-500 flex items-center gap-2 border border-red-500/20"
                            >
                                <FiAlertCircle /> Something went wrong. Please try again later.
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
