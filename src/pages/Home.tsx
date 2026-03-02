import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThreeHero } from '../components/three/ThreeHero';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/ui/CTASection';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { ArrowRight, Bot, Code, LineChart, Sparkles, Zap, Shield, TrendingUp, Users, Globe, Award, CheckCircle } from 'lucide-react';

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
        icon: <Sparkles className="w-8 h-8 text-neon-cyan" />,
        path: '/services/custom-ai-solutions'
    }
];

const trustedBy = [
    'TechCorp', 'InnovateLabs', 'FutureScale', 'DataDrive', 'CloudNex', 'AIVenture'
];

const stats = [
    { value: '150+', label: 'Projects Delivered', icon: <Globe className="w-6 h-6" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Users className="w-6 h-6" /> },
    { value: '50+', label: 'AI Experts', icon: <Award className="w-6 h-6" /> },
    { value: '24/7', label: 'Support', icon: <Shield className="w-6 h-6" /> },
];

const processSteps = [
    { number: '01', title: 'Discovery', description: 'We dive deep into your business to understand goals, challenges, and opportunities.' },
    { number: '02', title: 'Strategy', description: 'Our team crafts a tailored roadmap leveraging cutting-edge AI and digital solutions.' },
    { number: '03', title: 'Development', description: 'We build with precision, using modern frameworks and AI technologies.' },
    { number: '04', title: 'Optimization', description: 'Continuous testing and refinement ensure peak performance and ROI.' },
];

const caseStudies = [
    {
        title: 'AI-Powered Customer Support',
        client: 'TechGiant Inc.',
        description: 'Reduced response time by 85% with intelligent AI agents handling 10,000+ queries daily.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
        stats: ['85% faster response', '10K+ daily queries', '40% cost reduction']
    },
    {
        title: 'E-commerce Platform Redesign',
        client: 'FashionForward',
        description: 'Transformed legacy system into a modern, scalable platform with 3x conversion improvement.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        stats: ['3x conversions', '99.9% uptime', '50% faster load time']
    }
];

const whyChooseUs = [
    { icon: <Zap className="w-6 h-6" />, title: 'Lightning Fast', description: 'Performance-optimized solutions that deliver instant results.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Enterprise Security', description: 'Bank-grade security protocols protect your data always.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Scalable Growth', description: 'Solutions that grow with your business seamlessly.' },
    { icon: <Users className="w-6 h-6" />, title: 'Expert Team', description: 'Industry veterans with decades of combined experience.' },
];

export function Home() {
    return (
        <>
            <Helmet>
                <title>Guava | Premium AI & Digital Agency</title>
                <meta name="description" content="Next-generation AI solutions, web development, and digital marketing agency transforming businesses with intelligent digital experiences." />
            </Helmet>

            <main>
                {/* Fullscreen Hero Section */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    {/* Dark luxury gradient background base */}
                    <div className="absolute inset-0 bg-dark-900 mesh-gradient" />

                    <ThreeHero />

                    <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="max-w-4xl mx-auto"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-block mb-6 px-5 py-2 rounded-full border border-white/10 glass text-sm font-medium tracking-wide"
                            >
                                <span className="text-gradient-cyan">Transforming Businesses with AI</span>
                            </motion.div>
                            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight font-outfit">
                                We Build Intelligent <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Digital Experiences</span>
                            </h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                            >
                                Transform your business with cutting-edge AI, immersive web design, and data-driven marketing strategies.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                            >
                                <Link to="/services">
                                    <Button size="lg" className="w-full sm:w-auto glow-blue">
                                        Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                        Book a Consultation
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                        >
                            <motion.div
                                animate={{ opacity: [1, 0.5, 1], y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="w-1 h-2 bg-white/60 rounded-full"
                            />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Trusted By Section */}
                <SectionWrapper className="py-12 border-y border-white/5">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-sm text-gray-500 mb-8 uppercase tracking-[0.2em] font-medium">Trusted by industry leaders</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                            {trustedBy.map((brand) => (
                                <span key={brand} className="text-xl md:text-2xl font-outfit font-bold text-gray-400 hover:text-white transition-colors cursor-default">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </SectionWrapper>

                {/* Stats Section */}
                <SectionWrapper className="bg-dark-800/50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 md:p-8 text-center border-white/5" variant="solid">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mx-auto mb-4 text-neon-blue">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Services Preview */}
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-sm font-medium mb-6"
                        >
                            Our Expertise
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">Comprehensive Digital Solutions</h2>
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
                                    <Card className="h-full p-8 group border-white/5">
                                        <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
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

                {/* Case Studies Section */}
                <SectionWrapper className="bg-dark-800/30">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink text-sm font-medium mb-6"
                        >
                            Case Studies
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">Proven Results</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Real-world examples of how we've transformed businesses with AI and digital innovation.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {caseStudies.map((study, idx) => (
                            <motion.div
                                key={study.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl blur-2xl opacity-50" />
                                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                                    </div>
                                </div>
                                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="text-sm text-neon-purple font-medium mb-2">{study.client}</div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
                                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">{study.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {study.stats.map((stat) => (
                                            <span key={stat} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/testimonials">
                            <Button variant="outline">View More Success Stories <ArrowRight className="ml-2 w-4 h-4" /></Button>
                        </Link>
                    </div>
                </SectionWrapper>

                {/* Process Timeline */}
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-6"
                        >
                            Our Process
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">How We Work</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A proven methodology that ensures exceptional results every time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                {idx < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gradient-to-r from-neon-blue/50 to-neon-purple/50" />
                                )}
                                <Card className="p-8 border-white/5" variant="solid">
                                    <div className="text-5xl font-bold text-gradient mb-4 font-outfit">{step.number}</div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Why Choose Us */}
                <SectionWrapper className="bg-dark-800/50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-block px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-6">
                                    Why Guava
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">
                                    Redefining the standard of digital excellence.
                                </h2>
                                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                    We don't just use modern tools; we invent workflows around them. Our dedicated teams work relentlessly to ensure your digital presence is not just modern, but ahead of its time.
                                </p>
                                <ul className="space-y-4">
                                    {['Award-winning Design', 'AI-First Approach', 'Unparalleled Performance', 'Dedicated Support 24/7'].map((item) => (
                                        <li key={item} className="flex items-center text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-neon-purple mr-4" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 blur-3xl opacity-30" />
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {whyChooseUs.map((item, idx) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="glass-card p-6 rounded-2xl"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4 text-neon-blue">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-400">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionWrapper>

                <CTASection
                    title="Ready to Transform Your Business?"
                    subtitle="Let's build something extraordinary together."
                    buttonText="Start Your Project"
                    buttonLink="/contact"
                />
            </main>
        </>
    );
}
