// 'use client';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/cn';

/* ─── Variants ───────────────────────────────────────────────────────────── */
const buttonVariants = cva(
    'group relative inline-flex items-center justify-center rounded-[30px] font-primary-regular leading-none cursor-pointer select-none overflow-hidden border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                solid: 'bg-secondary fill-text-dark text-text-dark border-secondary transition-colors duration-500',
                solidAnimated: 'bg-white fill-text-dark text-text-dark border-0 hover:text-white ',
                outline: 'bg-primary text-secondary fill-secondary border-secondary hover:bg-secondary hover:fill-text-dark hover:text-text-dark transition-all duration-500',
                outlineDark: 'bg-primary fill-text-dark text-text-dark border-dark hover:bg-secondary hover:border-secondary transition-all duration-500',
            },

            size: {
                sm: 'px-12 py-2 text-[16px]',
                md: 'px-13.75 py-2.5 text-[16px]',
                lg: 'px-13.75 py-3 text-[18px]',
            },
        },

        defaultVariants: {
            variant: 'solid',
            size: 'md',
        },
    }
);

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Button({ children, icon, iconPosition = 'left', variant = 'solid', size = 'md', className, disabled, type = 'button', ...props }) {

    return (
        <button
            type={ type }
            disabled={ disabled }
            className={ cn(buttonVariants({ variant, size }), className) }
            { ...props }
        >

            {/* ── Sliding bg layer — only rendered for solid2 ── */ }
            { variant === 'solidAnimated' && (<span aria-hidden="true" className={ 'absolute inset-y-0 -left-2.5 z-0 w-0 skew-x-20 group-hover:w-[102%] bg-primary-light transition-[width] duration-500 ease-in-out' }/>) }

            {/* ── Content layer — always above the sliding bg ── */ }
            <span
                className={ cn('relative z-10 inline-flex items-center gap-2', size,
                    // solid2: flip text color as bg slides in
                    variant === 'solidAnimated' && ['transition-colors duration-500'],
                ) }
            >
                { icon && iconPosition === 'left' && (
                    <span className="shrink-0 inline-flex">{ icon }</span>
                ) }

                { children }

                { icon && iconPosition === 'right' && (
                    <span className="shrink-0 inline-flex">{ icon }</span>
                ) }
            </span>

        </button>
    );
}