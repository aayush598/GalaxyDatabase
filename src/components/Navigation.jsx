"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Database } from "lucide-react";
import NotificationCenter from "./NotificationCenter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  return (
    <nav className="bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Database size={24} className="text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-black dark:text-white">
              LeadVault
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/catalog"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
            >
              Browse Leads
            </Link>
            <Link
              href="/catalog"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
            >
              Categories
            </Link>
            <Link
              href="/#pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/#how-it-works"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors duration-200"
            >
              How It Works
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="hidden lg:flex p-2 lg:p-3 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <Search size={20} className="text-gray-700 dark:text-gray-300" />
            </button>

            {/* Notifications - NEW */}
            <NotificationCenter />

            {/* Cart */}
            <Link
              href="/checkout"
              className="relative p-2 lg:p-3 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <ShoppingCart
                size={20}
                className="text-gray-700 dark:text-gray-300"
              />
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">
                    {cartCount}
                  </span>
                </div>
              )}
            </Link>

            {/* User Menu */}
            <Link
              href="/dashboard"
              className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <User size={18} className="text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Dashboard
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-900 dark:text-100" />
              ) : (
                <Menu size={24} className="text-gray-900 dark:text-100" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link
                href="/catalog"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
              >
                Browse Leads
              </Link>
              <Link
                href="/catalog"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
              >
                Categories
              </Link>
              <Link
                href="/#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/#how-it-works"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
              >
                How It Works
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
