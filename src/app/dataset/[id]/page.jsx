"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ShoppingCart,
  Download,
  Shield,
  Star,
  CheckCircle,
  MapPin,
  Users,
  Calendar,
  FileText,
  Award,
} from "lucide-react";
import { datasets } from "@/data/datasets";

export default function DatasetDetailPage({ params }) {
  const dataset = datasets.find((d) => d.id === params.id);
  const [activeTab, setActiveTab] = useState("preview");

  if (!dataset) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#121212]">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-4">
            Dataset Not Found
          </h1>
          <a
            href="/catalog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to Catalog
          </a>
        </div>
      </div>
    );
  }

  const relatedDatasets = datasets
    .filter((d) => d.category === dataset.category && d.id !== dataset.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          <a href="/" className="hover:text-black dark:hover:text-white">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/catalog" className="hover:text-black dark:hover:text-white">
            Catalog
          </a>
          <span className="mx-2">/</span>
          <span className="text-black dark:text-white">{dataset.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              {dataset.featured && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-4">
                  ⭐ Featured Dataset
                </span>
              )}
              <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
                {dataset.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {dataset.description}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Users size={18} className="mr-2" />
                  {dataset.leadCount.toLocaleString()} leads
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  {dataset.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  Updated {new Date(dataset.lastUpdated).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Star
                    size={18}
                    className="text-yellow-500 fill-yellow-500 mr-2"
                  />
                  {dataset.avgRating} ({dataset.totalReviews} reviews)
                </div>
              </div>
            </div>

            {/* Quality Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4">
                <div className="text-sm text-green-700 dark:text-green-400 mb-1">
                  Email Verified
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {dataset.emailVerified}%
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4">
                <div className="text-sm text-blue-700 dark:text-blue-400 mb-1">
                  Quality Score
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {dataset.qualityScore}/10
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-4">
                <div className="text-sm text-purple-700 dark:text-purple-400 mb-1">
                  Bounce Rate
                </div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  &lt;{dataset.bounceRate}%
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-4">
                <div className="text-sm text-yellow-700 dark:text-yellow-400 mb-1">
                  Avg Rating
                </div>
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  {dataset.avgRating}/5
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-800 mb-6">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`pb-4 font-semibold transition-colors duration-200 border-b-2 ${
                    activeTab === "preview"
                      ? "border-black dark:border-white text-black dark:text-white"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  Preview Data
                </button>
                <button
                  onClick={() => setActiveTab("fields")}
                  className={`pb-4 font-semibold transition-colors duration-200 border-b-2 ${
                    activeTab === "fields"
                      ? "border-black dark:border-white text-black dark:text-white"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  Data Fields
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-4 font-semibold transition-colors duration-200 border-b-2 ${
                    activeTab === "reviews"
                      ? "border-black dark:border-white text-black dark:text-white"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  Reviews ({dataset.totalReviews})
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "preview" && (
              <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
                <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-black dark:text-white mb-2">
                    Sample Data Preview
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Preview the first 5 leads. Email and phone fields are hidden
                    until purchase.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                      <tr>
                        {Object.keys(dataset.sampleData[0]).map((key) => (
                          <th
                            key={key}
                            className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                          >
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {dataset.sampleData.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        >
                          {Object.values(row).map((value, i) => (
                            <td
                              key={i}
                              className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100"
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-t border-yellow-200 dark:border-yellow-800 flex items-start">
                  <Shield
                    size={20}
                    className="text-yellow-600 dark:text-yellow-400 mr-3 mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm text-yellow-800 dark:text-yellow-400">
                    <strong>Note:</strong> Email addresses and phone numbers are
                    masked in preview. Full access provided after purchase.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "fields" && (
              <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
                <h3 className="font-semibold text-black dark:text-white mb-4">
                  Included Data Fields
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {dataset.fields.map((field, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle
                        size={18}
                        className="text-green-600 dark:text-green-400 mr-2 flex-shrink-0"
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {field}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {dataset.reviews.length === 0 ? (
                  <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-12 text-center">
                    <Star
                      size={48}
                      className="text-gray-300 dark:text-gray-700 mx-auto mb-4"
                    />
                    <p className="text-gray-600 dark:text-gray-400">
                      No reviews yet. Be the first to review!
                    </p>
                  </div>
                ) : (
                  dataset.reviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="text-yellow-500 fill-yellow-500"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {review.comment}
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-2">
                          {review.user[0]}
                        </div>
                        <span className="font-semibold text-black dark:text-white">
                          {review.user}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Purchase Card */}
              <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-black dark:text-white mb-2">
                    ${dataset.price}
                  </div>
                  {dataset.originalPrice && (
                    <div className="flex items-center">
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through mr-2">
                        ${dataset.originalPrice}
                      </span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                        Save ${dataset.originalPrice - dataset.price}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href="/checkout"
                    className="block w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-full font-semibold text-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                  >
                    Buy Now
                  </a>
                  <button className="w-full bg-white dark:bg-[#121212] text-black dark:text-white px-6 py-4 rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors duration-200 flex items-center justify-center">
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Download size={16} className="mr-2 flex-shrink-0" />
                    Instant download after purchase
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <FileText size={16} className="mr-2 flex-shrink-0" />
                    CSV & Excel formats included
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Shield size={16} className="mr-2 flex-shrink-0" />
                    Money-back guarantee
                  </div>
                </div>
              </div>

              {/* Guarantee Badge */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6">
                <div className="flex items-start">
                  <Award
                    size={24}
                    className="text-green-600 dark:text-green-400 mr-3 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      Quality Guarantee
                    </h4>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      If bounce rate exceeds 15%, we'll provide a full refund.
                      No questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Datasets */}
        {relatedDatasets.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
              Related Datasets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDatasets.map((related) => (
                <a
                  key={related.id}
                  href={`/dataset/${related.id}`}
                  className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-black dark:hover:border-white transition-all duration-200"
                >
                  <h3 className="font-bold text-black dark:text-white mb-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {related.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-black dark:text-white">
                      ${related.price}
                    </span>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <Star
                        size={14}
                        className="text-yellow-500 fill-yellow-500 mr-1"
                      />
                      {related.avgRating}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
