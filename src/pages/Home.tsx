import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThreeHero } from '../components/three/ThreeHero';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/ui/CTASection';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { ArrowRight, Bot, Code, LineChart, Sparkles } from 'lucide-react';

const services = [
    {
        title: 'AI Agent Development',
        description: 'Custom intelligent agents that automate complex workflows.',
        icon: <Bot className="w-8 h-8 text-neon-blue" />,
        path: '/services/ai-agent-development'
    },
    {
        title: 'Web Development',
        description: 'High-performance, scalable web applications and platforms.',
        icon: <Code className="w-8 h-8 text-neon-purple" />,
        path: '/services/web-development'
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven growth strategies to dominate your market.',
        icon: <LineChart className="w-8 h-8 text-neon-pink" />,
        path: '/services/digital-marketing'
    },
    {
        title: 'Custom AI Solutions',
        description: 'Bespoke machine learning models tailored to your business.',
        icon: <Sparkles className="w-8 h-8 text-white" />,
        path: '/services/custom-ai-solutions'
    }
];

export function Home() {
    return (
        <>
            <Helmet>
                <title>Guava | Premium AI & Digital Agency</title>
                <meta name="description" content="Next-generation AI solutions, web development, and digital marketing agency." />
            </Helmet>

            <main>
                {/* Fullscreen Hero Section */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    {/* Dark luxury gradient background base */}
                    <div className="absolute inset-0 bg-dark-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-purple/20 via-dark-900 to-dark-900" />

                    <ThreeHero />

                    <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 glass text-sm font-medium tracking-wide">
                                <span className="text-gradient">Welcome to the future of digital</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight font-outfit">
                                We Build Intelligent <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Digital Experiences</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Transform your business with cutting-edge AI, immersive web design, and data-driven marketing.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link to="/services">
                                    <Button size="lg" className="w-full sm:w-auto">
                                        Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                        Book a Consultation
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services Preview */}
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive digital solutions merging artificial intelligence with exceptional design and engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link to={service.path} className="block h-full">
                                    <Card className="h-full p-8 group">
                                        <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                        <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                                        <div className="flex items-center text-neon-blue font-medium mt-auto">
                                            Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/services">
                            <Button variant="ghost">View all 20 services <ArrowRight className="ml-2 w-4 h-4" /></Button>
                        </Link>
                    </div>
                </SectionWrapper>

                {/* Why Choose Us */}
                <SectionWrapper className="bg-dark-800">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Redefining the standard of digital excellence.
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                We don't just use modern tools; we invent workflows around them. Our dedicated teams work relentlessly to ensure your digital presence is not just modern, but ahead of its time.
                            </p>
                            <ul className="space-y-4">
                                {['Award-winning Design', 'AI-First Approach', 'Unparalleled Performance', 'Dedicated Support 24/7'].map((item) => (
                                    <li key={item} className="flex items-center text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-neon-purple mr-4" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 blur-3xl opacity-50" />
                            <Card className="p-8 aspect-square flex flex-col items-center justify-center relative z-10 text-center border-white/5" variant="solid">
                                <div className="text-6xl font-bold text-gradient mb-4">100+</div>
                                <div className="text-xl text-gray-300">Projects successfully delivered globally.</div>
                            </Card>
                        </div>
                    </div>
                </SectionWrapper>

                <CTASection />
            </main>
        </>
    );
}
