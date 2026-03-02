import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/ui/CTASection';
import { Award, Target, Eye, Heart, Zap, Users, Globe, Rocket } from 'lucide-react';

const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Sarah Johnson', role: 'CTO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
    { name: 'Marcus Williams', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
    { name: 'Emily Davis', role: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
    { name: 'James Wilson', role: 'Lead AI Engineer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Lisa Park', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
];

const timeline = [
    { year: '2020', title: 'The Beginning', description: 'Guava was founded with a vision to democratize AI for businesses of all sizes.' },
    { year: '2021', title: 'First Major Client', description: 'Landed our first enterprise client and expanded the team to 15 members.' },
    { year: '2022', title: 'Global Expansion', description: 'Opened offices in London and Singapore, serving clients across 3 continents.' },
    { year: '2023', title: 'AI Innovation Award', description: 'Recognized as the leading AI agency at the Global Tech Summit.' },
    { year: '2024', title: '100+ Projects', description: 'Celebrated delivering 100+ successful projects with 98% client satisfaction.' },
];

const values = [
    { icon: <Zap className="w-8 h-8" />, title: 'Innovation', description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.' },
    { icon: <Heart className="w-8 h-8" />, title: 'Client Focus', description: 'Your success is our success. We immerse ourselves in your vision to deliver results that matter.' },
    { icon: <Globe className="w-8 h-8" />, title: 'Global Impact', description: 'We believe technology should be accessible to businesses everywhere, regardless of size.' },
    { icon: <Rocket className="w-8 h-8" />, title: 'Excellence', description: 'We settle for nothing less than exceptional in everything we deliver.' },
];

export function About() {
    return (
        <>
            <Helmet>
                <title>About Us | Guava Digital Agency</title>
                <meta name="description" content="Learn about Guava's journey from startup to industry leader, our mission, values, and the talented team behind our success." />
            </Helmet>

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-dark-900 mesh-gradient" />
                    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none" />

                    <SectionWrapper className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-sm font-medium mb-6">
                                About Guava
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-outfit">
                                Building the Future with <span className="text-gradient">Intelligent Solutions</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                We are a collective of visionaries, engineers, and creatives on a mission to transform how businesses leverage artificial intelligence.
                            </p>
                        </motion.div>
                    </SectionWrapper>
                </section>

                {/* Story Section */}
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl blur-2xl opacity-50" />
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Team collaboration"
                                    className="relative rounded-2xl aspect-[4/3] object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-outfit">Our Story</h2>
                            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                Founded in 2020, Guava started with a simple belief: artificial intelligence should be accessible to every business, not just tech giants. What began as a small team of AI enthusiasts has grown into a full-service digital agency trusted by industry leaders worldwide.
                            </p>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We combine cutting-edge AI technology with world-class design and engineering to create digital experiences that transform businesses. Our approach is collaborative, transparent, and always focused on delivering measurable results.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="glass-card px-6 py-4 rounded-xl">
                                    <div className="text-2xl font-bold text-gradient">2020</div>
                                    <div className="text-gray-400 text-sm">Founded</div>
                                </div>
                                <div className="glass-card px-6 py-4 rounded-xl">
                                    <div className="text-2xl font-bold text-gradient">150+</div>
                                    <div className="text-gray-400 text-sm">Projects</div>
                                </div>
                                <div className="glass-card px-6 py-4 rounded-xl">
                                    <div className="text-2xl font-bold text-gradient">98%</div>
                                    <div className="text-gray-400 text-sm">Satisfaction</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* Mission & Vision */}
                <SectionWrapper className="bg-dark-800/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-10 border-white/5 h-full" variant="solid">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 flex items-center justify-center mb-6 text-neon-blue">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-outfit">Our Mission</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    To empower businesses of all sizes with accessible, powerful AI solutions that drive growth, efficiency, and innovation. We believe in making advanced technology simple, practical, and transformative.
                                </p>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-10 border-white/5 h-full" variant="solid">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center mb-6 text-neon-purple">
                                    <Eye className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-outfit">Our Vision</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    To be the global leader in bridging the gap between businesses and artificial intelligence, creating a world where every company can harness the full potential of AI to thrive in the digital age.
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </SectionWrapper>

                {/* Values */}
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-6"
                        >
                            Our Values
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">What Drives Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-8 border-white/5 h-full text-center" variant="solid">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mx-auto mb-6 text-neon-blue">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Timeline */}
                <SectionWrapper className="bg-dark-800/30">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink text-sm font-medium mb-6"
                        >
                            Our Journey
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">Milestones & Achievements</h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-12 pb-12 last:pb-0"
                            >
                                {/* Timeline line */}
                                {idx < timeline.length - 1 && (
                                    <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple/50 to-transparent" />
                                )}
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-neon-purple/20 border-2 border-neon-purple flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-neon-purple" />
                                </div>
                                <div className="glass-card p-6 rounded-xl">
                                    <div className="text-sm text-neon-purple font-medium mb-1">{item.year}</div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Team Section */}
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-6"
                        >
                            Our Team
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit">Meet the Experts</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A diverse team of passionate individuals dedicated to pushing the boundaries of what's possible with AI.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, idx) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 border-white/5 group" variant="solid">
                                    <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-gray-400">{member.role}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Culture Image */}
                <SectionWrapper className="py-0">
                    <div className="relative rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20" />
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
                            alt="Team culture"
                            className="w-full h-[400px] object-cover opacity-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center max-w-2xl px-6">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h3>
                                <p className="text-gray-300 text-lg">
                                    We believe in fostering an environment where creativity thrives, ideas are valued, and every team member has the opportunity to make an impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>

                <CTASection
                    title="Join Our Journey"
                    subtitle="Ready to be part of something extraordinary?"
                    buttonText="Get in Touch"
                    buttonLink="/contact"
                />
            </main>
        </>
    );
}
