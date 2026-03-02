import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { motion } from 'framer-motion';

const allServices = [
    { title: "AI Agent Development", path: "/services/ai-agent-development" },
    { title: "AI Automation", path: "/services/ai-automation" },
    { title: "AI Chatbot Development", path: "/services/ai-chatbot-development" },
    { title: "Custom AI Solutions", path: "/services/custom-ai-solutions" },
    { title: "Web Development", path: "/services/web-development" },
    { title: "UI/UX Design", path: "/services/ui-ux-design" },
    { title: "Branding & Identity", path: "/services/branding-identity" },
    { title: "Digital Marketing", path: "/services/digital-marketing" },
    { title: "SEO Services", path: "/services/seo-services" },
    { title: "Social Media Management", path: "/services/social-media-management" },
    { title: "Performance Marketing", path: "/services/performance-marketing" },
    { title: "Content Marketing", path: "/services/content-marketing" },
    { title: "Graphic Design", path: "/services/graphic-design" },
    { title: "Video Production", path: "/services/video-production" },
    { title: "Email Marketing", path: "/services/email-marketing" },
    { title: "Influencer Marketing", path: "/services/influencer-marketing" },
    { title: "Marketing Strategy", path: "/services/marketing-strategy" },
    { title: "Data Analytics", path: "/services/data-analytics" },
    { title: "App Development", path: "/services/app-development" },
    { title: "Cloud Integration", path: "/services/cloud-integration" }
];

export function Services() {
    return (
        <>
            <Helmet>
                <title>All Services | Synapse Digital</title>
                <meta name="description" content="Explore our 20 premium digital and AI services." />
            </Helmet>
            <main className="pt-32 pb-20 bg-dark-900 min-h-screen relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/20 via-dark-900 to-transparent pointer-events-none" />

                <SectionWrapper className="relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-outfit">Our Capabilities</h1>
                        <p className="text-xl text-gray-400">A full spectrum of digital excellence, from artificial intelligence to immersive web experiences.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((srv, idx) => (
                            <motion.div
                                key={srv.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                            >
                                <Link to={srv.path} className="block h-full group">
                                    <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden flex flex-col justify-between min-h-[220px]">

                                        {/* Soft glow behind the card content */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                                {srv.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm opacity-0 -translate-y-4 h-0 group-hover:h-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 overflow-hidden leading-relaxed">
                                                Elevate your business with our premium {srv.title.toLowerCase()} solutions tailored for maximum impact.
                                            </p>
                                        </div>

                                        <div className="relative z-10 mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <div className="inline-flex items-center text-sm font-semibold tracking-wide border border-white/20 rounded-full px-4 py-2 bg-white/5 backdrop-blur-md hover:bg-white/20 transition-colors">
                                                Explore Service <span className="ml-2">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </main>
        </>
    );
}