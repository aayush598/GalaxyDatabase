import Link from "next/link";
import React from "react";
import { Database, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1E1E1E] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Database size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold text-black dark:text-white">
                  LeadVault
                </span>
              </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Premium verified business lead databases for growing companies.
              Quality guaranteed.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  𝕏
                </span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  in
                </span>
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/catalog"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  Browse All Leads
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog?category=saas"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  SaaS Leads
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog?category=ecommerce"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  E-commerce Leads
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog?category=startups"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  Startup Founders
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  Custom Data Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  Data Quality
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors duration-200"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-black dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail
                  size={16}
                  className="text-gray-500 dark:text-gray-400 mt-0.5"
                />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  support@leadvault.com
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone
                  size={16}
                  className="text-gray-500 dark:text-gray-400 mt-0.5"
                />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin
                  size={16}
                  className="text-gray-500 dark:text-gray-400 mt-0.5"
                />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  San Francisco, CA
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-semibold rounded-full">
                ✓ GDPR Compliant
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © 2026 LeadVault. All rights reserved. | High-quality verified
            business leads.
          </p>
        </div>
      </div>
    </footer>
  );
}
