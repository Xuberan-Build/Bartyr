"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Post What You Have",
    description:
      "Take a photo of what you're growing or making. Add a quick description. Hit post.",
    detail: "That's it.",
  },
  {
    number: "02",
    title: "Browse Your Neighborhood",
    description:
      "See what's available nearby. Filter by what you need. Message neighbors directly to coordinate the exchange.",
    detail: "No middleman. No fees. Just neighbors.",
  },
  {
    number: "03",
    title: "Meet & Exchange",
    description:
      "Choose a public spot you both know. Bring what you're sharing. Complete the exchange. Build the relationship.",
    detail: null,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-deep-forest/[0.03] px-6 py-20 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-deep-forest sm:text-4xl">
            Three Steps to Abundance
          </h2>
        </ScrollReveal>
        <div className="mt-16 space-y-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.12}>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-earth-green text-lg font-bold text-cream shadow-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-deep-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-deep-forest/70">
                    {step.description}
                  </p>
                  {step.detail && (
                    <p className="mt-2 text-base font-medium text-deep-forest/80">
                      {step.detail}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <div className="mt-12 rounded-xl border border-info-sky/30 bg-info-sky/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold text-deep-forest">
              Safety Note
            </p>
            <p className="mt-1 text-sm leading-6 text-deep-forest/70">
              Your safety matters. We provide guidelines for safe exchanges,
              verification badges, and community reporting tools. You control
              who you exchange with&mdash;your judgment matters most.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
