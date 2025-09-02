import React, { use, useEffect } from "react";

import useAuth from "../hooks/useAuth";
import Currency from "../misc/Currency";

import LanguageSelector from "../misc/LanguageSelector";

export default function VerticalSlideMenu() {
  const { setIsVerticalOpen, isVerticalOpen, active } = useAuth();

  // ✅ Lock/unlock page scrollbar when slideMenu draws in and out
  useEffect(
    function () {
      if (isVerticalOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return function () {
        document.body.style.overflow = "auto";
      };
    },
    [isVerticalOpen]
  );

  // ✅ Left open slideMenu gets close automatically and page gets back its scrollbar
  //  once page size gets smaller than given size
  useEffect(function () {
    const handleResize = function () {
      if (window.innerWidth <= 768) {
        setIsVerticalOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  {
    /* ✅ Overlay */
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setIsVerticalOpen(false)}
        style={{
          opacity: isVerticalOpen ? 1 : 0,
          visibility: isVerticalOpen ? "visible" : "hidden",
        }}
      >
        {/* ✅ vertical slideMenue */}
        <div
          className="fixed mx-auto justify-between w-sm max-w-md h-full bg-white shadow-xl duration-900 z-50"
          onClick={(e) => e.stopPropagation()}
          style={{ right: isVerticalOpen ? "0%" : "-100%" }}
        >
          <div className="flex p-2 px-4 justify-between bg-gray-100">
            <h2 className="text-lg font-bold">
              {active === "Currency" && "Select Currency"}
              {active === "Language" && "Select Language"}
            </h2>

            <button
              onClick={() => setIsVerticalOpen(false)}
              className="cursor-pointer"
            >
              ✖
            </button>
          </div>
          {/* ✅ vertical scrollbar with overflow-y-auto for Currency & Language*/}
          <div className="absolute overflow-y-auto mx-auto  justify-between w-sm max-w-md h-full">
            <ul className="p-4 mb-20 space-y-4 ">
              {/*✅ Call to Currency component */}
              {active === "Currency" && <Currency />}
              {/*✅ Call to LanguageSelector component */}
              {active === "Language" && <LanguageSelector />}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
