'use client';

import { cn } from "@/lib/cn";
import { cva } from "class-variance-authority";

const tickerVariants = cva(
    'inline-flex gap-10 uppercase',
    {
        variants: {
            direction: {
                normal: 'animate-ticker-Normal',
                reversed: ' animate-ticker-Reversed'
            },
        },

        defaultVariants: {
            variant: 'normal',
        },
    }
);
export default function Ticker({
  text = 'commitment to excellence.',
  speed = '20s',
  className = '',
  direction = "normal"
}) {
  return (
    <div className={`w-full overflow-hidden whitespace-nowrap -rotate-3 ${className}`}>
      
      <div
        className={cn(tickerVariants({direction}))}
        style={{ animationDuration: speed }}
      >
        {/* Repeat text for seamless loop */}
        <span className="ticker-text">{text}</span>
        <span className="ticker-text">{text}</span>
        <span className="ticker-text">{text}</span>
        <span className="ticker-text">{text}</span>
      </div>

    </div>
  );
}