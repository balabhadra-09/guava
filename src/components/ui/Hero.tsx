import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
    title: ReactNode;
    description: string;
    gradientClass?: string;
    children?: ReactNode;
}

export function Hero({
    title,
    description,
    gradientClass = "from-neon-blue/20 via-neon-purple/20 to-transparent",
    children
}: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-30`} />

            {/* Decorative Shape */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
                        {title}
                    </h1>
                    <p className="text-lg lg:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
