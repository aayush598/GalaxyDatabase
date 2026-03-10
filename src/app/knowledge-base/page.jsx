"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Book,
  Search,
  ArrowRight,
  FileText,
  Video,
  Code,
  Settings,
} from "lucide-react";

const articles = [
  {
    category: "Getting Started",
    icon: Book,
    color: "blue",
    items: [
      { title: "How to Create an Account", time: "3 min read" },
      { title: "Understanding Lead Quality Scores", time: "5 min read" },
      { title: "Your First Dataset Purchase", time: "4 min read" },
      { title: "Downloading and Using Lead Data", time: "6 min read" },
    ],
  },
  {
    category: "Best Practices",
    icon: FileText,
    color: "green",
    items: [
      { title: "Email Outreach Best Practices", time: "10 min read" },
      { title: "How to Verify Lead Quality", time: "7 min read" },
      { title: "Maximizing ROI from Lead Purchases", time: "8 min read" },
      { title: "Cold Email Templates That Work", time: "12 min read" },
    ],
  },
  {
    category: "Technical Guides",
    icon: Code,
    color: "purple",
    items: [
      { title: "API Documentation", time: "15 min read" },
      { title: "Integrating with Your CRM", time: "20 min read" },
      { title: "Bulk Data Import Guide", time: "10 min read" },
      { title: "Data Format Specifications", time: "8 min read" },
    ],
  },
  {
    category: "Account Management",
    icon: Settings,
    color: "orange",
    items: [
      { title: "Managing Your Team Account", time: "5 min read" },
      { title: "Credits and Billing", time: "4 min read" },
      { title: "Download History and Re-downloads", time: "3 min read" },
      { title: "Requesting Custom Data", time: "6 min read" },
    ],
  },
];

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      orange:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Book size={32} className="text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
            Knowledge Base
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn how to get the most out of LeadVault
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for articles, guides, and tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {articles.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${getColorClasses(category.color)}`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.items.map((article, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-black dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {article.time}
                        </p>
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4"
                      />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Tutorials */}
        <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <Video size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Video Tutorials</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Prefer watching videos? Check out our comprehensive video library
            covering everything from basic setup to advanced integrations.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200">
            Watch Tutorials
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
