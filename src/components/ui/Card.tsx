import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
    children?: ReactNode;
    variant?: 'glass' | 'glass-dark' | 'outline' | 'solid';
    className?: string;
    hoverEffect?: boolean;
}

export function Card({
    children,
    variant = 'glass',
    className,
    hoverEffect = true,
    ...props
}: CardProps) {
    const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300';

    const variants = {
        glass: 'glass',
        'glass-dark': 'glass-dark',
        outline: 'border border-white/10 bg-transparent',
        solid: 'bg-dark-800 border border-white/5',
    };

    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.div>
    );
}
