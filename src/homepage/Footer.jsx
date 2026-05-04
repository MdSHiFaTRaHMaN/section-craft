import Link from "next/link";

const footerLinks = {
  Features: [
    { label: "Landing Pages", href: "#" },
    { label: "Product Templates", href: "#" },
    { label: "Theme Sections", href: "#" },
    { label: "Blog Posts", href: "#" },
    { label: "A/B Testing", href: "#" },
    { label: "Cart Drawer", href: "#" },
    { label: "Practical AI", href: "#" },
  ],
  Product: [
    { label: "Pricing", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Support", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Enterprise", href: "#" },
  ],
  Resources: [
    { label: "Academy", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
  Company: [
    { label: "Company", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Status", href: "#" },
    { label: "Brand assets", href: "#" },
  ],
  Socials: [
    { label: "LinkedIn", href: "#" },
    { label: "X (Twitter)", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Github", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

const bottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of service", href: "#" },
  { label: "AI Terms", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d0f14] text-white">
      <div
        className="mx-auto w-full px-6 sm:px-8 lg:px-10"
        style={{ maxWidth: "1700px" }}
      >
        {/* Top links grid */}
        <div className="border-b border-white/10 py-16 lg:py-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative text-[14px] font-normal text-white/65 transition-colors duration-200 hover:text-white"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 py-7 sm:flex-row sm:items-center">
          {/* Left: copyright + legal links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-[13px] text-white/30">
              © Instant Commerce
            </span>
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-white/50 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: made by badge */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-white/30">Made by</span>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              {/* Logo mark — two stacked bars */}
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="18" height="5" rx="1.5" fill="white" opacity="0.9" />
                <rect y="9" width="12" height="5" rx="1.5" fill="white" opacity="0.9" />
              </svg>
              <span className="text-[12px] font-bold uppercase tracking-widest text-white/90">
                Instant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;