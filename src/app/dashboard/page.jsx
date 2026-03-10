"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Download,
  Package,
  CreditCard,
  Calendar,
  Star,
  FileText,
  TrendingUp,
  User,
  Mail,
} from "lucide-react";
import { userPurchases, datasets, userProfile } from "@/data/datasets";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("purchases");

  const purchasedDatasets = userPurchases.map((purchase) => ({
    ...purchase,
    dataset: datasets.find((d) => d.id === purchase.datasetId),
  }));

  const totalSpent = userPurchases.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your purchases and account
          </p>
        </div>

        {/* User Info Card */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 lg:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                {userProfile.name}
              </h2>
              <p className="text-blue-100 mb-1">{userProfile.email}</p>
              <p className="text-blue-100">{userProfile.company}</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-1">
                  {userProfile.credits.toLocaleString()}
                </div>
                <div className="text-sm text-blue-100">Credits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-1">
                  {userProfile.totalPurchases}
                </div>
                <div className="text-sm text-blue-100">Purchases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-1">
                  ${totalSpent}
                </div>
                <div className="text-sm text-blue-100">Spent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <Package size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-black dark:text-white mb-1">
              {userPurchases.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Datasets
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <Download
                size={24}
                className="text-green-600 dark:text-green-400"
              />
            </div>
            <div className="text-2xl font-bold text-black dark:text-white mb-1">
              {userPurchases.reduce((sum, p) => sum + p.downloadCount, 0)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Downloads
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <CreditCard
                size={24}
                className="text-purple-600 dark:text-purple-400"
              />
            </div>
            <div className="text-2xl font-bold text-black dark:text-white mb-1">
              ${totalSpent}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Spent
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <Calendar
                size={24}
                className="text-yellow-600 dark:text-yellow-400"
              />
            </div>
            <div className="text-2xl font-bold text-black dark:text-white mb-1">
              {new Date(userProfile.memberSince).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Member Since
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-800 mb-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("purchases")}
              className={`pb-4 font-semibold transition-colors duration-200 border-b-2 ${
                activeTab === "purchases"
                  ? "border-black dark:border-white text-black dark:text-white"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              My Purchases
            </button>
            <button
              onClick={() => setActiveTab("account")}
              className={`pb-4 font-semibold transition-colors duration-200 border-b-2 ${
                activeTab === "account"
                  ? "border-black dark:border-white text-black dark:text-white"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              Account Settings
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "purchases" && (
          <div className="space-y-4">
            {purchasedDatasets.length === 0 ? (
              <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-12 text-center">
                <Package
                  size={48}
                  className="text-gray-300 dark:text-gray-700 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  No purchases yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Browse our catalog to find high-quality lead databases
                </p>
                <a
                  href="/catalog"
                  className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                >
                  Browse Catalog
                </a>
              </div>
            ) : (
              purchasedDatasets.map((purchase) => (
                <div
                  key={purchase.id}
                  className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 lg:p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                            {purchase.dataset.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {purchase.dataset.description}
                          </p>
                        </div>
                        <span className="ml-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full whitespace-nowrap">
                          {purchase.status === "completed"
                            ? "Completed"
                            : "Pending"}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Purchase Date
                          </div>
                          <div className="font-semibold text-black dark:text-white">
                            {new Date(
                              purchase.purchaseDate,
                            ).toLocaleDateString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Amount
                          </div>
                          <div className="font-semibold text-black dark:text-white">
                            ${purchase.amount}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Lead Count
                          </div>
                          <div className="font-semibold text-black dark:text-white">
                            {purchase.dataset.leadCount.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                            Downloads
                          </div>
                          <div className="font-semibold text-black dark:text-white">
                            {purchase.downloadCount}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:w-48">
                      <button className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                        <Download size={18} className="mr-2" />
                        Download CSV
                      </button>
                      <button className="w-full bg-white dark:bg-[#121212] text-black dark:text-white px-6 py-3 rounded-full font-semibold border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors duration-200 flex items-center justify-center">
                        <FileText size={18} className="mr-2" />
                        View Invoice
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "account" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Profile Information */}
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                Profile Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={userProfile.name}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={userProfile.email}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={userProfile.company}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                  />
                </div>
                <button className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Credits & Billing */}
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                Credits & Billing
              </h3>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-6">
                <div className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  Available Credits
                </div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {userProfile.credits.toLocaleString()}
                </div>
                <button className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
                  Buy More Credits
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">
                    Payment Method
                  </span>
                  <span className="font-semibold text-black dark:text-white">
                    •••• 4242
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">
                    Billing Email
                  </span>
                  <span className="font-semibold text-black dark:text-white">
                    {userProfile.email}
                  </span>
                </div>
                <button className="w-full bg-white dark:bg-[#121212] text-black dark:text-white px-6 py-3 rounded-full font-semibold border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors duration-200">
                  Manage Billing
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
