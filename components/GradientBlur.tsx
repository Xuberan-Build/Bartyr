"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlobProps {
  color: string;
  size?: string;
  className?: string;
  animate?: boolean;
}

function Blob({ color, size = "400px", className = "", animate = true }: BlobProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: "blur(120px)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView && animate
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.8 }
      }
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
  );
}

export function HeroGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Blob
        color="rgba(74, 124, 89, 0.15)"
        size="600px"
        className="-top-40 -right-20"
      />
      <Blob
        color="rgba(155, 126, 189, 0.12)"
        size="500px"
        className="-bottom-32 -left-32"
      />
      <Blob
        color="rgba(212, 165, 116, 0.1)"
        size="350px"
        className="top-1/3 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}

export function SolutionGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Blob
        color="rgba(74, 124, 89, 0.08)"
        size="500px"
        className="-top-20 -left-40"
      />
      <Blob
        color="rgba(212, 165, 116, 0.1)"
        size="450px"
        className="-bottom-20 -right-32"
      />
    </div>
  );
}

export function WhoIsForGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Blob
        color="rgba(107, 155, 110, 0.1)"
        size="400px"
        className="-top-32 right-0"
      />
      <Blob
        color="rgba(201, 166, 166, 0.1)"
        size="350px"
        className="-bottom-24 -left-20"
      />
    </div>
  );
}

export function FounderGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Blob
        color="rgba(155, 126, 189, 0.08)"
        size="450px"
        className="-top-24 -right-32"
      />
      <Blob
        color="rgba(74, 124, 89, 0.08)"
        size="400px"
        className="-bottom-32 -left-24"
      />
    </div>
  );
}

export function WaitlistGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Blob
        color="rgba(74, 124, 89, 0.12)"
        size="500px"
        className="-top-32 left-1/2 -translate-x-1/2"
      />
      <Blob
        color="rgba(212, 165, 116, 0.08)"
        size="400px"
        className="-bottom-20 -right-20"
      />
      <Blob
        color="rgba(201, 166, 166, 0.08)"
        size="350px"
        className="-bottom-24 -left-32"
      />
    </div>
  );
}
