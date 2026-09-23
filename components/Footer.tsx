const WA_NUMBER = "916267731901";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

import Image from "next/image";
import EmailLink from "@/components/EmailLink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-cream-warm/50 border-t border-ink/5 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Galaxy Connect Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-xl object-cover shadow-sm"
              />
              <span className="text-xl text-ink">
                Galaxy<span className="text-accent">Connect</span>
              </span>
            </div>
            <p className="text-slate-light text-sm leading-relaxed max-w-xs mb-6">
              India&apos;s trusted source for premium, verified B2B &amp; B2C
              lead databases. Updated daily for maximum accuracy.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/",
                  path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.58v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94Z",
                },
                {
                  label: "X",
                  href: "https://x.com/",
                  path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/",
                  path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.8 5.8 0 0 0-2.1 1.37A5.8 5.8 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.37 2.1a5.8 5.8 0 0 0 2.1 1.37c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.8 5.8 0 0 0 2.1-1.37 5.8 5.8 0 0 0 1.37-2.1c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.8 5.8 0 0 0-1.37-2.1A5.8 5.8 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.15A3.99 3.99 0 1 1 16 12a3.99 3.99 0 0 1-4 3.99Zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/",
                  path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z",
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/",
                  path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={`${social.label} (coming soon)`}
                  title={`${social.label} — coming soon`}
                  className="w-9 h-9 rounded-full border border-ink/10 bg-white flex items-center justify-center text-slate-light hover:text-ink hover:border-ink/25 transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={`${WA_BASE}?text=${encodeURIComponent("Hello! I'm interested in your database services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1fba59] transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <EmailLink
                user="support"
                domain="galaxyconnect.in"
                label="Email Us"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-ink/10 text-slate-light text-xs font-medium hover:border-ink/20 hover:text-ink transition-colors"
              />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-ink text-sm mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Categories", href: "/categories" },
                { label: "Blog", href: "/blog" },
                { label: "Software", href: "/software" },
                { label: "Services", href: "/#services" },
                { label: "Why Us", href: "/#why-us" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-light text-sm hover:text-ink transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-slate-light text-sm hover:text-ink transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-slate-light text-sm hover:text-ink transition-colors duration-200"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-ink text-sm mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`${WA_BASE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light text-sm hover:text-[#25D366] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#25D366]">📱</span> +91 62677 31901
                </a>
              </li>
              <li>
                <span className="text-slate-light text-sm flex items-start gap-2">
                  <span className="text-brand-slate mt-0.5">📞</span>
                  <span>
                    +91 89829 18349
                    <br />
                    +91 88896 49086
                  </span>
                </span>
              </li>
              <li>
                <EmailLink
                  user="support"
                  domain="galaxyconnect.in"
                  className="text-slate-light text-sm hover:text-ink transition-colors flex items-center gap-2"
                  icon={<span>✉️</span>}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-light text-xs">
            © {year} Galaxy Connect. All rights reserved.
          </p>
          <p className="text-slate-light text-xs">
            Premium quality data for Indian businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
