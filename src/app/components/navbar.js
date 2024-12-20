"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-bold text-xl cursor-pointer">
            <Link href="/">SK Air Ducting</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>

            {/* Authentication Button */}
            {session ? (
              <button
                onClick={() => signOut()}
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn("github")}
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block text-white hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-yellow-400 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="block text-white hover:text-yellow-400 transition duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>

            {/* Authentication Button */}
            {session ? (
              <button
                onClick={() => signOut()}
                className="block w-full text-left text-white hover:text-yellow-400 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => signIn("github")}
                className="block w-full text-left text-white hover:text-yellow-400 transition duration-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
