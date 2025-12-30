
"use client";

import { cn } from "@/lib/utils";

interface WavyDividerProps {
  className?: string;
  fillColor?: string; // e.g., "hsl(var(--primary))" or "text-primary"
}

const WavyDivider = ({ className, fillColor = "hsl(var(--background))" }: WavyDividerProps) => {
  // If fillColor is a Tailwind class like "text-primary", we can't directly use it in SVG fill.
  // For simplicity, this component expects HSL string or direct color value.
  // A more complex solution would parse Tailwind color to actual value.

  // Let's use a fixed color that matches the background or a contrasting one for demonstration
  // The current implementation defaults to background, making it a subtle shape divider.
  // To make it visible, pass a different color, e.g. "hsl(var(--primary))" for primary color fill.

  return (
    <div className={cn("w-full overflow-hidden leading-[0]", className)}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: 'hsl(var(--primary)/0.5)', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: 'hsl(var(--accent)/0.5)', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        <path
          d="M0,50 C150,100 300,0 450,50 C600,100 750,0 900,50 C1050,100 1200,0 1350,50 L1440,50 L1440,100 L0,100 Z"
          fill={fillColor === "gradient" ? "url(#waveGradient)" : fillColor} // Example of using gradient
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
