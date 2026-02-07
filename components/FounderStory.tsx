"use client";

import ScrollReveal from "./ScrollReveal";
import { FounderGradient } from "./GradientBlur";

export default function FounderStory() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
      <FounderGradient />
      <div className="relative mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-deep-forest sm:text-4xl">
            Why I&apos;m Building This
          </h2>
        </ScrollReveal>
        <div className="mt-12 space-y-6 font-serif text-lg leading-8 text-deep-forest/80">
          <ScrollReveal delay={0.1}>
            <p>Hi, I&apos;m Erica.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p>
              I&apos;ve been thinking about Bartyr since 2020, watching food
              prices soar while gardens overflow. Watching neighbors become
              strangers while both struggle with the same challenges.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p>
              I&apos;ve been part of CSAs. I&apos;ve grown my own food.
              I&apos;ve traded with friends. I&apos;ve seen how powerful it is
              when we remember how to take care of each other.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p>
              Bartyr is my answer to a simple question:{" "}
              <em>
                What if we stopped depending on systems that don&apos;t serve us
                and started building systems that do?
              </em>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p>
              This app is for every person with basil in their kitchen window.
              Every gardener with too many tomatoes. Every neighbor who wants to
              know their neighbors.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <p className="font-semibold text-deep-forest">
              Let&apos;s grow something together.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-earth-green">&mdash; Erica, Founder</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
