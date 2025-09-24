"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ErrorReportPopup from "./ErrorReportPopup";
import data from "@/public/ok.json";

// Modal Component
import NameModal from "../app/impojfgbfb/allah-names/Modal";
import { Search } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedName, setSelectedName] = useState(null); // For modal

  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const navLinks = data.navLinks;

  // -----------------------------
  // Scroll effect for navbar
  // -----------------------------
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------------
  // Filter search results
  // -----------------------------
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();

    const filteredFeelings = data.feeling
      .filter((item) => item.title?.toLowerCase().includes(query))
      .map((item) => ({
        ...item,
        type: "feeling",
        path: `/feelings/${item.id || item.slug || ""}`
      }));

    const filteredTopics = data.topics
      .filter((item) => item.title?.toLowerCase().includes(query))
      .map((item) => ({
        ...item,
        type: "topic",
        path: `/topics/${item.id || item.slug || ""}`
      }));

    const filteredNames = data.names
      .filter(
        (item) =>
          item.name?.toLowerCase().includes(query) ||
          item.transliteration?.toLowerCase().includes(query) ||
          item.bn?.toLowerCase().includes(query)
      )
      .map((item) => ({
        ...item,
        type: "names",
        path: `/allah-names/${item.number}`
      }));

    setResults([...filteredFeelings, ...filteredTopics, ...filteredNames]);
  }, [searchQuery]);

  // -----------------------------
  // Close dropdown/menu when clicking outside
  // -----------------------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !event.target.closest(".search-result-item")
      ) {
        setResults([]);
      }

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle menu"]')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // -----------------------------
  // Disable body scroll when menu open
  // -----------------------------
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  // Handle search result click
 const handleResultClick = (item) => {
  if (item.type === "names") {
    setSelectedName(item);
  } else {
    requestAnimationFrame(() => {
      setResults([]);
      setSearchQuery("");
    });
  }
};


  // -----------------------------
  // Navbar style classes
  // -----------------------------
  const navbarClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "backdrop-blur-sm shadow-md py-2 bg-black/10"
      : "backdrop-blur-sm shadow-md py-2 "
  }`;

  const linkClasses = (linkPath) =>
    `relative flex items-center py-1 px-2 font-bold text-sm xl:text-base transition-colors
    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-green-400 after:bottom-0 after:left-0 after:transition-all after:duration-300
    hover:after:w-full ${
      pathname === linkPath ? "after:w-full text-green-400" : "text-gray-900 hover:text-green-400"
    }`;

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <>
      <nav className={navbarClasses} ref={menuRef}>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src="https://res.cloudinary.com/dub1bqk4s/image/upload/v1757270117/Picsart_25-09-08_00-35-03-585_usqbvs.png"
                alt="Islamic Bhai Logo"
                className="w-48 h-20 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">

              {/* Links */}
              <div className="flex items-center space-x-3 xl:space-x-5">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className={linkClasses(link.path)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Search */}
              <div className="relative ml-2" ref={searchRef}>
                <input
                  type="text"
                  placeholder="খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm w-40 xl:w-52 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />

                {/* Search Results Dropdown */}
                {results.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-64 xl:w-72 bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50">
                    {results.map((item, idx) => (
                      item.type === "names" ? (
                        // For names, use a button to trigger modal
                        <button
                          key={idx}
                          className="search-result-item block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0 w-full text-left"
                          onClick={() => handleResultClick(item)}
                        >
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-gray-500 mt-1 capitalize">
                            {item.type}
                          </div>
                        </button>
                      ) : (
                        // For other types, use Link for navigation
                        <Link
                          key={idx}
                          href={item.path}
                          className="search-result-item block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors border-b border-gray-100 last:border-b-0"
                          onClick={() => handleResultClick(item)}
                        >
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-gray-500 mt-1 capitalize">
                            {item.type}
                          </div>
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* Error Report */}
              <button
                onClick={() => setShowErrorPopup(true)}
                className="bg-red-500 hover:bg-red-500 text-white px-4 py-2 rounded-full flex items-center transition-colors shadow-md hover:shadow-lg"
              >
                <AlertTriangle className="w-4 h-4 mr-1" />
                ভুল রিপোর্ট
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => {
                  const input = document.getElementById("mobile-search");
                  input?.focus();
                }}
                aria-label="Search"
                className="p-2 text-gray-700 hover:text-green-500 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-gray-700 hover:text-green-500 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-6 bg-white border-t border-gray-200 shadow-inner space-y-4">

            {/* Mobile Search */}
            <div className="relative" ref={searchRef}>
              <input
                id="mobile-search"
                type="text"
                placeholder="খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-full pl-4 pr-10 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />

              {results.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                  {results.map((item, idx) => (
                    item.type === "names" ? (
                      // For names, use a button to trigger modal
                      <button
                        key={idx}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors border-b border-gray-100 w-full text-left"
                        onClick={() => {
                          handleResultClick(item);
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-1 capitalize">
                          {item.type}
                        </div>
                      </button>
                    ) : (
                      // For other types, use Link for navigation
                      <Link
                        key={idx}
                        href={item.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors border-b border-gray-100"
                        onClick={() => {
                          handleResultClick(item);
                          setIsMenuOpen(false);
                        }}
                      >
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-500 mt-1 capitalize">
                          {item.type}
                        </div>
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`flex items-center py-2.5 px-4 rounded-md transition-colors font-medium ${
                    pathname === link.path
                      ? "text-green-500 bg-green-50"
                      : "text-gray-800 hover:text-green-500 hover:bg-green-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Error Button */}
            <button
              onClick={() => {
                setShowErrorPopup(true);
                setIsMenuOpen(false);
              }}
              className="w-full bg-amber-500 hover:bg-amber-500 text-white px-4 py-2.5 rounded-full flex items-center justify-center shadow-md transition-colors"
            >
              <AlertTriangle className="w-4 h-4 mr-1" />
              ভুল ত্রুটি রিপোর্ট
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Error Report Popup */}
      <ErrorReportPopup isOpen={showErrorPopup} onClose={() => setShowErrorPopup(false)} />
      
      {/* Name Modal Popup */}
      {selectedName && (
        <NameModal 
          selected={selectedName} 
          onClose={() => setSelectedName(null)} 
        />
      )}
    </>
  );
}