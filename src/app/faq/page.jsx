"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "How accurate are your lead databases?",
        a: "Our lead databases maintain an average accuracy rate of 92%. Each dataset undergoes rigorous verification including email validation, phone number checks, and LinkedIn profile verification. We guarantee a bounce rate of less than 15% or your money back.",
      },
      {
        q: "How often are the datasets updated?",
        a: "Datasets are updated monthly or quarterly depending on the category. High-demand datasets like SaaS Founders and E-commerce stores are updated monthly, while specialized datasets are refreshed quarterly. You can see the last update date on each dataset page.",
      },
      {
        q: "Can I get a sample before purchasing?",
        a: "Yes! Every dataset includes a free preview of 5-20 sample leads. This allows you to verify the data quality and format before making a purchase. Email addresses and phone numbers are masked in the preview.",
      },
    ],
  },
  {
    category: "Purchasing & Payment",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Razorpay (for India), Payoneer, and UPI. All transactions are processed securely through encrypted payment gateways.",
      },
      {
        q: "Do you offer refunds?",
        a: "Yes, we offer a money-back guarantee. If the email bounce rate exceeds 15%, we will provide a full refund within 30 days of purchase. To request a refund, submit a refund request through your dashboard with supporting evidence.",
      },
      {
        q: "How does the credit system work?",
        a: "You can purchase credits in bulk at discounted rates. Each lead costs a certain number of credits depending on the dataset quality. Credits never expire and can be used across any dataset on our platform.",
      },
    ],
  },
  {
    category: "Data Usage & Compliance",
    questions: [
      {
        q: "Is the data GDPR compliant?",
        a: "Yes, all our data is collected in compliance with GDPR, CCPA, and other data protection regulations. We only provide business contact information that has been obtained through legal and ethical means. Each dataset includes proper opt-out mechanisms.",
      },
      {
        q: "Can I resell the leads?",
        a: "No, leads purchased from LeadVault are licensed for internal use only. Reselling or redistributing the data violates our terms of service. Each download is watermarked with your unique buyer ID for security purposes.",
      },
      {
        q: "What formats are available?",
        a: "All datasets are available in both CSV and Excel formats. For large datasets (10,000+ leads), files are delivered as compressed ZIP files. You can re-download your purchases anytime from your dashboard.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "What if I have issues downloading my dataset?",
        a: "Download links are active for 30 days and can be accessed unlimited times from your dashboard. If you experience any issues, contact our support team at support@leadvault.com, and we will assist you immediately.",
      },
      {
        q: "Can I request custom datasets?",
        a: "Yes! If you need a specific type of lead data not currently available, submit a custom data request through our platform. We will review your requirements and provide a quote within 48 hours.",
      },
      {
        q: "Do you offer team accounts?",
        a: "Yes, we offer team accounts for companies. Team accounts allow multiple users to access shared datasets and credits. Contact our sales team for pricing and setup.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (category, idx) => {
    const key = `${category}-${idx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredFAQs = faqData
    .map((section) => ({
      ...section,
      questions: section.questions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.a.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((section) => section.questions.length > 0);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} className="text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about our lead databases
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {filteredFAQs.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, idx) => {
                  const key = `${section.category}-${idx}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(section.category, idx)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-black dark:text-white pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-gray-600 dark:text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can't find the answer you're looking for? Please chat with our
            friendly team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@leadvault.com"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              Contact Support
            </a>
            <a
              href="/knowledge-base"
              className="px-8 py-3 bg-white dark:bg-[#121212] text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-semibold hover:border-black dark:hover:border-white transition-colors duration-200"
            >
              Browse Knowledge Base
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
