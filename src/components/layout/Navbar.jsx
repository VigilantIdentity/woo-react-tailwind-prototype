{
  /* use Navbar in App.jsx enclosing all children pages when Nav/Header 
  menu is defined inside Navbar and supposed to be on top of all pages
    
    e:g <AuthProvider>
      <Router>
        <Navbar /> //Here is Navbar
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/develop-on-woo" element={<DevelopOnWoo />} />
          <Route path="/hire-an-expert" element={<HireAnExpert />} />
          <Route path="/get-support" element={<GetSupport />} />
        </Routes>
      </Router>
    </AuthProvider>*/
}

{
  /* Don't need Navbar in App.jsx for enclosing all children pages when Nav/Header
       menu supposed to be called optionally in few pages than having it on all pages 
       top. This way user adds Navbar component on pages he wants as
       component.
    
    e:g <AuthProvider>
      <Router>
         //No need of Navbar here, instead call it in desired pages top
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/develop-on-woo" element={<DevelopOnWoo />} />
          <Route path="/hire-an-expert" element={<HireAnExpert />} />
          <Route path="/get-support" element={<GetSupport />} />
        </Routes>
      </Router>
    </AuthProvider>*/
}

import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import MobileMenu from "./BurgerMenu";
import { TfiWorld } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import SearchDropdown from "../sections/Search";

import VerticalSlideMenu from "./VerticalSlideMenu";

export default function Navbar() {
  //✅ Variables for slidedown menus of Sell, Extensions, and Resources
  const [showMenu, setShowMenu] = useState(false);
  const [selectedSellMenu, setSelectedSellMenu] = useState(false);
  const [selectedExtensionsMenu, setSelectedExtensionsMenu] = useState(false);
  const [selectedResources, setSelectedResources] = useState(false);

  const {
    headerRef,
    headerHeight,

    selectedCurrency,
    selectedLanguage,
    setIsVerticalOpen,
    setActive,

    isSearchOpen,
    setIsSearchOpen,
  } = useAuth();

  // ✅ Taking current path from the browser addressbar
  const location = useLocation();
  //✅ Compare location current path with given ones
  const hideLanguagePageFrom =
    location.pathname === "/develop-on-woo" ||
    location.pathname === "/hire-an-expert";

  return (
    <>
      <header
        ref={headerRef}
        className="relative top-0 w-full shadow shadow-gray-50 text-[#02060cb3] bg-white"
      >
        {/* ✅ Right side navbar with language, and other pages */}
        <nav className="hidden md:flex gap-6 mr-5 lg:mr-20 xl:mr-40 2xl:mr-60 justify-end items-center shadow shadow-lime-50">
          <div
            onClick={() => {
              setIsVerticalOpen(true);
              setActive("Currency");
            }}
          >
            <span className="cursor-pointer ">{selectedCurrency}</span>
          </div>
          {/* <LanguageSelector />*/}
          {/*✅ Language menu shouldn't appear on the navbar of DevelopOnWoo and HireAnExpert pages  */}
          {!hideLanguagePageFrom && (
            <div
              className="cursor-pointer"
              onClick={() => {
                setIsVerticalOpen(true);
                setActive("Language");
              }}
            >
              {<TfiWorld className="inline mr-2" />}
              {selectedLanguage}
            </div>
          )}
          <div className="">
            <NavLink
              to="/develop-on-woo"
              className={({ isActive }) =>
                ` ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
              }
            >
              Develop on Woo
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/hire-an-expert"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
            >
              Hire an expert
            </NavLink>
          </div>
          <div className="">
            <NavLink
              to="/get-support"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
            >
              Get support
            </NavLink>
          </div>
          {/*✅ Hidden widget from google translator to translate navbar and all pages navbar is part of  */}
          <div id="google_translate_element"></div> {/* Hidden widget */}
        </nav>

        {/* ✅ Starting from Left side 2nd line navbar with logo, drop down menus, and login */}
        <div className="hidden md:flex gap-0 mr-5 lg:mr-20 xl:mr-40 2xl:mr-60 font-semibold items-end justify-between">
          <div className="flex ml-[13%] gap-0 items-center justify-evenly">
            <NavLink to="/" className="">
              <img
                src="src/components/assets/images/woo-logo.png"
                className="h-6 max-w-max"
                alt="logo"
              />
            </NavLink>

            <div className="flex mx-auto gap-0 items-center justify-evenly">
              <div
                className={` w-20
             text-center py-3
            cursor-pointer 
            transition-all 
             ${selectedSellMenu && "border-b-4 border-[#873eff]"}
          `}
                onMouseEnter={() => {
                  setShowMenu(true);
                  setSelectedSellMenu(true);
                }}
                onMouseLeave={() => {
                  setShowMenu(false);
                  setSelectedSellMenu(false);
                }}
              >
                <span className="">Sell</span>
              </div>
              <div
                className={` w-20
            text-center mr-6 py-3
            cursor-pointer 
            transition-all 
            ${selectedExtensionsMenu && "border-b-4 border-[#873eff]"}
          `}
                onMouseEnter={() => {
                  setShowMenu(true);
                  setSelectedExtensionsMenu(true);
                }}
                onMouseLeave={() => {
                  setShowMenu(false);
                  setSelectedExtensionsMenu(false);
                }}
              >
                Extentions
              </div>
              <div
                className={`w-20 text-center mr-6
            py-3
            cursor-pointer 
            transition-all 
            ${selectedResources && "border-b-4 border-[#873eff]"}
          `}
                onMouseEnter={() => {
                  setShowMenu(true);
                  setSelectedResources(true);
                }}
                onMouseLeave={() => {
                  setShowMenu(false);
                  setSelectedResources(false);
                }}
              >
                Resources
              </div>
              <div
                className=" w-auto text-center
            py-0
            cursor-pointer 
            transition-all 
            hover:border-b-4 hover:border-[#873eff]
          "
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                Enterprise ecommerce
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-evenly">
            <button
              onClick={() => setIsSearchOpen(true)}
              style={{
                opacity: isSearchOpen ? 0 : 1,
                visibility: isSearchOpen ? "hidden" : "visible",
              }}
            >
              <CiSearch className="inline" />
            </button>
            <SearchDropdown />

            <div className="">
              <NavLink to="/login" className="">
                Log in
              </NavLink>
            </div>

            <div
              className="py-2
          border-2 border-[#873eff] 
          rounded-[10px]
          text-[#873eff] font-semibold 
          cursor-pointer 
          transition 
           hover:border-purple-800 hover:text-purple-800 hover:bg-gray-200
         "
            >
              <span className="inline-block w-25 px-2"> Get started</span>
            </div>
          </div>
        </div>
        {/* overlay drop down in full screen */}
        {showMenu && ( //black overlay area to fade a page
          <div
            style={{ top: headerHeight }}
            className="absolute left-0 right-0  bottom-0 min-h-screen bg-black/50 duration-300 z-40"
            onClick={() => setShowMenu(false)} // close if clicked outside
          />
        )}
        {showMenu &&
          selectedSellMenu && ( // Sell drop dwon items area with listed items
            <div
              style={{ top: headerHeight }}
              className="
            absolute left-1/2 transform -translate-x-1/2 
            bg-white shadow-lg w-full xl:w-[90%] 2xl:w-[80%] h-[100] z-40
            animate-slideDown 
          "
              onMouseEnter={() => {
                setShowMenu(true);
                setSelectedSellMenu(true);
              }}
              onMouseLeave={() => {
                setShowMenu(false);
                setSelectedSellMenu(false);
              }}
            >
              <Sell />
            </div>
          )}
        {showMenu &&
          selectedExtensionsMenu && ( // Extensions drop dwon items area with listed items
            <div
              style={{ top: headerHeight }}
              className="
            absolute left-1/2 transform -translate-x-1/2 
            bg-white shadow-lg w-full xl:w-[90%] 2xl:w-[80%] h-[100] z-40
            animate-slideDown 
          "
              onMouseEnter={() => {
                setShowMenu(true);
                setSelectedExtensionsMenu(true);
              }}
              onMouseLeave={() => {
                setShowMenu(false);
                setSelectedExtensionsMenu(false);
              }}
            >
              <Extensions />
            </div>
          )}
        {showMenu &&
          selectedResources && ( // Resources drop dwon items area with listed items
            <div
              style={{ top: headerHeight }}
              className="
            absolute left-1/2 transform -translate-x-1/2 
            bg-white shadow-lg w-full xl:w-[90%] 2xl:w-[80%] h-[100] z-40
            animate-slideDown 
          "
              onMouseEnter={() => {
                setShowMenu(true);
                setSelectedResources(true);
              }}
              onMouseLeave={() => {
                setShowMenu(false);
                setSelectedResources(false);
              }}
            >
              <Resources />
            </div>
          )}
        {/* Burger Menu (Mobile / Medium) */}
        <MobileMenu />
        <VerticalSlideMenu />
      </header>
    </>
  );
}
{
  /*✅ Sell dropdown from header menu */
}
function Sell() {
  return (
    <div className=" h-full p-10 grid grid-cols-3 gap-6">
      {/* Column 1 */}

      <div>
        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              What is WooCommerce?
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Learn more about the platform that powers success for millions of
              businesses.
            </p>
          </a>
        </div>

        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Payments
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Accept payments and manage transactions right from your dashboard
              with WooPayments.
            </p>
          </a>
        </div>

        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Shipping
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Save time and money with WooCommerce Shipping.
            </p>
          </a>
        </div>
      </div>
      {/* Column 2 */}
      <div>
        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              No-code customization
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Create exactly the store you want without touching a line of code.
            </p>
          </a>
        </div>

        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Woo for developers
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Build powerful ecommerce solutions with our open, WordPress-based
              platform.
            </p>
          </a>
        </div>

        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Optimized checkout
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Increase conversion with a customized checkout experience.
            </p>
          </a>
        </div>
      </div>
      {/* Column 3 */}
      <div>
        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Marketing
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Build your brand and reach more shoppers with content marketing,
              SEO tools, and up-sells.
            </p>
          </a>
        </div>

        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Mobile app
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Manage your business on the go.
            </p>
          </a>
        </div>

        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Multi-channel ecommerce
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Find new audiences and increase sales by selling across multiple
              channels.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
{
  /*✅ Extensions dropdown from header menu */
}
function Extensions() {
  return (
    <div className=" h-full p-10 grid grid-cols-3 gap-6 ">
      {/* Column 1 */}

      <div>
        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              WooCommerce Marketplace
            </h4>
            <p className="text-sm text-gray-500">
              Find everything you need to enhance your store and grow your sales
            </p>
          </a>
        </div>
        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Themes
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Quickly build a beautiful store with professionally designed
              themes
            </p>
          </a>
        </div>
        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Business services
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Handpicked essential services to support and grow your business
            </p>
          </a>
        </div>
      </div>
      {/* Column 2 */}
      <div>
        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Extensions
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Grow your business with hundreds of free and paid extensions
            </p>
          </a>
        </div>
        <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12">
          <a href="#" className="group block p-3 outline-none">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
              Collections
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Explore curated extension collections for business needs
            </p>
          </a>
        </div>
      </div>
      {/* Column 3 */}
      <div className="">
        <h4 className="font-semibold text-gray-900">Category</h4>
        <ul className="space-y-2">
          {[
            "All extensions",
            "New",
            "Developed by Woo",
            "Free",
            "Payments",
            "Merchandising",
            "Store content and customizations",
            "Shipping, delivery, and fulfillment",
            "Marketing",
            "Conversion",
            "Customer service",
            "Store management",
          ].map((item, idx) => (
            <li key={idx}>
              <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-6">
                <a
                  href="#"
                  className="px-2 text-gray-700 hover:text-purple-600 inline-flex items-center"
                >
                  {item}
                  {[
                    "Payments",
                    "Merchandising",
                    "Store content and customizations",
                    "Shipping, delivery, and fulfillment",
                    "Marketing",
                    "Conversion",
                    "Customer service",
                    "Store management",
                  ].includes(item) && <span className="ml-2">{">"}</span>}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
{
  /*✅ Resources dropdown from header menu */
}
function Resources() {
  const blocks = [
    // 3 columns of title + description (2 rows each)
    [
      {
        title: "Blog",
        desc: "Get regular tips, tricks and ecommerce inspiration from the Woo team",
        href: "#blog",
      },
      {
        title: "WooCommerce hosting",
        desc: "Find trusted hosting solutions for your Woo store",
        href: "#hosting",
      },
    ],
    [
      {
        title: "Learn",
        desc: "Ecommerce resources to help you learn WooCommerce, launch fast, and sell more",
        href: "#learn",
      },
      {
        title: "Join the Woo community",
        desc: "Connect with thousands of Woo users to get help or get inspired",
        href: "#community",
      },
    ],
    [
      {
        title: "Documentation",
        desc: "Guides, tutorials, and technical resources for WooCommerce",
        href: "#docs",
      },
      {
        title: "Support forums",
        desc: "Ask other WooCommerce users for help with your site",
        href: "#forums",
      },
    ],
  ];

  const guides = [
    "How to build an online store on WooCommerce",
    "The costs of running a store on WooCommerce",
    "How to migrate from Shopify",
    "How to start an online business",
    "Omnichannel ecommerce",
    "Email marketing",
    "CBD store owners",
    "A guide to shipping for ecommerce stores",
    "How to sell internationally",
  ].map((label, i) => ({ label, href: `#guide-${i}` }));

  return (
    <div className=" h-full p-10 grid grid-cols-4 gap-6">
      {/* 3 columns (2 rows each) */}
      {blocks.map((col, ci) => (
        <div key={ci} className="">
          {col.map((item, ri) => (
            <div
              key={ri}
              className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-12"
            >
              <a
                key={ri}
                href={item.href}
                className="group block p-3 outline-none"
              >
                <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </a>
            </div>
          ))}
        </div>
      ))}

      {/* Guides list */}
      <div className="">
        <h4 className="font-semibold text-gray-900 mb-3">Guides</h4>
        <ul className="space-y-0">
          {guides.map((g, i) => (
            <li key={i}>
              <div className="cursor-pointer w-[75%] hover:bg-gray-100 hover:rounded-[15px] duration-500 delay-100 mb-6">
                <a
                  href={g.href}
                  className="px-2 text-gray-700 hover:text-purple-600 inline-flex items-center"
                >
                  {g.label}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
