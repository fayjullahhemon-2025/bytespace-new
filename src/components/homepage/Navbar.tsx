"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "@gravity-ui/icons";
import HeaderLogo from "@/assets/Header_Logo.png";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Creators", href: "/creators" },
    ];

    return (
        <header className="w-full bg-[#0047FF] text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src={HeaderLogo}
                                alt="ByteSpace"
                                priority
                                className="h-7 sm:h-8 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        <Link
                            href="/signin"
                            className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/join"
                            className="text-sm font-medium text-white hover:text-white/80 transition-colors"
                        >
                            Join Us
                        </Link>
                        <button
                            type="button"
                            aria-label="Cart"
                            className="text-white hover:text-white/80 transition-colors inline-flex items-center justify-center cursor-pointer"
                        >
                            <ShoppingBag width={20} height={20} className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            type="button"
                            aria-label="Cart"
                            className="text-white hover:text-white/80 transition-colors inline-flex items-center justify-center cursor-pointer"
                        >
                            <ShoppingBag width={20} height={20} className="w-5 h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
                            aria-label="Toggle navigation menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/15 bg-[#0047FF] px-6 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm font-medium text-white py-2 hover:text-white/80 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2 border-t border-white/15 flex flex-col gap-2">
                        <Link
                            href="/signin"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm font-medium text-white py-2 hover:text-white/80 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/join"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm font-medium text-white py-2 hover:text-white/80 transition-colors"
                        >
                            Join Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
