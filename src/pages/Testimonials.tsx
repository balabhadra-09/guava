import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/ui/Hero';
import { Card } from '../components/ui/Card';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { CTASection } from '../components/ui/CTASection';
import { Quote, Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const testimonials = [
    {
        quote: "Guava transformed our legacy systems with AI. We reduced operational costs by 40% in just three months. Their team's expertise in machine learning and automation is truly exceptional.",
        author: "Elena Rodriguez",
        role: "CTO, GlobalTech",
        industry: "Technology",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
    },
    {
        quote: "The web application they built is not only blazing fast but absolutely beautiful. It's rare to find an agency that excels at both engineering and design. Our conversion rate increased by 150%.",
        author: "Marcus Chen",
        role: "Founder, Zenith SaaS",
        industry: "Software",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    {
        quote: "Our digital marketing ROI skyrocketed. The AI-driven approach to performance marketing gave us an edge we never thought possible. We've seen a 300% increase in qualified leads.",
        author: "Sarah Jenkins",
        role: "CMO, Elevate Retail",
        industry: "E-commerce",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    },
    {
        quote: "Working with Guava was a game-changer for our startup. They helped us build an AI-powered platform that disrupted our industry. The team's dedication and innovation are unmatched.",
        author: "David Kim",
        role: "CEO, NextGen AI",
        industry: "AI Startup",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
    },
    {
        quote: "The mobile app they developed exceeded all our expectations. User engagement increased by 200% within the first month. Their attention to detail and user experience is remarkable.",
        author: "Jennifer Liu",
        role: "VP Product, FinanceHub",
        industry: "FinTech",
        rating: 5,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
    },
    {
        quote: "Our brand identity completely transformed thanks to Guava's design team. They captured our vision perfectly and created a visual identity that resonates with our target audience.",
        author: "Michael Torres",
        role: "Brand Director, ArtHouse",
        industry: "Creative",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
    }
];

const clientLogos = [
    'TechCorp', 'InnovateLabs', 'FutureScale', 'DataDrive', 'CloudNex', 'AIVenture', 'DigitalFirst', 'ScaleUp'
];

const videoTestimonials = [
    {
        name: "Transforming Healthcare with AI",
        company: "MedTech Solutions",
        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
        duration: "3:45"
    },
    {
        name: "How We Scaled to 1M Users",
        company: "GrowthApp",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        duration: "4:20"
    },
    {
        name: "Building the Future of Fintech",
        company: "PayFlow",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        duration: "5:15"
    }
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prev: number) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev: number) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (autoplay) {
            intervalRef.current = setInterval(nextSlide, 5000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [autoplay]);

    return (
        <>
            <Helmet>
                <title>Testimonials | Guava Digital Agency</title>
                <meta name="description" content="See what our clients say about Guava's AI and digital services. Real success stories and reviews from industry leaders." />
            </Helmet>

            <main className="bg-dark-900 min-h-screen text-white">
                {/* Hero */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-dark-900 mesh-gradient" />
                    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-neon-pink/10 rounded-full blur-[80px] pointer-events-none" />

                    <SectionWrapper className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink text-sm font-medium mb-6">
                                Testimonials
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-outfit">
                                Client <span className="text-gradient">Success Stories</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Don't just take our word for it. See the impact we've made for industry leaders around the world.
                            </p>
                        </motion.div>
                    </SectionWrapper>
                </section>

                {/* Featured Testimonial Slider */}
                <SectionWrapper className="pb-0">
                    <div className="relative max-w-5xl mx-auto">
                        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px]" />

                            <div className="relative z-10">
                                <Quote className="w-16 h-16 text-neon-purple/30 mb-8" />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                        className="min-h-[200px]"
                                    >
                                        <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed mb-10 italic">
                                            "{testimonials[currentIndex].quote}"
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-center gap-6">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].author}
                                                className="w-16 h-16 rounded-full object-cover border-2 border-neon-purple/30"
                                            />
                                            <div className="text-center sm:text-left">
                                                <h4 className="text-xl font-bold">{testimonials[currentIndex].author}</h4>
                                                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                                                <div className="flex items-center justify-center sm:justify-start gap-1 mt-2">
                                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slider Controls */}
                                <div className="flex items-center justify-center gap-4 mt-10">
                                    <button
                                        onClick={() => { prevSlide(); setAutoplay(false); }}
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <div className="flex gap-2">
                                        {testimonials.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => { setCurrentIndex(idx); setAutoplay(false); }}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-neon-purple' : 'bg-white/20'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => { nextSlide(); setAutoplay(false); }}
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>

                {/* All Testimonials Grid */}
                <SectionWrapper>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 relative bg-dark-800/50 border-white/5 h-full" variant="solid">
                                    <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                                    <div className="mb-4 inline-block px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full text-xs font-semibold tracking-wide">
                                        {t.industry}
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, idx) => (
                                            <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 leading-relaxed mb-8 italic">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center mt-auto pt-4 border-t border-white/5">
                                        <img
                                            src={t.image}
                                            alt={t.author}
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <h4 className="font-bold">{t.author}</h4>
                                            <p className="text-gray-500 text-sm">{t.role}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Video Testimonials */}
                <SectionWrapper className="bg-dark-800/30">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-6"
                        >
                            Video Stories
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">Hear From Our Clients</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Watch real clients share their experiences working with Guava.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {videoTestimonials.map((video, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-2xl overflow-hidden aspect-video mb-4">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="w-6 h-6 text-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-xs">
                                        {video.duration}
                                    </div>
                                </div>
                                <h4 className="font-bold text-lg mb-1">{video.name}</h4>
                                <p className="text-gray-400 text-sm">{video.company}</p>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Client Logos */}
                <SectionWrapper className="py-12">
                    <div className="text-center mb-12">
                        <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-medium mb-8">Trusted by industry leaders</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                            {clientLogos.map((brand) => (
                                <span key={brand} className="text-xl md:text-2xl font-outfit font-bold text-gray-400 hover:text-white transition-colors cursor-default">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>

                <CTASection
                    title="Become Our Next Success Story"
                    subtitle="Join the ranks of modern businesses dominating their industries with Guava."
                    buttonText="Start Your Project"
                    buttonLink="/contact"
                />
            </main>
        </>
    );
}
