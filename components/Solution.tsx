"use client";

import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";
import { SolutionGradient } from "./GradientBlur";

const features = [
  {
    title: "Discover What's Growing Nearby",
    description:
      "See what neighbors are growing within walking distance. Tomatoes, fresh herbs, eggs, homemade bread—straight from someone's garden to yours.",
  },
  {
    title: "Exchange, Don't Buy",
    description:
      "No money changes hands. Trade your basil for their carrots. Your homemade jam for their cucumbers. Value for value, neighbor to neighbor.",
  },
  {
    title: "Build Real Community",
    description:
      "Every exchange is a connection. Every connection is a relationship. Every relationship makes your neighborhood stronger.",
  },
  {
    title: "Grow Together",
    description:
      "New to growing? Your neighbors want to help. Experienced grower? Share what you know. We rise together.",
  },
];

export default function Solution() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
      <SolutionGradient />
      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-deep-forest sm:text-4xl">
            A New Way to Feed Your Family
          </h2>
        </ScrollReveal>
        <StaggerContainer className="mt-16 grid gap-10 sm:grid-cols-2" staggerDelay={0.12}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-xl border border-deep-forest/5 bg-white/60 p-8 shadow-[0_2px_8px_rgba(44,74,62,0.08)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_24px_rgba(44,74,62,0.12)] hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-deep-forest">
                  {f.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-deep-forest/70">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.3}>
          <p className="mt-12 text-center font-serif text-lg text-deep-forest/80 italic">
            This is how we take our power back.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="mt-8 text-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-earth-green px-6 py-3 text-base font-medium text-cream shadow-sm transition-all duration-300 hover:bg-earth-green/90 hover:shadow-md hover:-translate-y-0.5"
            >
              Join the Waitlist
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
