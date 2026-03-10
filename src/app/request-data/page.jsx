"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MessageSquare, Send, CheckCircle } from "lucide-react";

export default function RequestDataPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    leadType: "",
    targetLocation: "",
    leadCount: "",
    budget: "",
    description: "",
    urgency: "normal",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In real app, would send to backend
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#121212]">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle
              size={40}
              className="text-green-600 dark:text-green-400"
            />
          </div>
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            Request Submitted Successfully!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Thank you for your custom data request. Our team will review your
            requirements and get back to you within 48 hours with a quote and
            timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/catalog"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Browse Existing Datasets
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-white dark:bg-[#121212] text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-semibold hover:border-black dark:hover:border-white transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare size={32} className="text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
            Request Custom Dataset
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Can't find what you're looking for? Request a custom dataset
            tailored to your specific needs.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                placeholder="Acme Inc"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry *
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
              >
                <option value="">Select Industry</option>
                <option value="saas">SaaS</option>
                <option value="ecommerce">E-commerce</option>
                <option value="real-estate">Real Estate</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Type of Leads Required *
            </label>
            <input
              type="text"
              name="leadType"
              value={formData.leadType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
              placeholder="e.g., SaaS CTOs in North America, E-commerce store owners in UK"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Target Location
              </label>
              <input
                type="text"
                name="targetLocation"
                value={formData.targetLocation}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                placeholder="e.g., United States, Europe, Global"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Approximate Lead Count Needed
              </label>
              <input
                type="text"
                name="leadCount"
                value={formData.leadCount}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                placeholder="e.g., 1,000 - 5,000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
              >
                <option value="">Select Budget</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-plus">$10,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Urgency
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
              >
                <option value="normal">Normal (1-2 weeks)</option>
                <option value="urgent">Urgent (3-5 days)</option>
                <option value="rush">Rush (24-48 hours)</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Detailed Requirements *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
              placeholder="Please provide as much detail as possible about the dataset you need, including:&#10;- Specific criteria for leads&#10;- Required data fields&#10;- Any special requirements&#10;- Use case for the data"
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>What happens next?</strong>
              <br />
              Our data team will review your request and respond within 48 hours
              with a custom quote, timeline, and sample data preview.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <Send size={20} className="mr-2" />
            Submit Request
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
