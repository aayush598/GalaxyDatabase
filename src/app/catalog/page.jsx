"use client";

import React, { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Search,
  SlidersHorizontal,
  Star,
  MapPin,
  Users,
  Calendar,
  X,
} from "lucide-react";
import { datasets, categories } from "@/data/datasets";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minQualityScore, setMinQualityScore] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique locations
  const locations = useMemo(() => {
    const locs = [...new Set(datasets.map((d) => d.location))];
    return locs.sort();
  }, []);

  // Filter and sort datasets
  const filteredDatasets = useMemo(() => {
    let filtered = datasets.filter((dataset) => {
      // Search query
      if (
        searchQuery &&
        !dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !dataset.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (selectedCategory !== "all" && dataset.category !== selectedCategory) {
        return false;
      }

      // Location filter
      if (selectedLocation !== "all" && dataset.location !== selectedLocation) {
        return false;
      }

      // Price range
      if (dataset.price < priceRange[0] || dataset.price > priceRange[1]) {
        return false;
      }

      // Quality score
      if (dataset.qualityScore < minQualityScore) {
        return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "quality":
          return b.qualityScore - a.qualityScore;
        case "popular":
          return b.totalReviews - a.totalReviews;
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedLocation,
    priceRange,
    minQualityScore,
    sortBy,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedLocation("all");
    setPriceRange([0, 500]);
    setMinQualityScore(0);
    setSortBy("featured");
  };

  const activeFiltersCount = [
    selectedCategory !== "all",
    selectedLocation !== "all",
    priceRange[0] !== 0 || priceRange[1] !== 500,
    minQualityScore !== 0,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
            Browse Lead Databases
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredDatasets.length} verified datasets available
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search datasets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
          >
            <option value="featured">Featured</option>
            <option value="popular">Most Popular</option>
            <option value="quality">Highest Quality</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <SlidersHorizontal size={20} className="mr-2" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-black dark:text-white">
                  Filters
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-black dark:text-white mb-3">
                  Category
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === "all"}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      All Categories
                    </span>
                  </label>
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={selectedCategory === cat.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {cat.icon} {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-black dark:text-white mb-3">
                  Location
                </h4>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#121212] text-black dark:text-white text-sm"
                >
                  <option value="all">All Locations</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-black dark:text-white mb-3">
                  Price Range
                </h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Quality Score */}
              <div className="mb-6">
                <h4 className="font-semibold text-black dark:text-white mb-3">
                  Min Quality Score
                </h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={minQualityScore}
                    onChange={(e) =>
                      setMinQualityScore(parseFloat(e.target.value))
                    }
                    className="w-full"
                  />
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {minQualityScore}/10
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dataset Grid */}
          <div className="flex-1">
            {filteredDatasets.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-gray-400 dark:text-gray-600 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  No datasets found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredDatasets.map((dataset) => (
                  <a
                    key={dataset.id}
                    href={`/dataset/${dataset.id}`}
                    className="bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 hover:border-black dark:hover:border-white transition-all duration-200 group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {dataset.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {dataset.description}
                            </p>
                          </div>
                          {dataset.featured && (
                            <span className="ml-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <Users size={16} className="mr-1" />
                            {dataset.leadCount.toLocaleString()} leads
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {dataset.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            Updated{" "}
                            {new Date(dataset.lastUpdated).toLocaleDateString()}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                              Email Verified
                            </div>
                            <div className="font-semibold text-green-600 dark:text-green-400">
                              {dataset.emailVerified}%
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                              Quality Score
                            </div>
                            <div className="font-semibold text-black dark:text-white">
                              {dataset.qualityScore}/10
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                              Bounce Rate
                            </div>
                            <div className="font-semibold text-black dark:text-white">
                              &lt;{dataset.bounceRate}%
                            </div>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                              Reviews
                            </div>
                            <div className="font-semibold text-black dark:text-white flex items-center">
                              <Star
                                size={14}
                                className="text-yellow-500 fill-yellow-500 mr-1"
                              />
                              {dataset.avgRating}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="lg:w-48 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4">
                        <div className="text-right">
                          <div className="text-3xl font-bold text-black dark:text-white">
                            ${dataset.price}
                          </div>
                          {dataset.originalPrice && (
                            <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                              ${dataset.originalPrice}
                            </div>
                          )}
                        </div>
                        <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap">
                          View Details
                        </button>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
