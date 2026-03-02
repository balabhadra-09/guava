import { motion } from 'framer-motion';
import { Button } from './Button';
import { SectionWrapper } from './SectionWrapper';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
}

export function CTASection({
    title = "Ready to Transform Your Digital Presence?",
    subtitle = "Let's work together to build something extraordinary.",
    buttonText = "Start a Project",
    buttonLink = "/contact"
}: CTASectionProps) {
    return (
        <SectionWrapper className="relative">
            <motion.div
                className="glass-dark rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden"
                whileInView={{ scale: [0.95, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-pink/10" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6">{title}</h2>
                    <p className="text-xl text-gray-400 mb-10">{subtitle}</p>
                    <Link to={buttonLink}>
                        <Button size="lg" className="group">
                            {buttonText}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
