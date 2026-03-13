"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Vision() {
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-deep-forest px-6 py-20 sm:py-28 lg:px-8">
      {/* Subtle amethyst glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "600px",
            height: "600px",
            background: "rgba(155, 126, 189, 0.08)",
            filter: "blur(140px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.blockquote
          ref={quoteRef}
          className="font-serif text-2xl leading-relaxed text-cream italic sm:text-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            quoteInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          &ldquo;We are rich in gifts. We&apos;ve just been trained to believe
          we&apos;re poor.&rdquo;
        </motion.blockquote>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-xl space-y-6 text-base leading-7 text-cream/80">
            <p>
              iBartyr isn&apos;t just an app. It&apos;s coordination
              infrastructure for a world where neighbors take care of neighbors.
              Where food security comes from community, not corporations. Where
              abundance is the default, not scarcity.
            </p>
            <p className="font-semibold text-cream">
              We&apos;re building proof that another way is possible. One
              exchange at a time. One neighborhood at a time. One relationship at
              a time.
            </p>
            <p className="font-serif text-xl text-golden-harvest italic">
              This is how we take our power back.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-12">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-earth-green px-6 py-3 text-base font-medium text-cream shadow-sm transition-all duration-300 hover:bg-earth-green/90 hover:shadow-md hover:-translate-y-0.5"
            >
              I&apos;m Ready &mdash; Join the Waitlist
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
