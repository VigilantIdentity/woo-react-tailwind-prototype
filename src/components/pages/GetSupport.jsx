import { NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import LoginPage from "./LoginPage";
import Footer from "../layout/Footer";

export default function GetSupport() {
  const { headerHeight } = useAuth();
  return (
    <div className="relative flex flex-col justify-center items-center py-4">
      {/*✅ Section of the page having components with 75% width of whole page size and centered justified*/}
      <div className="w-full md:w-[75%] py-2 space-y-4">
        <LoginPage />
      </div>
      {/*✅ Footer section rendered full width of the page*/}
      <div className="w-full md:w-full space-y-6">
        <Footer />
      </div>
    </div>
  );
}
