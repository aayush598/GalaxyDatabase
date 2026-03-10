"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  LayoutGrid,
  Database,
  ShoppingBag,
  Users,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Download,
  DollarSign,
  Package,
  Calendar,
} from "lucide-react";
import { datasets, userPurchases } from "@/data/datasets";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview");

  // Calculate stats
  const totalDatasets = datasets.length;
  const totalSales = userPurchases.reduce((sum, p) => sum + p.amount, 0);
  const totalOrders = userPurchases.length;
  const avgOrderValue = totalSales / totalOrders;

  const recentOrders = userPurchases.slice(0, 5).map((purchase) => ({
    ...purchase,
    dataset: datasets.find((d) => d.id === purchase.datasetId),
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-[#1E1E1E] border-r border-gray-200 dark:border-gray-800 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <h1 className="text-xl font-bold text-black dark:text-white">
            Admin Panel
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            LeadVault
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
              activeTab === "overview"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <LayoutGrid size={20} className="mr-3" />
            Overview
          </button>

          <button
            onClick={() => setActiveTab("datasets")}
            className={`w-full flex items-center px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
              activeTab === "datasets"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <Database size={20} className="mr-3" />
            Datasets
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`w-full flex items-center px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
              activeTab === "orders"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <ShoppingBag size={20} className="mr-3" />
            Orders
          </button>

          <button
            onClick={() => setActiveTab("users")}
            className={`w-full flex items-center px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
              activeTab === "users"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <Users size={20} className="mr-3" />
            Users
          </button>

          <button
            onClick={() => setActiveTab("analytics")}
            className={`w-full flex items-center px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
              activeTab === "analytics"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <TrendingUp size={20} className="mr-3" />
            Analytics
          </button>
        </nav>

        {/* Back to Site */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <a
            href="/"
            className="block w-full px-4 py-3 text-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
          >
            ← Back to Site
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-8 py-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                Dashboard Overview
              </h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <DollarSign size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    ${totalSales.toFixed(0)}
                  </div>
                  <div className="text-blue-100 text-sm">Total Revenue</div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <ShoppingBag size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-1">{totalOrders}</div>
                  <div className="text-purple-100 text-sm">Total Orders</div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Database size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-1">{totalDatasets}</div>
                  <div className="text-green-100 text-sm">Active Datasets</div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    ${avgOrderValue.toFixed(0)}
                  </div>
                  <div className="text-orange-100 text-sm">Avg Order Value</div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                  Recent Orders
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-200 dark:border-gray-700">
                      <tr>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Order ID
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Dataset
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Date
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Amount
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr
                          key={order.id}
                          className="border-b border-gray-200 dark:border-gray-700 last:border-0"
                        >
                          <td className="py-4 px-4 text-sm text-gray-900 dark:text-gray-100">
                            #{order.id}
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-900 dark:text-gray-100">
                            {order.dataset.title}
                          </td>
                          <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                            {new Date(order.purchaseDate).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
                            ${order.amount}
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                              Completed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Datasets Tab */}
          {activeTab === "datasets" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-black dark:text-white">
                  Manage Datasets
                </h2>
                <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 flex items-center">
                  <Plus size={20} className="mr-2" />
                  Add Dataset
                </button>
              </div>

              <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <tr>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Title
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Category
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Leads
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Price
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Quality
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {datasets.map((dataset) => (
                        <tr
                          key={dataset.id}
                          className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 last:border-0"
                        >
                          <td className="py-4 px-6">
                            <div className="font-semibold text-black dark:text-white">
                              {dataset.title}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                              {dataset.description}
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100 capitalize">
                            {dataset.category}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                            {dataset.leadCount.toLocaleString()}
                          </td>
                          <td className="py-4 px-6 text-sm font-semibold text-gray-900 dark:text-gray-100">
                            ${dataset.price}
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded">
                              {dataset.qualityScore}/10
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                <Edit
                                  size={16}
                                  className="text-gray-600 dark:text-gray-400"
                                />
                              </button>
                              <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                <Trash2
                                  size={16}
                                  className="text-red-600 dark:text-red-400"
                                />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                All Orders
              </h2>

              <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                      <tr>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Order ID
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Dataset
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Purchase Date
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Amount
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Downloads
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Status
                        </th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userPurchases.map((order) => {
                        const dataset = datasets.find(
                          (d) => d.id === order.datasetId,
                        );
                        return (
                          <tr
                            key={order.id}
                            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 last:border-0"
                          >
                            <td className="py-4 px-6 text-sm font-semibold text-gray-900 dark:text-gray-100">
                              #{order.id}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                              {dataset?.title}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">
                              {new Date(
                                order.purchaseDate,
                              ).toLocaleDateString()}
                            </td>
                            <td className="py-4 px-6 text-sm font-semibold text-gray-900 dark:text-gray-100">
                              ${order.amount}
                            </td>
                            <td className="py-4 px-6 text-sm text-gray-900 dark:text-gray-100">
                              {order.downloadCount}
                            </td>
                            <td className="py-4 px-6">
                              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                                {order.status}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                View Details
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                User Management
              </h2>

              <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-12 text-center">
                <Users
                  size={48}
                  className="text-gray-300 dark:text-gray-700 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  User Management
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  User management features coming soon
                </p>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                Analytics & Reports
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                    Top Selling Datasets
                  </h3>
                  <div className="space-y-3">
                    {datasets.slice(0, 5).map((dataset, idx) => (
                      <div
                        key={dataset.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <span className="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700 dark:text-gray-300 mr-3">
                            {idx + 1}
                          </span>
                          <span className="text-sm text-gray-900 dark:text-gray-100">
                            {dataset.title}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                          ${dataset.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-black dark:text-white mb-4">
                    Revenue by Category
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        SaaS
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        $1,245
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        E-commerce
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        $890
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Startups
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        $765
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Finance
                      </span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        $543
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
