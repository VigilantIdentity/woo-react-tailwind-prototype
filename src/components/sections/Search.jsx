import React, { useState, useRef, useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function SearchDropdown() {
  const { isSearchOpen, setIsSearchOpen } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  // ✅Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const popularExtensions = [
    { name: "WooPayments", description: "Accept payments seamlessly" },
    {
      name: "Google for WooCommerce",
      description: "Integrate with Google services",
    },
    { name: "Facebook", description: "Connect with Facebook shops" },
    { name: "Stripe", description: "Process payments via Stripe" },
  ];

  const popularContent = [
    {
      title: "WooCommerce pricing: How much does it cost to run a store?",
      category: "Guide",
    },
    {
      title: "Control your ecommerce costs with flexible hosting",
      category: "Article",
    },
    {
      title: "Detailed guide: Choosing the right WooCommerce hosting",
      category: "Tutorial",
    },
    {
      title: "How to customize a WooCommerce product page",
      category: "Tutorial",
    },
  ];

  const filteredExtensions = popularExtensions.filter(
    (ext) =>
      ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredContent = popularContent.filter(
    (content) =>
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    isSearchOpen && (
      <div
        className="relative border-3 w-full 2xl:w-150 mx-auto"
        ref={dropdownRef}
      >
        {/* ✅Search Input */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="pl-3 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Find extensions, themes, guides, and more"
            className="py-3 px-2 w-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
          />
        </div>

        {/* ✅Dropdown */}

        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-96 overflow-y-auto">
          {/* ✅Most Popular Extensions Section */}
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-3">
              MOST POPULAR EXTENSIONS
            </h3>
            <div className="space-y-3">
              {filteredExtensions.map((extension, index) => (
                <div
                  key={index}
                  className="flex items-start p-2 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {extension.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {extension.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅Most Popular Content Section */}
          <div className="p-4">
            <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-3">
              MOST POPULAR CONTENT
            </h3>
            <div className="space-y-3">
              {filteredContent.map((content, index) => (
                <div
                  key={index}
                  className="p-2 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <h4 className="font-medium text-gray-900">{content.title}</h4>
                  <div className="flex items-center mt-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {content.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅View All Results */}
          <div className="p-3 bg-gray-50 border-t border-gray-200">
            <button className="w-full text-center text-blue-600 font-medium hover:text-blue-800">
              View all results for "{searchQuery}"
            </button>
          </div>
        </div>
      </div>
    )
  );
}
