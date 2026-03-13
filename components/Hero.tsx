"use client";

import { motion } from "framer-motion";
import { HeroGradient } from "./GradientBlur";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <HeroGradient />
      <div className="relative mx-auto max-w-2xl text-center">
        <motion.h1
          className="text-5xl font-bold tracking-tight text-deep-forest sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Grow. Share. Thrive.
        </motion.h1>
        <motion.p
          className="mt-6 text-lg leading-8 text-deep-forest/70 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          Your neighborhood has everything you need. iBartyr connects you with
          neighbors who grow, make, and share&mdash;no money required.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-lg bg-earth-green px-6 py-3 text-base font-medium text-cream shadow-sm transition-all duration-300 hover:bg-earth-green/90 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth-green"
            aria-label="Join the iBartyr waitlist to be notified when we launch in Spring 2026"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1 rounded-lg border-2 border-earth-green px-6 py-3 text-base font-medium text-earth-green transition-all duration-300 hover:bg-earth-green/10 hover:-translate-y-0.5"
            aria-label="Scroll down to learn how iBartyr works"
          >
            See How It Works <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
        <motion.p
          className="mt-8 text-sm font-medium text-earth-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Launching in Atlanta &bull; Spring 2026
        </motion.p>
      </div>
    </section>
  );
}
