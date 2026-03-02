import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("relative py-20 lg:py-32 overflow-hidden", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
}
