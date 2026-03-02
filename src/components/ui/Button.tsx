import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '../../utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'primary', size = 'md', className, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:pointer-events-none';

        const variants = {
            primary: 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]',
            secondary: 'bg-white text-dark-900 hover:bg-gray-100',
            outline: 'border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm',
            ghost: 'text-white hover:bg-white/10',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-8 text-base',
            lg: 'h-14 px-10 text-lg',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
