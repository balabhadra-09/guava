import { Helmet } from 'react-helmet-async';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Mail, MapPin, Phone, Send, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Thank you for your message! We will get back to you soon.');
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Guava Digital Agency</title>
                <meta name="description" content="Get in touch with Guava to start your next big digital project. Let's build something extraordinary together." />
            </Helmet>

            <main className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 min-h-screen relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 mesh-gradient opacity-50" />
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

                <SectionWrapper className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Header */}
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-6"
                            >
                                Contact Us
                            </motion.div>
                            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-outfit">
                                Let's <span className="text-gradient">Connect</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Whether you're looking to build an AI agent, redesign your platform, or scale your marketing, our team is ready to help.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Left Column - Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="lg:col-span-5"
                            >
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-6 font-outfit">Get in Touch</h2>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                            We love hearing about new projects and challenges. Drop us a line and let's discuss how we can help transform your business.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-start p-6 glass-card rounded-2xl"
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 flex items-center justify-center mr-5 shrink-0 text-neon-blue">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold mb-1">Email Us</h4>
                                                <p className="text-gray-400">hello@guava.com</p>
                                                <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-start p-6 glass-card rounded-2xl"
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center mr-5 shrink-0 text-neon-purple">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold mb-1">Call Us</h4>
                                                <p className="text-gray-400">+1 (555) 123-4567</p>
                                                <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm PST</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-start p-6 glass-card rounded-2xl"
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-pink/20 to-neon-coral/20 flex items-center justify-center mr-5 shrink-0 text-neon-pink">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                                                <p className="text-gray-400">100 Innovation Market,</p>
                                                <p className="text-gray-400">San Francisco, CA 94105</p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="pt-4">
                                        <h4 className="font-semibold mb-4">Follow Us</h4>
                                        <div className="flex gap-4">
                                            {[
                                                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                                                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                                                { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                                                { icon: <Github className="w-5 h-5" />, label: 'GitHub' }
                                            ].map((social) => (
                                                <a
                                                    key={social.label}
                                                    href="#"
                                                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                                                    aria-label={social.label}
                                                >
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column - Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="lg:col-span-7"
                            >
                                <Card className="p-8 lg:p-10 relative overflow-hidden border-white/10" variant="solid">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px]" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]" />

                                    <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300 ml-1">First Name</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        className="w-full bg-dark-800/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all"
                                                        placeholder="John"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300 ml-1">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full bg-dark-800/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-transparent transition-all"
                                                    placeholder="Doe"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Work Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-dark-800/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent transition-all"
                                                placeholder="john@company.com"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300 ml-1">Project Details</label>
                                            <textarea
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full bg-dark-800/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all resize-none"
                                                placeholder="Tell us about your goals, challenges, and what you're looking to achieve..."
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full mt-4 glow-blue"
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <>
                                                    Send Message <Send className="ml-2 w-5 h-5" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-16"
                        >
                            <div className="relative rounded-3xl overflow-hidden h-[400px]">
                                <div className="absolute inset-0 bg-dark-800 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                                        <p className="text-gray-400">Interactive map would be embedded here</p>
                                        <p className="text-gray-500 text-sm">100 Innovation Market, San Francisco, CA</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </main>
        </>
    );
}
