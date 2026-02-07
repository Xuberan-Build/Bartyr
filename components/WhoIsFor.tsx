"use client";

import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { WhoIsForGradient } from "./GradientBlur";

const reasons = [
  "You're growing more than you can eat",
  "You want fresh food without the grocery store markup",
  "You're tired of watching food go to waste in your garden",
  "You want to meet neighbors who share your values",
  "You believe community beats capitalism",
  "You're ready to prove abundance exists",
];

export default function WhoIsFor() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
      <WhoIsForGradient />
      <div className="relative mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-deep-forest sm:text-4xl">
            You Belong Here If&hellip;
          </h2>
        </ScrollReveal>
        <StaggerContainer className="mt-12 space-y-5" staggerDelay={0.08}>
          {reasons.map((reason) => (
            <StaggerItem key={reason}>
              <div className="flex items-start gap-3 text-lg text-deep-forest">
                <span className="mt-0.5 text-earth-green" aria-hidden="true">
                  &#10003;
                </span>
                {reason}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.4}>
          <p className="mt-12 text-center font-serif text-lg text-deep-forest/80 italic">
            From windowsill herbs to backyard farms&mdash;everyone has something
            to share.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
