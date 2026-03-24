"use client";
import { useState, useEffect } from "react";
import { WhatsAppIcon as WAIcon } from "./icons";
import Image from "next/image";

const WA_NUMBER = "919179569006";
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/92 backdrop-blur-lg border-b border-[#EAEAE6] shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Galaxy Connect"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg text-ink tracking-tight">
              Galaxy<span className="text-accent">Connect</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {["Categories", "Why Us", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-[#4A4A6A] hover:text-[#0A0A0F] transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${WA_BASE}?text=${encodeURIComponent("Hello, I am interested in your database services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-vivid transition-all duration-300 group shadow-sm shadow-accent/20"
            >
              <WAIcon size={16} />
              Get Started
            </a>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-cream-warm transition-colors"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`block h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-lg border-b border-cream-warm px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {["Categories", "Why Us", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-base text-slate-light hover:text-ink transition-colors py-1"
              >
                {item}
              </a>
            ))}
            <a
              href={`${WA_BASE}?text=${encodeURIComponent("Hello, I am interested in your database services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-accent text-white text-sm font-medium mt-2 shadow-sm shadow-accent/20"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
