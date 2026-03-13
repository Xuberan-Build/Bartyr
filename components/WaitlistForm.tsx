"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { WaitlistGradient } from "./GradientBlur";

const DESCRIBES_YOU_OPTIONS = [
  "I'm already growing food",
  "I want to start growing",
  "I'm interested in receiving food",
  "I make handmade goods (bread, jam, etc.)",
  "Just exploring the idea",
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    location: "",
    growing_status: "",
    beta_tester: false,
    newsletter: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "waitlist",
          first_name: formData.first_name,
          email: formData.email,
          location: formData.location,
          growing_status: formData.growing_status,
          beta_tester: formData.beta_tester ? "yes" : "",
          newsletter: formData.newsletter ? "yes" : "",
        }),
      });

      if (!res.ok) {
        setStatus("error");
        setMessage("Something went wrong. Mind trying again?");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Mind trying again?");
    }
  };

  if (status === "success") {
    return (
      <section id="waitlist" className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
        <WaitlistGradient />
        <motion.div
          className="relative mx-auto max-w-md rounded-xl border border-earth-green/20 bg-white/60 p-8 text-center backdrop-blur-sm shadow-[0_2px_8px_rgba(44,74,62,0.08)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-xl font-bold text-deep-forest">
            You&apos;re on the list!
          </h3>
          <p className="mt-2 text-base text-deep-forest/70">
            Check your email for a welcome message and next steps.
          </p>
          <div className="mt-6 space-y-3 text-left text-sm text-deep-forest/70">
            <p className="font-medium text-deep-forest">While you wait:</p>
            <ul className="space-y-2">
              <li>
                Follow us on Instagram{" "}
                <a
                  href="https://instagram.com/ibartyrapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-earth-green underline"
                >
                  @ibartyrapp
                </a>
              </li>
              <li>
                Join our community{" "}
                <a
                  href="#"
                  className="font-medium text-earth-green underline"
                >
                  Discord
                </a>
              </li>
              <li>Share iBartyr with your neighbors</li>
            </ul>
          </div>
          <p className="mt-6 font-serif text-sm text-deep-forest/60 italic">
            The revolution starts in the garden. Thanks for growing with us.
            <br />
            &mdash; Erica &amp; the iBartyr team
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="relative overflow-hidden px-6 py-20 sm:py-28 lg:px-8">
      <WaitlistGradient />
      <div className="relative mx-auto max-w-lg">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-deep-forest sm:text-4xl">
            Be Part of the First Harvest
          </h2>
          <p className="mt-3 text-center text-base text-deep-forest/70">
            Join the founding members bringing neighbor-to-neighbor food exchange
            to Atlanta.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mt-10 space-y-5"
          >
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="waitlist" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* First Name — required */}
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-deep-forest/70">
                First Name <span className="text-error-clay">*</span>
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                aria-label="Your first name"
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                placeholder="Your first name"
                className="mt-1.5 block w-full rounded-lg border border-deep-forest/20 bg-white/80 px-4 py-3 text-base text-deep-forest shadow-sm backdrop-blur-sm placeholder:text-deep-forest/40 transition-shadow duration-200 focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 focus:shadow-[0_0_0_4px_rgba(74,124,89,0.08)] focus:outline-none"
              />
            </div>

            {/* Email — required */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-deep-forest/70">
                Email <span className="text-error-clay">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-label="Your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="mt-1.5 block w-full rounded-lg border border-deep-forest/20 bg-white/80 px-4 py-3 text-base text-deep-forest shadow-sm backdrop-blur-sm placeholder:text-deep-forest/40 transition-shadow duration-200 focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 focus:shadow-[0_0_0_4px_rgba(74,124,89,0.08)] focus:outline-none"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-deep-forest/70">
                Location / Neighborhood
              </label>
              <input
                id="location"
                name="location"
                type="text"
                aria-label="Your location or neighborhood"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., East Atlanta Village, Decatur, Midtown"
                className="mt-1.5 block w-full rounded-lg border border-deep-forest/20 bg-white/80 px-4 py-3 text-base text-deep-forest shadow-sm backdrop-blur-sm placeholder:text-deep-forest/40 transition-shadow duration-200 focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 focus:shadow-[0_0_0_4px_rgba(74,124,89,0.08)] focus:outline-none"
              />
              <p className="mt-1 text-xs text-deep-forest/50">
                Helps us prioritize neighborhoods
              </p>
            </div>

            {/* Describes You Best */}
            <div>
              <label htmlFor="growing_status" className="block text-sm font-medium text-deep-forest/70">
                What describes you best?
              </label>
              <select
                id="growing_status"
                name="growing_status"
                aria-label="What describes you best"
                value={formData.growing_status}
                onChange={(e) => setFormData({ ...formData, growing_status: e.target.value })}
                className="mt-1.5 block w-full rounded-lg border border-deep-forest/20 bg-white/80 px-4 py-3 text-base text-deep-forest shadow-sm backdrop-blur-sm transition-shadow duration-200 focus:border-earth-green focus:ring-2 focus:ring-earth-green/20 focus:shadow-[0_0_0_4px_rgba(74,124,89,0.08)] focus:outline-none"
              >
                <option value="">Select one...</option>
                {DESCRIBES_YOU_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="beta_tester"
                  checked={formData.beta_tester}
                  onChange={(e) => setFormData({ ...formData, beta_tester: e.target.checked })}
                  className="mt-0.5 h-4 w-4 rounded border-deep-forest/30 text-earth-green focus:ring-earth-green"
                />
                <span className="text-sm text-deep-forest">
                  I want to help beta test the app (Spring 2026)
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="mt-0.5 h-4 w-4 rounded border-deep-forest/30 text-earth-green focus:ring-earth-green"
                />
                <span className="text-sm text-deep-forest">
                  Send me growing tips and community stories while I wait
                </span>
              </label>
            </div>

            {/* Error */}
            {status === "error" && (
              <motion.p
                className="rounded-lg bg-error-clay/10 px-4 py-3 text-sm text-error-clay"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {message}
              </motion.p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-earth-green px-4 py-3 text-base font-semibold text-cream shadow-sm transition-all duration-300 hover:bg-earth-green/90 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth-green disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {status === "loading" ? "Adding you to the list..." : "Join the Waitlist"}
            </button>

            <p className="text-center text-xs text-deep-forest/50">
              We respect your inbox. No spam, no selling your data. Just updates
              on our progress and launch. Unsubscribe anytime.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
