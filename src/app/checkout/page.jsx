"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ShoppingCart,
  CreditCard,
  Lock,
  CheckCircle,
  Trash2,
  Shield,
} from "lucide-react";
import { datasets } from "@/data/datasets";

export default function CheckoutPage() {
  // Sample cart items - in real app this would come from state management
  const [cartItems] = useState([
    { id: 1, datasetId: "1", quantity: 1 },
    { id: 2, datasetId: "2", quantity: 1 },
  ]);

  const cartDatasets = cartItems.map((item) => ({
    ...item,
    dataset: datasets.find((d) => d.id === item.datasetId),
  }));

  const subtotal = cartDatasets.reduce(
    (sum, item) => sum + item.dataset.price,
    0,
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
            Checkout
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete your purchase securely
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-black dark:text-white flex items-center">
                  <ShoppingCart size={24} className="mr-2" />
                  Cart ({cartItems.length} items)
                </h2>
              </div>

              <div className="space-y-4">
                {cartDatasets.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
                  >
                    <div className="flex-1">
                      <h3 className="font-bold text-black dark:text-white mb-1">
                        {item.dataset.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {item.dataset.leadCount.toLocaleString()} leads •{" "}
                        {item.dataset.emailVerified}% verified
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                          Quality Score: {item.dataset.qualityScore}/10
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-black dark:text-white mb-2">
                        ${item.dataset.price}
                      </div>
                      <button className="text-sm text-red-600 dark:text-red-400 hover:underline flex items-center">
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
              <h2 className="text-xl font-bold text-black dark:text-white mb-6">
                Payment Method
              </h2>

              <div className="space-y-4 mb-6">
                <label className="flex items-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard
                    size={20}
                    className="mr-2 text-gray-600 dark:text-gray-400"
                  />
                  <span className="font-medium text-black dark:text-white">
                    Credit / Debit Card
                  </span>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span className="font-medium text-black dark:text-white">
                    PayPal
                  </span>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Billing Information */}
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
              <h2 className="text-xl font-bold text-black dark:text-white mb-6">
                Billing Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Country
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
              <h2 className="text-xl font-bold text-black dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    Subtotal
                  </span>
                  <span className="font-semibold text-black dark:text-white">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">
                    Tax (10%)
                  </span>
                  <span className="font-semibold text-black dark:text-white">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-black dark:text-white">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-black dark:text-white">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center mb-4">
                <Lock size={20} className="mr-2" />
                Complete Purchase
              </button>

              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Shield
                    size={16}
                    className="mr-2 flex-shrink-0 text-green-600 dark:text-green-400"
                  />
                  Secure payment processing
                </div>
                <div className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="mr-2 flex-shrink-0 text-green-600 dark:text-green-400"
                  />
                  Instant download after purchase
                </div>
                <div className="flex items-center">
                  <CheckCircle
                    size={16}
                    className="mr-2 flex-shrink-0 text-green-600 dark:text-green-400"
                  />
                  Money-back guarantee
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  By completing this purchase, you agree to our Terms of Service
                  and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
