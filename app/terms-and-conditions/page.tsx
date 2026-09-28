import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL, siteAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Galaxy Connect lead database marketplace, website and services.",
  alternates: siteAlternates(`${SITE_URL}/terms-and-conditions`),
  openGraph: {
    title: "Terms & Conditions",
    description: "Terms and conditions governing the use of Galaxy Connect services.",
    type: "website",
    url: `${SITE_URL}/terms-and-conditions`,
  },
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] selection:bg-blue-100 selection:text-blue-900">
      {/* Simple Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Galaxy Connect Logo"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg text-[#0A0A0F] tracking-tight font-medium">
              Galaxy<span className="text-blue-600">Connect</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 hover:text-[#0A0A0F] transition-colors flex items-center gap-1.5 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAEAE6] shadow-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
            Legal Information
          </span>
        </div>
        <h1 className="britti-special text-4xl md:text-5xl text-[#0A0A0F] leading-[1.1] tracking-tight mb-4">
          Terms & Conditions
        </h1>
        <p className="text-[#6B6B8A] text-lg leading-relaxed">
          Welcome to Galaxy Connect. By accessing or using our website and
          services, you agree to the following terms and conditions.
        </p>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 pb-32">
        <div className="bg-white rounded-2xl border border-[#EAEAE6] shadow-sm p-8 md:p-12 max-w-none text-[#4A4A6A] space-y-6">
          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            1. SERVICES
          </h2>
          <p className="leading-relaxed">
            Galaxy Connect is a digital marketing and lead generation service
            provider. The company provides marketing leads and inquiry data
            across multiple industries through online marketing campaigns and
            partner networks.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            2. LEAD CATEGORIES
          </h2>
          <p className="leading-relaxed">
            Galaxy Connect provides marketing leads in multiple categories
            including but not limited to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Education</li>
            <li>Real Estate</li>
            <li>Loans & Finance</li>
            <li>Insurance</li>
            <li>Healthcare</li>
            <li>Automobile</li>
            <li>Jobs & Recruitment</li>
            <li>Business & Franchise</li>
            <li>E-commerce & Product</li>
            <li>And other marketing lead categories.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            3. LEAD GENERATION METHOD
          </h2>
          <p className="leading-relaxed">
            Leads are generated through digital marketing campaigns, landing
            pages, advertisements, partner networks, and user inquiries. Galaxy
            Connect does not sell unauthorized personal databases.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            4. DATA ACCURACY
          </h2>
          <p className="leading-relaxed">
            While the company aims to provide relevant and genuine leads, Galaxy
            Connect does not guarantee 100% accuracy of the information such as
            phone numbers, customer interest, or responses.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            5. USE OF LEADS
          </h2>
          <p className="leading-relaxed">
            Clients agree to use the provided leads only for legitimate
            marketing and business purposes and must comply with all applicable
            laws related to telemarketing and communication.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            6. NO GUARANTEE OF CONVERSION
          </h2>
          <p className="leading-relaxed">
            Galaxy Connect does not guarantee sales, approvals, conversions, or
            business results from the leads provided.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            7. LEAD VERIFICATION
          </h2>
          <p className="leading-relaxed">
            Clients must verify the provided leads within 24 hours of delivery.
            Any issue related to leads must be reported within this timeframe.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            8. COMPLAINT SUBMISSION
          </h2>
          <p className="leading-relaxed">
            All complaints must be submitted in the lead verification Excel
            format provided by the company with lead-wise response and remarks.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            9. SERVICE MODIFICATION
          </h2>
          <p className="leading-relaxed">
            Galaxy Connect reserves the right to modify or update services,
            pricing, categories, or policies at any time without prior notice.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            10. LIMITATION OF LIABILITY
          </h2>
          <p className="leading-relaxed">
            Galaxy Connect shall not be responsible for any business loss,
            financial loss, or opportunity loss arising from the use of the
            provided leads.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            11. JURISDICTION
          </h2>
          <p className="leading-relaxed">
            Any disputes related to the services of Galaxy Connect shall be
            subject to the jurisdiction of Indore, Madhya Pradesh, India.
          </p>
        </div>
      </main>
    </div>
  );
}
