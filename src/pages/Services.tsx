import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Bot, Code, Palette, Megaphone, BarChart, Cloud, Smartphone, Video, Mail, Search, Users, Target, Sparkles, Layers, Zap } from 'lucide-react';

const categories = ['All', 'AI & ML', 'Development', 'Design', 'Marketing', 'Cloud'];

const allServices = [
    {
        title: "AI Agent Development",
        path: "/services/ai-agent-development",
        category: "AI & ML",
        icon: <Bot className="w-8 h-8" />,
        color: "from-neon-blue to-neon-cyan",
        description: "Intelligent agents that automate complex workflows and decision-making processes."
    },
    {
        title: "AI Automation",
        path: "/services/ai-automation",
        category: "AI & ML",
        icon: <Zap className="w-8 h-8" />,
        color: "from-neon-cyan to-neon-blue",
        description: "Streamline operations with intelligent automation solutions."
    },
    {
        title: "AI Chatbot Development",
        path: "/services/ai-chatbot-development",
        category: "AI & ML",
        icon: <MessageCircle className="w-8 h-8" />,
        color: "from-neon-purple to-neon-pink",
        description: "Conversational AI that engages customers 24/7."
    },
    {
        title: "Custom AI Solutions",
        path: "/services/custom-ai-solutions",
        category: "AI & ML",
        icon: <Sparkles className="w-8 h-8" />,
        color: "from-neon-pink to-neon-coral",
        description: "Tailored machine learning models for unique business needs."
    },
    {
        title: "Web Development",
        path: "/services/web-development",
        category: "Development",
        icon: <Code className="w-8 h-8" />,
        color: "from-neon-blue to-neon-purple",
        description: "High-performance, scalable web applications built with modern technologies."
    },
    {
        title: "App Development",
        path: "/services/app-development",
        category: "Development",
        icon: <Smartphone className="w-8 h-8" />,
        color: "from-neon-purple to-neon-pink",
        description: "Native and cross-platform mobile apps that deliver exceptional experiences."
    },
    {
        title: "Cloud Integration",
        path: "/services/cloud-integration",
        category: "Cloud",
        icon: <Cloud className="w-8 h-8" />,
        color: "from-neon-cyan to-neon-blue",
        description: "Seamless cloud infrastructure that scales with your business."
    },
    {
        title: "UI/UX Design",
        path: "/services/ui-ux-design",
        category: "Design",
        icon: <Palette className="w-8 h-8" />,
        color: "from-neon-pink to-neon-coral",
        description: "User-centered design that converts visitors into customers."
    },
    {
        title: "Branding & Identity",
        path: "/services/branding-identity",
        category: "Design",
        icon: <Layers className="w-8 h-8" />,
        color: "from-neon-coral to-neon-pink",
        description: "Compelling brand identities that tell your unique story."
    },
    {
        title: "Graphic Design",
        path: "/services/graphic-design",
        category: "Design",
        icon: <Image className="w-8 h-8" />,
        color: "from-neon-purple to-neon-cyan",
        description: "Visual content that captures attention and communicates effectively."
    },
    {
        title: "Video Production",
        path: "/services/video-production",
        category: "Design",
        icon: <Video className="w-8 h-8" />,
        color: "from-neon-pink to-neon-blue",
        description: "Captivating video content that tells your brand story."
    },
    {
        title: "Digital Marketing",
        path: "/services/digital-marketing",
        category: "Marketing",
        icon: <Megaphone className="w-8 h-8" />,
        color: "from-neon-blue to-neon-cyan",
        description: "Data-driven campaigns that reach and convert your target audience."
    },
    {
        title: "SEO Services",
        path: "/services/seo-services",
        category: "Marketing",
        icon: <Search className="w-8 h-8" />,
        color: "from-neon-cyan to-neon-purple",
        description: "Search optimization that drives organic traffic and visibility."
    },
    {
        title: "Social Media Management",
        path: "/services/social-media-management",
        category: "Marketing",
        icon: <Users className="w-8 h-8" />,
        color: "from-neon-purple to-neon-pink",
        description: "Strategic social presence that builds community and engagement."
    },
    {
        title: "Performance Marketing",
        path: "/services/performance-marketing",
        category: "Marketing",
        icon: <Target className="w-8 h-8" />,
        color: "from-neon-coral to-neon-pink",
        description: "ROI-focused advertising that maximizes your budget."
    },
    {
        title: "Content Marketing",
        path: "/services/content-marketing",
        category: "Marketing",
        icon: <FileText className="w-8 h-8" />,
        color: "from-neon-pink to-neon-blue",
        description: "Compelling content that establishes authority and drives action."
    },
    {
        title: "Email Marketing",
        path: "/services/email-marketing",
        category: "Marketing",
        icon: <Mail className="w-8 h-8" />,
        color: "from-neon-blue to-neon-purple",
        description: "Nurture campaigns that convert leads into customers."
    },
    {
        title: "Influencer Marketing",
        path: "/services/influencer-marketing",
        category: "Marketing",
        icon: <Star className="w-8 h-8" />,
        color: "from-neon-purple to-neon-coral",
        description: "Partner with influencers that amplify your brand message."
    },
    {
        title: "Marketing Strategy",
        path: "/services/marketing-strategy",
        category: "Marketing",
        icon: <Target className="w-8 h-8" />,
        color: "from-neon-coral to-neon-cyan",
        description: "Strategic roadmaps that align marketing with business goals."
    },
    {
        title: "Data Analytics",
        path: "/services/data-analytics",
        category: "AI & ML",
        icon: <BarChart className="w-8 h-8" />,
        color: "from-neon-cyan to-neon-pink",
        description: "Actionable insights that drive informed business decisions."
    },
];

// Helper icons
function MessageCircle(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>; }
function Image(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>; }
function FileText(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>; }
function Star(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>; }

export function Services() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    const filteredServices = activeCategory === 'All'
        ? allServices
        : allServices.filter(s => s.category === activeCategory);

    return (
        <>
            <Helmet>
                <title>All Services | Guava Digital Agency</title>
                <meta name="description" content="Explore our 20 premium digital and AI services including AI development, web design, marketing, and cloud solutions." />
            </Helmet>

            <main className="pt-32 pb-20 bg-dark-900 min-h-screen relative overflow-hidden">
                {/* Background */}
                <div className="absolute top-0 left-0 w-full h-[60vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/20 via-dark-900 to-transparent pointer-events-none" />

                <SectionWrapper className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-sm font-medium mb-6">
                            Our Services
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-outfit">
                            Comprehensive <span className="text-gradient">Digital Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A full spectrum of digital excellence, from artificial intelligence to immersive web experiences. Discover how we can transform your business.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white glow-blue'
                                        : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredServices.map((srv, idx) => (
                                <motion.div
                                    key={srv.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    onMouseEnter={() => setHoveredService(idx)}
                                    onMouseLeave={() => setHoveredService(null)}
                                >
                                    <Link to={srv.path} className="block h-full group">
                                        <div className={`
                                            h-full p-8 rounded-2xl bg-dark-800/50 backdrop-blur-xl border border-white/10 
                                            transition-all duration-500 hover:scale-[1.02] hover:bg-dark-800 
                                            hover:border-white/20 relative overflow-hidden min-h-[280px] flex flex-col justify-between
                                            ${hoveredService === idx ? 'glow-' + srv.color.split(' ')[1].replace('to-', '') : ''}
                                        `}>
                                            {/* Gradient glow on hover */}
                                            <div className={`
                                                absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${srv.color} 
                                                rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500
                                            `} />

                                            <div className="relative z-10">
                                                <div className={`
                                                    w-14 h-14 rounded-xl bg-gradient-to-br ${srv.color} 
                                                    flex items-center justify-center mb-6
                                                    group-hover:scale-110 transition-transform duration-300
                                                `}>
                                                    <div className="text-white">{srv.icon}</div>
                                                </div>
                                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                                    {srv.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {srv.description}
                                                </p>
                                            </div>

                                            <div className="relative z-10 mt-6">
                                                <div className={`
                                                    inline-flex items-center text-sm font-semibold tracking-wide 
                                                    rounded-full px-5 py-2.5 bg-white/5 border border-white/10 
                                                    group-hover:bg-white/10 transition-all duration-300
                                                    ${hoveredService === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                                `}>
                                                    Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </SectionWrapper>

                {/* Why Our Services Section */}
                <SectionWrapper className="bg-dark-800/30">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-6">
                                Why Guava
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-outfit">
                                Why Choose Our Services?
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We don't just deliver services – we deliver results. Our approach combines cutting-edge technology with strategic thinking to create solutions that drive real business growth.
                            </p>
                            <ul className="space-y-4">
                                {['Expert team with 10+ years experience', 'Cutting-edge AI & technology stack', 'Proven track record of success', '24/7 dedicated support'].map((item) => (
                                    <li key={item} className="flex items-center text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-neon-purple mr-4" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-3xl blur-2xl opacity-50" />
                            <div className="relative glass-card p-8 rounded-2xl">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center p-4">
                                        <div className="text-4xl font-bold text-gradient mb-2">150+</div>
                                        <div className="text-gray-400 text-sm">Projects Completed</div>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                                        <div className="text-gray-400 text-sm">Client Satisfaction</div>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                                        <div className="text-gray-400 text-sm">Team Members</div>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                                        <div className="text-gray-400 text-sm">Support Available</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* CTA Section */}
                <SectionWrapper>
                    <div className="glass-dark rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-outfit">
                                Need Something Custom?
                            </h2>
                            <p className="text-xl text-gray-400 mb-10">
                                We specialize in creating tailored solutions that address your unique business challenges. Let's discuss your project.
                            </p>
                            <Link to="/contact">
                                <Button size="lg" className="glow-purple">
                                    Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SectionWrapper>
            </main>
        </>
    );
}
