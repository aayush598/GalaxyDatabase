import Link from "next/link";
import Image from "next/image";

export default function RefundPolicy() {
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
          Refund & Replacement Policy
        </h1>
        <p className="text-[#6B6B8A] text-lg leading-relaxed">
          Please read our policies carefully regarding refunds and replacements
          for our lead generation services.
        </p>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 pb-32">
        <div className="bg-white rounded-2xl border border-[#EAEAE6] shadow-sm p-8 md:p-12 max-w-none text-[#4A4A6A] space-y-6">
          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            1. COMPLAINT TIME LIMIT
          </h2>
          <p className="leading-relaxed">
            Clients must report any issue with leads within 24 hours of
            receiving the data. Complaints after this period will not be
            considered.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            2. COMPLAINT FORMAT
          </h2>
          <p className="leading-relaxed">
            All complaints must be submitted in the Excel response sheet format
            provided by the company with lead-wise response status and remarks.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            3. VERIFICATION PROCESS
          </h2>
          <p className="leading-relaxed">
            Galaxy Connect will verify the submitted responses through internal
            verification methods before approving any replacement or refund
            request.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            4. REPLACEMENT POLICY
          </h2>
          <p className="leading-relaxed">
            If a lead is verified as invalid such as wrong number, duplicate
            entry, or irrelevant inquiry, the company will first provide
            replacement leads.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            5. REFUND ELIGIBILITY
          </h2>
          <p className="leading-relaxed">
            Refund will only be considered if the verified lead accuracy is
            below 30% and replacement leads cannot be provided.
            <br />
            <br />
            In such cases the client may receive up to 80% refund of the total
            payment.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            6. NON-REFUNDABLE CASES
          </h2>
          <p className="leading-relaxed">Refund will not be applicable if:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Leads are not verified within 24 hours</li>
            <li>Client fails to submit the required Excel response sheet</li>
            <li>Leads were not properly contacted or verified by the client</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            7. FINAL DECISION
          </h2>
          <p className="leading-relaxed">
            All verification results, replacements, and refunds are subject to
            the final decision of Galaxy Connect.
          </p>

          <h2 className="text-xl font-semibold text-[#0A0A0F] mt-8 mb-4">
            8. REFUND PROCESSING TIME
          </h2>
          <p className="leading-relaxed">
            Approved refunds, if applicable, may take 5 to 7 business days to
            process.
          </p>
        </div>
      </main>
    </div>
  );
}
