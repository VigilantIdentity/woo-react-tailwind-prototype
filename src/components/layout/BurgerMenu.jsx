import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ArrowLeftIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function MobileMenu() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
  } = useAuth();
  // ✅ Lock/unlock body scroll when drawer is toggled
  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      //  document.body.classList.add("overflow-hidden");
      document.body.style.overflow = "hidden";
    } else {
      //document.body.classList.remove("overflow-hidden");
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen, isSearchOpen]);

  // ✅ Auto-close drawer when screen size ≥ md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //✅ contents to be shown in the search dropdown, in real app there would be an api call to db for rendering recent and popular list dropdown
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
    <div>
      {/* ✅ Toggle Button */}
      <div className="container mx-auto flex md:hidden justify-between items-center p-2">
        {/* ✅Logo */}
        <NavLink to="/" className="">
          <img
            src="src/components/assets/images/woo-logo.png"
            className="h-4 w-auto"
            alt="logo"
          />
        </NavLink>
        {/* ✅ Burger icon */}
        <div className="flex items-center space-x-4">
          <button className=" p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Bars3Icon className="h-6 w-6 text-gray-700" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/*✅ Overlay */}
      {(isMenuOpen || isSearchOpen) && (
        <div
          className="fixed md:hidden inset-0 bg-black/40 z-40 "
          onClick={() => {
            setIsMenuOpen(false);
            setIsSearchOpen(false);
          }}
        />
      )}

      {/* ✅ Drawer Menu from right*/}
      <div
        className={`fixed flex flex-col md:hidden top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 z-50
          ${
            isMenuOpen && !isSearchOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/*✅ Menu Header */}
        <div className="flex justify-between items-center p-2 px-2 bg-gray-100">
          {/* ✅ Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded hover:bg-gray-200"
          >
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
          {/* ✅ Search Icon */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded hover:bg-gray-200"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/*✅ Scrollable Menu for items from the header and navbar*/}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {[
            "Sell",
            "Extensions",
            "Resources",
            "Enterprise ecommerce",
            "Develop on Woo",
            "Hire an expert",
            "Get support",
            "$ USD",
            "English",
          ].map((item, i) => (
            <a key={i} href="#" className="block text-gray-700">
              {item}
            </a>
          ))}
        </div>

        {/* ✅ Lock login button from being expanded below the screen height i.e., always stick to the right bottom of the screen */}
        <div className="p-4 border-t space-y-2">
          <button className="w-full bg-purple-600 text-white py-2 rounded">
            Get Started
          </button>
          <button className="w-full border border-purple-600 text-purple-600 py-2 rounded">
            Log In
          </button>
        </div>
      </div>

      {/*✅ Fullscreen Search */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col lg:hidden">
          {/* ✅Search Bar */}
          <div className="relative flex items-center border-b px-4 py-3">
            {/* ✅Back Button inside input */}
            <ArrowLeftIcon
              onClick={() => setIsSearchOpen(false)}
              className="h-6 w-6 text-gray-700 absolute left-6 cursor-pointer"
            />
            <input
              name="search"
              autoComplete="search"
              type="text"
              placeholder="Find extensions, themes, guides, and more"
              className="w-full border rounded-full pl-10 pr-10 py-2 focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              autoFocus
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-6" />
          </div>

          {/* ✅Search Results */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                    <h4 className="font-medium text-gray-900">
                      {content.title}
                    </h4>
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

          {/* ✅Fixed Search Button */}
          <div className="p-4 border-t">
            <button className="w-full bg-purple-600 text-white py-2 rounded">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
