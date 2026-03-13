"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "What is iBartyr?",
    a: "iBartyr is a neighborhood food exchange app launching in Atlanta in Spring 2026. It connects neighbors who grow, make, or have extra food with neighbors who need it. No money changes hands\u2014just direct exchange between people in your community.",
  },
  {
    q: "How does iBartyr work?",
    a: "iBartyr works in three steps: Post what you\u2019re growing or making, browse what neighbors have available nearby, and message them to arrange an exchange. You meet in person at a public location you both agree on and complete the exchange directly.",
  },
  {
    q: "Is iBartyr free to use?",
    a: "We\u2019re still building the app and haven\u2019t finalized pricing. Our goal is to make neighbor-to-neighbor food exchange accessible to everyone.",
  },
  {
    q: "When does iBartyr launch?",
    a: "iBartyr is targeting a Spring 2026 launch in Atlanta. We\u2019re currently building the app and gathering founding members through our waitlist.",
  },
  {
    q: "Where is iBartyr available?",
    a: "iBartyr is launching first in Atlanta, Georgia. We\u2019re starting with one city to build the foundation right. Additional cities will be determined based on community interest.",
  },
  {
    q: "How is iBartyr different from farmers markets?",
    a: "Farmers markets connect you with farmers who sell produce. iBartyr connects you directly with neighbors for exchange within your immediate community. It\u2019s hyper-local, relationship-focused, and doesn\u2019t involve money.",
  },
  {
    q: "How is iBartyr different from Buy Nothing groups?",
    a: "Buy Nothing groups operate on Facebook and focus on giving items away. iBartyr is a dedicated app built specifically for food exchange with features like location-based search, harvest calendars, and exchange coordination tools. We emphasize reciprocal exchange over one-way giving.",
  },
  {
    q: "Do I need a garden to use iBartyr?",
    a: "No. You can participate by growing herbs in your kitchen, making homemade goods like bread or jam, or offering other items of value. If you have eggs, preserves, baked goods, or even extra pantry items, you can exchange on iBartyr.",
  },
  {
    q: "How does iBartyr ensure food safety?",
    a: "iBartyr provides food safety guidelines and education. Users control who they exchange with and can view ratings and community feedback. All exchanges happen directly between neighbors\u2014you make the final decision about what you\u2019re comfortable accepting.",
  },
  {
    q: "Can I use iBartyr to sell food?",
    a: "No. iBartyr is designed for exchange, not selling. No money changes hands on the platform. If you want to sell your produce, farmers markets or farm stands are better options.",
  },
  {
    q: "How do I join iBartyr?",
    a: "Join our waitlist at ibartyr.app. Waitlist members get early access when we launch in Spring 2026 and can help shape the app during development.",
  },
  {
    q: "What cities will iBartyr expand to after Atlanta?",
    a: "We\u2019re focusing on Atlanta first. Future expansion will be based on waitlist interest and community demand. Join the waitlist and tell us where you\u2019re located\u2014we\u2019re listening.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-deep-forest/10">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between py-5 text-left"
          aria-expanded={open}
          aria-label={`Expand to read answer about ${q.replace("?", "").toLowerCase()}`}
        >
          <span className="pr-4 text-base font-semibold text-deep-forest">
            {q}
          </span>
          <motion.span
            className="shrink-0 text-lg text-earth-green"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            +
          </motion.span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-base leading-7 text-deep-forest/70">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-deep-forest/[0.03] px-6 py-20 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-deep-forest sm:text-4xl">
            Questions We Get A Lot
          </h2>
        </ScrollReveal>
        <div className="mt-12">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
