"use client";

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#121212] px-6">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-black dark:text-white tracking-widest">404</h1>
                <div className="bg-blue-600 dark:bg-blue-500 px-2 text-sm rounded rotate-12 absolute transform -translate-y-12 inline-block text-white">
                    Page Not Found
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-8 mb-12 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform duration-200 inline-block"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
