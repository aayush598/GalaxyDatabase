"use client";

import React, { useState } from "react";
import {
  Bell,
  X,
  Check,
  AlertCircle,
  ShoppingCart,
  Package,
  TrendingUp,
  Gift,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "purchase",
    title: "Purchase Confirmed",
    message:
      'Your purchase of "SaaS Founder Email List" was successful. Download now!',
    time: "5 minutes ago",
    read: false,
    icon: ShoppingCart,
    color: "blue",
  },
  {
    id: 2,
    type: "update",
    title: "Dataset Updated",
    message:
      "Shopify Store Owners Database has been updated with 500 new verified leads.",
    time: "2 hours ago",
    read: false,
    icon: Package,
    color: "green",
  },
  {
    id: 3,
    type: "promotion",
    title: "Limited Time Offer!",
    message: "25% off all SaaS datasets this weekend. Use code SAAS25",
    time: "1 day ago",
    read: true,
    icon: Gift,
    color: "purple",
  },
  {
    id: 4,
    type: "alert",
    title: "Credit Balance Low",
    message:
      "You have only 1,000 credits remaining. Top up now to continue purchasing.",
    time: "2 days ago",
    read: true,
    icon: AlertCircle,
    color: "yellow",
  },
];

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifs, setNotifs] = useState(notifications);
  const unreadCount = notifs.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifs(notifs.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllAsRead = () => {
    setNotifs(notifs.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifs(notifs.filter((n) => n.id !== id));
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      yellow:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="relative">
      {/* Bell Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 lg:p-3 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
      >
        <Bell size={20} className="text-gray-700 dark:text-gray-300" />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-semibold">
              {unreadCount}
            </span>
          </div>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Panel */}
          <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl z-50 max-h-[600px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-black dark:text-white">
                Notifications
              </h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Mark all as read
                </button>
              )}
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto flex-1">
              {notifs.length === 0 ? (
                <div className="p-12 text-center">
                  <Bell
                    size={48}
                    className="text-gray-300 dark:text-gray-700 mx-auto mb-4"
                  />
                  <p className="text-gray-600 dark:text-gray-400">
                    No notifications
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-800">
                  {notifs.map((notif) => {
                    const IconComponent = notif.icon;
                    return (
                      <div
                        key={notif.id}
                        className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 ${
                          !notif.read ? "bg-blue-50 dark:bg-blue-900/10" : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getColorClasses(notif.color)}`}
                          >
                            <IconComponent size={20} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                              <h4 className="font-semibold text-black dark:text-white text-sm">
                                {notif.title}
                              </h4>
                              <button
                                onClick={() => deleteNotification(notif.id)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-2"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {notif.message}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500 dark:text-gray-500">
                                {notif.time}
                              </span>
                              {!notif.read && (
                                <button
                                  onClick={() => markAsRead(notif.id)}
                                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                                >
                                  <Check size={12} className="mr-1" />
                                  Mark as read
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-800">
              <a
                href="/notifications"
                className="block text-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View all notifications
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
