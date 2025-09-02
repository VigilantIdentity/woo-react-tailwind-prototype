import React from "react";
import useAuth from "../hooks/useAuth";
import Footer from "../layout/Footer";
import Subscriber from "../sections/Subscriber";
import Navbar from "../layout/Navbar";

export default function DevelopOnWoo() {
  const { headerHeight } = useAuth();
  return (
    <div>
      {/* ✅ This page will have own Navbar*/}
      <Navbar />

      {/* ✅ No need to have style={{ top: headerHeight }} in below div section when Navbar is relative instead of fixed */}
      <div className=" flex flex-col justify-center items-center py-4">
        {/*✅ Section of the page having components with 75% width of whole page size and centered justified*/}
        <div className="w-full md:w-[75%] py-2 space-y-4">
          <DevelopHeroSection />
          <Subscriber />
          <FounderSection />
          <DrawDream />
          <TrueOwnership />
        </div>
        {/*✅ Footer section rendered full width of the page*/}
        <div className="w-full md:w-full space-y-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function DevelopHeroSection() {
  return (
    <div className="container mx-auto px-1 space-y-12 lg:flex lg:items-center lg:gap-12">
      {/* ✅ Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-900 leading-snug md:text-5xl">
          Flexible ecommerce,
          <br />
          for WordPress builds
          <br />
          of all sizes
        </h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Whether you’re a freelance developer, an in-house engineer, or run an
          agency, WooCommerce is a powerful ecommerce solution that supports the
          growth of your business. Our open-source platform lets you create
          anything you need, all on WordPress — the world’s most popular website
          builder.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block rounded-md bg-purple-600 px-6 py-3 text-white font-medium shadow hover:bg-purple-700 transition"
          >
            Explore our documentation
          </a>
        </div>
      </div>

      {/* ✅Right Image */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center relative">
        <div className="absolute -z-10 w-3/4 h-3/4 bg-green-400 rounded-bl-[80px] top-6 right-6"></div>
        <img
          src="src/components/assets/images/build_store_for_others.webp"
          alt="Team working"
          className="rounded-lg shadow-lg relative"
        />
      </div>
    </div>
  );
}

function FounderSection() {
  return (
    <div className="container mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
      {/*✅ Left Content */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center relative">
        <div className="absolute -z-10 w-3/4 h-3/4 bg-green-400 rounded-bl-[80px] top-6 right-6"></div>
        <img
          src="src/components/assets/images/founder.webp"
          alt="Team working"
          className="rounded-lg shadow-lg relative"
        />
      </div>

      {/* ✅Right Image */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          We’re stronger together! Proprietary software companies filled with VC
          money are everywhere. By leveraging the freedoms of open source and
          working together we can truly become a force to be reckoned with.
        </p>
        <div className="mt-8">ABC Founder</div>
      </div>
    </div>
  );
}

function DrawDream() {
  return (
    <div className="container mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
      {/* ✅Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-900 leading-snug md:text-5xl">
          If they can dream it, you can do it
        </h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          No matter how or what a merchant wants to sell, you can make it happen
          with WooCommerce. Our flexible platform lets you build the shopping
          experience of their dreams for nearly anything: physical products,
          digital downloads, services, accommodations, bookings, or even
          subscriptions. <br />
          Need to integrate with other software? If there’s not already an
          extension in our Marketplace, you can build your own connections with
          nearly any application out there.
        </p>
      </div>

      {/* ✅Right Image */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center relative">
        <div className="absolute -z-10 w-3/4 h-3/4 bg-green-400 rounded-bl-[80px] top-6 right-6"></div>
        <img
          src="src/components/assets/images/dream_it.webp"
          alt="Team working"
          className="rounded-lg shadow-lg relative"
        />
      </div>
    </div>
  );
}

function TrueOwnership() {
  return (
    <div className="container mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-12">
      {/* ✅Left Content */}
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center relative">
        <div className="absolute -z-10 w-3/4 h-3/4 bg-green-400 rounded-bl-[80px] top-6 right-6"></div>
        <img
          src="src/components/assets/images/true_ownership.webp"
          alt="Team working"
          className="rounded-lg shadow-lg relative"
        />
      </div>

      {/* ✅Right Image */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-gray-900 leading-snug md:text-5xl">
          Give your clients true ownership
        </h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Unlike closed-source platforms, WooCommerce gives your clients full
          ownership over their store and their data. Their site, store, order,
          and customer information is truly theirs — not leased from their
          ecommerce platform. Plus, you can host on whatever solution you
          prefer, including dozens of WordPress-optimized options.
        </p>
      </div>
    </div>
  );
}
