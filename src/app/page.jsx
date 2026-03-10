import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Database,
  Search,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { datasets, stats, testimonials } from "@/data/datasets";

export default function HomePage() {
  const featuredDatasets = datasets.filter(d => d.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-black dark:text-white tracking-tight mb-6">
              Premium B2B <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Lead Databases</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
              Verified, high-quality leads for your B2B outreach. Access thousands of decision-makers with 92% email accuracy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/catalog"
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl"
              >
                Browse Catalog
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 border border-gray-200 dark:border-gray-800 text-black dark:text-white rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black dark:text-white mb-2">{stats.totalLeads}</div>
              <div className="text-gray-600 dark:text-gray-400">Verified Leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black dark:text-white mb-2">{stats.emailAccuracy}</div>
              <div className="text-gray-600 dark:text-gray-400">Email Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black dark:text-white mb-2">{stats.avgResponseRate}</div>
              <div className="text-gray-600 dark:text-gray-400">Avg. Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black dark:text-white mb-2">{stats.happyCustomers}</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Datasets */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">Featured Databases</h2>
              <p className="text-gray-600 dark:text-gray-400">Our highest performing lead lists this month</p>
            </div>
            <a href="/catalog" className="hidden sm:flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline">
              View all <ArrowRight size={20} className="ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDatasets.map(dataset => (
              <a
                key={dataset.id}
                href={`/dataset/${dataset.id}`}
                className="group bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
              >
                <div className="mb-6 flex justify-between items-start">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    {dataset.category}
                  </span>
                  <div className="text-2xl font-bold text-black dark:text-white">${dataset.price}</div>
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {dataset.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                  {dataset.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" /> {dataset.leadCount.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck size={16} className="mr-1 text-green-500" /> {dataset.emailVerified}%
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">Why LeadVault?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We don't just provide data; we provide opportunities for your business to grow.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">92% Accuracy</h3>
            <p className="text-gray-600 dark:text-gray-400">Every email is verified through our 7-step validation process before listing.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Instant Access</h3>
            <p className="text-gray-600 dark:text-gray-400">Download your CSV immediately after purchase. No waiting for manual approvals.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">Scalable B2B Data</h3>
            <p className="text-gray-600 dark:text-gray-400">From startups to enterprise, our databases cover industries of all sizes globally.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  {/* Avatar placeholder or real image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-100 dark:border-gray-800">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-black dark:text-white leading-tight">{t.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-6">"{t.comment}"</p>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <CheckCircle2 key={i} size={16} className="text-green-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
