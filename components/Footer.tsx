export default function Footer() {
  return (
    <footer className="border-t border-deep-forest/10 bg-deep-forest px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-cream">bartyr</p>
            <p className="mt-1 text-sm font-medium text-golden-harvest">
              grow. share. thrive.
            </p>
            <p className="mt-4 text-sm leading-6 text-cream/60">
              We&apos;re building coordination infrastructure for a world where
              neighbors take care of neighbors. Food security from community,
              not corporations.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "About", href: "#about" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "mailto:hello@bartyr.app" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/40">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Instagram", href: "https://instagram.com/bartyrapp" },
                { label: "Twitter", href: "https://twitter.com/bartyrapp" },
                { label: "Discord", href: "#" },
                { label: "hello@bartyr.app", href: "mailto:hello@bartyr.app" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} Bartyr. All rights reserved.
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-cream/60">Privacy Policy</a>
            {" "}&bull;{" "}
            <a href="#" className="hover:text-cream/60">Terms of Service</a>
          </p>
          <p className="mt-2">
            Built with ❤️ in Atlanta
          </p>
        </div>
      </div>
    </footer>
  );
}
