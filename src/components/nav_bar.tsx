import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-center w-full border-b border-gray-200">
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
            <div className="text-3xl font-bold text-(--main-color)">imaging</div>
            <div className="text-base text-(--main-color)">TECHNOLOGY</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          {/* <Link href="/services">Services</Link> */}
          <Link href="/#">Services</Link>
          <Link href="/about-us">About Us</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact-us"
            className="bg-[#4169e1] text-white px-5 py-2 rounded-lg hover:bg-[#3154c7] transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
}