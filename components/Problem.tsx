"use client";

import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

const problems = [
  {
    category: "The Money Trap",
    title: "Food Shouldn't Cost This Much",
    body: "Eight items. Sixty dollars. Half of them recalled for contamination two weeks later.\n\nYou're paying more for less, and it's getting worse. Meanwhile, your neighbor's garden has more tomatoes than they know what to do with.",
  },
  {
    category: "The Trust Deficit",
    title: "We Don't Know Our Neighbors",
    body: "Hundreds of people live within a mile of you. Some are growing incredible food. Others are making things by hand. You'll never meet them at the grocery store.\n\nWe've been taught to be strangers.",
  },
  {
    category: "The Abundance That's Hidden",
    title: "Gardens Are Overflowing",
    body: "Your neighbor's tomatoes are rotting on the vine. Your basil is going to seed. Your cucumbers are piling up on the counter.\n\nMeanwhile, you're paying $5 for what's growing 300 feet away.",
  },
];

export default function Problem() {
  return (
    <section className="bg-deep-forest px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            We&apos;ve Been Sold a Lie
          </h2>
        </ScrollReveal>
        <StaggerContainer className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8" staggerDelay={0.15}>
          {problems.map((p) => (
            <StaggerItem key={p.category}>
              <p className="text-sm font-semibold uppercase tracking-wider text-golden-harvest">
                {p.category}
              </p>
              <h3 className="mt-2 text-xl font-bold text-cream">{p.title}</h3>
              {p.body.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mt-4 text-base leading-7 text-cream/70">
                  {paragraph}
                </p>
              ))}
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.4}>
          <p className="mt-16 text-center font-serif text-xl font-medium text-cream italic sm:text-2xl">
            Scarcity is manufactured. Abundance is real. iBartyr proves it.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
