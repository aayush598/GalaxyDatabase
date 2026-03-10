"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, DollarSign, TrendingUp, Gift, Copy, Check } from "lucide-react";

export default function AffiliatePage() {
  const [copiedCode, setCopiedCode] = useState(false);
  const affiliateCode =
    "LEAD-AFF-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const affiliateLink = `https://leadvault.com?ref=${affiliateCode}`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const stats = {
    referrals: 23,
    earnings: 1847,
    commission: 25,
    tier: "Gold",
  };

  const recentReferrals = [
    { name: "John D.", date: "2026-03-08", status: "active", earned: 45 },
    { name: "Sarah M.", date: "2026-03-07", status: "active", earned: 60 },
    { name: "Mike T.", date: "2026-03-05", status: "pending", earned: 0 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users size={32} className="text-white" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-black dark:text-white mb-4">
            Earn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              25% Commission
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Refer customers to LeadVault and earn recurring commission on every
            purchase they make.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
            <Users size={24} className="mb-4" />
            <div className="text-3xl font-bold mb-1">{stats.referrals}</div>
            <div className="text-green-100 text-sm">Total Referrals</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <DollarSign size={24} className="mb-4" />
            <div className="text-3xl font-bold mb-1">${stats.earnings}</div>
            <div className="text-blue-100 text-sm">Total Earnings</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <TrendingUp size={24} className="mb-4" />
            <div className="text-3xl font-bold mb-1">{stats.commission}%</div>
            <div className="text-purple-100 text-sm">Commission Rate</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
            <Gift size={24} className="mb-4" />
            <div className="text-3xl font-bold mb-1">{stats.tier}</div>
            <div className="text-orange-100 text-sm">Affiliate Tier</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Affiliate Link */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                Your Affiliate Link
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Referral Code
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={affiliateCode}
                    readOnly
                    className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white font-mono"
                  />
                  <button
                    onClick={() => copyToClipboard(affiliateCode)}
                    className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center"
                  >
                    {copiedCode ? (
                      <Check size={18} className="mr-2" />
                    ) : (
                      <Copy size={18} className="mr-2" />
                    )}
                    {copiedCode ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Affiliate Link
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={affiliateLink}
                    readOnly
                    className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white font-mono text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(affiliateLink)}
                    className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center"
                  >
                    {copiedCode ? (
                      <Check size={18} className="mr-2" />
                    ) : (
                      <Copy size={18} className="mr-2" />
                    )}
                    {copiedCode ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  💡 <strong>Pro Tip:</strong> Share your link on social media,
                  blogs, or email newsletters to maximize your earnings!
                </p>
              </div>
            </div>

            {/* Recent Referrals */}
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 mt-8">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                Recent Referrals
              </h2>

              <div className="space-y-4">
                {recentReferrals.map((referral, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                  >
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">
                        {referral.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Joined {new Date(referral.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-black dark:text-white">
                        ${referral.earned}
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          referral.status === "active"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                            : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                        }`}
                      >
                        {referral.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                How It Works
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold mb-3">
                    1
                  </div>
                  <h3 className="font-semibold text-black dark:text-white mb-2">
                    Share Your Link
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Share your unique referral link with your audience through
                    social media, email, or your website.
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center font-bold mb-3">
                    2
                  </div>
                  <h3 className="font-semibold text-black dark:text-white mb-2">
                    They Sign Up
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    When someone clicks your link and makes a purchase, they
                    become your referral.
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center font-bold mb-3">
                    3
                  </div>
                  <h3 className="font-semibold text-black dark:text-white mb-2">
                    Earn Commission
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive 25% commission on every purchase your referrals
                    make, paid monthly.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                <p className="text-sm text-green-800 dark:text-green-300 font-semibold">
                  🎁 Lifetime Commission
                </p>
                <p className="text-xs text-green-700 dark:text-green-400 mt-1">
                  Earn recurring commission for as long as your referrals remain
                  customers!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Commission Tiers */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            Commission Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#1E1E1E] border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🥉</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Bronze
              </h3>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                20%
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                0-10 referrals
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] border-2 border-yellow-500 dark:border-yellow-400 rounded-2xl p-6 text-center transform scale-105 shadow-lg">
              <div className="text-4xl mb-3">🥇</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Gold
              </h3>
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">
                25%
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                11-50 referrals
              </p>
              <div className="mt-4 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-full">
                Current Tier
              </div>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Platinum
              </h3>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                30%
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                51+ referrals
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
