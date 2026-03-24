"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ALL_LEAD_CATEGORIES, palette, buildWALink } from "@/lib/categories";

import {
  WhatsAppIcon as WAIcon,
  RealEstateArt,
  AutomobileArt,
  EducationArt,
  FinanceArt,
  BusinessArt,
  HomeArt,
  ConsumerArt,
  JewellersArt,
  GarmentArt,
  RestaurantArt,
  ConstructionArt,
  MedicalArt,
  ElectronicsArt,
  BeautyArt,
  EducationBizArt,
  RealEstateBizArt,
  TravelArt,
  AgricultureArt,
  FurnitureArt,
  PrintingArt,
  IndustrialArt,
  ElectricalArt,
  PlasticArt,
  LogisticsArt,
  EventsArt,
  SecurityArt,
  SportsArt,
  PetArt,
  WholesaleArt,
  ArrowLeft,
  SearchIcon,
  MailIcon,
} from "@/components/icons";
import Image from "next/image";

const ARTS = [
  RealEstateArt,
  AutomobileArt,
  EducationArt,
  FinanceArt,
  BusinessArt,
  HomeArt,
  ConsumerArt,
  JewellersArt,
  GarmentArt,
  RestaurantArt,
  ConstructionArt,
  MedicalArt,
  ElectronicsArt,
  BeautyArt,
  EducationBizArt,
  RealEstateBizArt,
  TravelArt,
  AgricultureArt,
  FurnitureArt,
  PrintingArt,
  IndustrialArt,
  ElectricalArt,
  PlasticArt,
  LogisticsArt,
  EventsArt,
  SecurityArt,
  SportsArt,
  PetArt,
  WholesaleArt,
];

/* ── Category Card ───────────────────────────────────────────── */
function CategoryCard({
  cat,
  index,
}: {
  cat: (typeof ALL_LEAD_CATEGORIES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const p = palette[cat.accentColor];
  const Art = ARTS[index % ARTS.length];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.06 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="animate-on-scroll group flex flex-col bg-white rounded-2xl border border-[#EAEAE6] overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.11)] transition-all duration-300 ease-out"
      style={{ transitionDelay: `${(index % 3) * 55}ms` }}
    >
      {/* Art zone */}
      <div className="relative h-[162px] overflow-hidden flex-shrink-0">
        <Art />
        {/* Record badge */}
        <div className="absolute bottom-3 right-3 bg-white/92 backdrop-blur-sm rounded-xl px-2.5 py-1.5 shadow-sm border border-white/70">
          <span
            className={`font-display text-sm font-bold leading-none ${p.record}`}
          >
            {cat.records}
          </span>
          <span className="block text-[8px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
            Records
          </span>
        </div>
        {/* Sector pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/92 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-white/70">
          <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.12em] text-slate-500">
            {cat.sector}
          </span>
        </div>
        {/* Index */}
        <div className="absolute top-3 right-3 bg-white/75 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-[10px] font-mono font-bold text-slate-400 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-5">
        <div
          className={`h-0.5 w-8 rounded-full ${p.bar} mb-3 group-hover:w-16 transition-all duration-500`}
        />
        <h3 className="font-body font-bold text-[#0A0A0F] text-[15px] leading-snug mb-1.5">
          {cat.title}
        </h3>
        <p className="text-[#6B6B8A] text-[12.5px] leading-relaxed mb-4">
          {cat.description}
        </p>

        {/* Sub-items */}
        <div
          className="rounded-xl px-4 py-3.5 mb-4 flex-1"
          style={{ background: "#F8F9FF", border: "1px solid #E2E8F7" }}
        >
          <p className="text-[9px] font-mono font-bold uppercase tracking-[0.13em] text-slate-400 mb-2.5">
            Includes
          </p>
          <ul className="space-y-1.5">
            {cat.subItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.itemDot}`}
                />
                <span className="text-[12px] text-[#3B3B5A] font-medium leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-5 flex-shrink-0">
        <div className="border-t border-[#F0F0EC] mb-4" />
        <a
          href={buildWALink(cat.title, cat.subItems)}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-white text-[13px] font-semibold ${p.btn} shadow-sm hover:shadow-md transition-all duration-300`}
        >
          <WAIcon size={14} />
          Get This Database
        </a>
      </div>
    </div>
  );
}

/* ── Filter pill ─────────────────────────────────────────────── */
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold font-mono uppercase tracking-wider transition-all duration-200 border whitespace-nowrap ${active
        ? "bg-[#0A0A0F] text-white border-[#0A0A0F] shadow-sm"
        : "bg-white text-slate-500 border-[#E4E4E0] hover:border-blue-300 hover:text-[#0A0A0F]"
        }`}
    >
      {label}
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function CategoriesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  const sectorCounts: Record<string, number> = {};
  ALL_LEAD_CATEGORIES.forEach((c) => {
    sectorCounts[c.sector] = (sectorCounts[c.sector] || 0) + 1;
  });
  const sectors = ["All", ...Object.keys(sectorCounts).sort()];

  const filtered =
    activeFilter === "All"
      ? ALL_LEAD_CATEGORIES
      : ALL_LEAD_CATEGORIES.filter((c) => c.sector === activeFilter);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) =>
          entries.forEach(
            (e) =>
              e.isIntersecting &&
              (e.target as HTMLElement).classList.add("visible"),
          ),
        { threshold: 0.06 },
      );
      document
        .querySelectorAll(".animate-on-scroll:not(.visible)")
        .forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 60);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg,#FFFFFF 0%,#F7F8FC 100px,#F7F8FC 100%)",
      }}
    >
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/92 backdrop-blur-lg border-b border-[#EAEAE6] shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Galaxy Connect Logo"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg object-cover shadow-sm"
            />
            <span className="text-lg text-[#0A0A0F] tracking-tight">
              Galaxy<span className="text-blue-600">Connect</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-[#0A0A0F] transition-colors flex items-center gap-1.5 group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />{" "}
              Back to Home
            </Link>
            <a
              href={`https://wa.me/916260712882?text=${encodeURIComponent("Hello! I'd like to enquire about your database categories.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0F] text-white text-sm font-medium hover:bg-blue-600 transition-all duration-300"
            >
              <WAIcon size={14} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[38vh] bg-[radial-gradient(circle,rgba(99,143,246,0.07)_0%,transparent_65%)] pointer-events-none" />
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DBEAFE] shadow-sm mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">
              All Categories
            </span>
          </div>
          <h1 className="britti-special text-5xl md:text-6xl text-[#0A0A0F] leading-[1.06] tracking-tight mb-5">
            Premium
            <br />
            <span className="italic britti-gradient">Lead Databases</span>
          </h1>
          <p className="text-[#6B6B8A] text-lg leading-relaxed max-w-xl">
            Verified, updated weekly, delivered as a clean Excel file to your
            WhatsApp within 2 minutes.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          {[
            { num: "30L+", label: "Verified records" },
            { num: "Weekly", label: "Update cycle" },
            { num: "~2 min", label: "Delivery time" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-[#EAEAE6] rounded-xl px-5 py-3 shadow-sm"
            >
              <div className="britti-special text-xl text-[#0A0A0F] leading-none mb-0.5">
                {s.num}
              </div>
              <div className="text-[10.5px] text-slate-400 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky filter */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAEAE6] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center gap-2.5 overflow-x-auto scrollbar-hide">
          {sectors.map((s) => (
            <FilterPill
              key={s}
              label={s}
              active={activeFilter === s}
              onClick={() => setActiveFilter(s)}
            />
          ))}
          <span className="ml-auto pl-4 shrink-0 text-[12px] text-slate-400 whitespace-nowrap">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-28">
            <div className="w-16 h-16 rounded-2xl bg-[#F0F0EC] flex items-center justify-center mx-auto mb-4">
              <SearchIcon size={24} strokeWidth={1.5} />{" "}
            </div>
            <p className="text-[#6B6B8A] text-base font-medium mb-3">
              No results for "{activeFilter}"
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Clear filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat, i) => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                index={ALL_LEAD_CATEGORIES.findIndex((c) => c.id === cat.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div
          className="relative rounded-2xl overflow-hidden border border-[#DBEAFE]"
          style={{
            background:
              "linear-gradient(135deg,#EEF2FF 0%,#F0F4FF 50%,#EDF9FF 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-45 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle,#C7D2FE 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/22 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-10 md:p-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DBEAFE] shadow-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
                  Custom Requests
                </span>
              </div>
              <h2 className="britti-special text-3xl md:text-4xl text-[#0A0A0F] mb-3">
                Don't see what you need?
              </h2>
              <p className="text-[#6B6B8A] text-base leading-relaxed max-w-lg">
                We source custom databases on request — any profession,
                industry, geography, or consumer segment. Tell us what you need.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href={`https://wa.me/916260712882?text=${encodeURIComponent("Hello! I need a custom database. Can you help me source it?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1fba59] transition-all duration-300 shadow-lg shadow-[#25D366]/20 whitespace-nowrap"
              >
                <WAIcon size={16} />
                Request Custom Data
              </a>
              <a
                href="mailto:support@galaxyconnect.in"
                className="flex items-center justify-center gap-2 text-[13px] text-slate-500 hover:text-[#0A0A0F] font-medium transition-colors"
              >
                <MailIcon size={14} /> support@galaxyconnect.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#EAEAE6] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-slate-400">
            © {new Date().getFullYear()} Galaxy Connect. All rights reserved.
          </span>
          <Link
            href="/"
            className="text-[12px] text-slate-400 hover:text-[#0A0A0F] transition-colors"
          >
            ← Back to homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}
