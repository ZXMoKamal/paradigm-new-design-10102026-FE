'use client';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/cn';

/*  Variants  */
const statisticVariants = cva(
    'relative flex items-center justify-center',
    {
        variants: {
            variant: {
                overlay: 'h-[120px] relative',
                stacked: 'flex-col-reverse gap-2',
            },
        },
        defaultVariants: {
            variant: 'stacked',
        },
    }
);

/*  Component  */
export default function StatisticNumber({
    number,
    title,
    titleTag:TitleTag="h3",
    numberTag:NumberTag="h4",
    variant = 'stacked',
    className,
    titleClassName,
    numberClassName,
}) {
    return (
        <section className={ cn(statisticVariants({ variant }), className) }>

            {/* OVERLAY VARIANT */ }
            { variant === 'overlay' && (
                <>
                    <TitleTag className={cn("absolute m-auto text-sm text-text-primary font-primary-regular text-center", titleClassName)}>
                        { title }
                    </TitleTag>

                    <NumberTag className={cn("text-4xl font-primary-medium text-text-primary", numberClassName)}>
                        { number }
                    </NumberTag>
                </>
            ) }

            {/* STACKED VARIANT */ }
            { variant === 'stacked' && (
                <>
                    <TitleTag className={ cn("text-sm text-text-primary opacity-80", titleClassName) }>
                        { title }
                    </TitleTag>

                    <NumberTag className={ cn("text-4xl font-primary-semibold text-text-primary", numberClassName)}>
                        { number }
                    </NumberTag>
                </>
            ) }
        </section>
    );
}