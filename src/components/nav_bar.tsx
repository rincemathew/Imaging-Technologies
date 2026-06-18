"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-center w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between w-full md:w-5/6 px-4 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
          />

          <div className="leading-tight">
            <div className="text-2xl md:text-3xl font-bold text-(--main-color)">
              imaging
            </div>

            <div className="text-sm md:text-base text-(--main-color)">
              TECHNOLOGY
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-(--main-color) transition">
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-(--main-color) transition"
          >
            Products
          </Link>

          <Link
            href="/services"
            className="hover:text-(--main-color) transition"
          >
            Services
          </Link>

          <Link
            href="/about-us"
            className="hover:text-(--main-color) transition"
          >
            About Us
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact-us"
            className="bg-(--main-color) text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md md:hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-4">

          <Link
            href="/"
            className="py-3 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/products"
            className="py-3 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/services"
            className="py-3 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/about-us"
            className="py-3 border-b border-gray-100"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            href="/contact-us"
            className="mt-4 bg-(--main-color) text-white text-center py-3 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
}