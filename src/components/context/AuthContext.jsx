import { createContext, useState, useRef, useEffect } from "react";

import { FaDollarSign } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaPoundSign } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { TbCurrencyZloty } from "react-icons/tb";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  //✅ locate header for adjusting relevant components main pages
  const headerRef = useRef(null);
  //✅ header height to pass over across components needed for page top adjustment
  const [headerHeight, setHeaderHeight] = useState(0);

  //✅ Burger menu variables i.e., isMenuOpen: menu switch, isSearch: switch for search box inside buger, and searchQuery: to hold search text written in textbox
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //✅ Variables for flipping currency and language on VerticalSlideMenu drawer card
  const [selectedCurrency, setSelectedCurrency] = useState(["$ ", "USD"]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isVerticalOpen, setIsVerticalOpen] = useState(false);
  const [active, setActive] = useState(null); //track which menu item is clicked i.e., Currency or Language and render accordingly on drawer menu

  //✅ Example currency list, in real app call api for list of currencies from db
  const currencyList = [
    { icon: <FaDollarSign className="inline" />, currency: "USD", id: 1 },
    { icon: <FaEuroSign className="inline" />, currency: "EURO", id: 2 },
    { icon: <FaPoundSign className="inline" />, currency: "Pound", id: 3 },
    {
      icon: <FaIndianRupeeSign className="inline" />,
      currency: "Indian Rupee",
      id: 4,
    },
    {
      icon: <TbCurrencyZloty className="inline" />,
      currency: "Polish Zlotay",
      id: 5,
    },
  ];

  // ✅ Get header height dynamically
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ List of variables defined in AuthProvider and render across application wit help of useAuth
  const contextValues = {
    headerRef,
    headerHeight,
    setHeaderHeight,

    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,

    selectedCurrency,
    setSelectedCurrency,
    currencyList,
    selectedLanguage,
    setSelectedLanguage,
    isVerticalOpen,
    setIsVerticalOpen,
    active,
    setActive,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
