import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function LanguageSelector() {
  const { setSelectedLanguage, setIsVerticalOpen } = useAuth();

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "ar", label: "العربية" },
    { code: "zh-CN", label: "中文" },
    { code: "hi", label: "हिन्दी" },
    { code: "ru", label: "Русский" },
    { code: "pt", label: "Português" },
    { code: "ja", label: "日本語" },
    { code: "ko", label: "한국어" },
    { code: "pl", label: "Polish" },
    { code: "ur", label: "Urdu" },
  ];

  //✅ everytime page reloads or refreshed old stored language will be wiped off from browser local storage
  useEffect(() => {
    localStorage.removeItem("selectedLang");
  }, []);
  //✅ Passover user selected language from the list to the googleCombo so google could compare with available languages
  // provided above and within the index.html scripts once found, will translate the page where google widget is placed.
  const translatePage = (lang) => {
    const interval = setInterval(() => {
      const googleCombo = document.querySelector(".goog-te-combo");
      if (googleCombo) {
        console.log(lang.code);
        googleCombo.value = lang;
        googleCombo.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 500);
  };

  return languages.map((lang) => {
    //✅ Render language list over drawer menu
    return (
      <li
        className="flex px-6 gap-2 h-14 cursor-pointer justify-items-start items-center border rounded-md hover:text-blue-500"
        key={lang.code}
        onClick={(e) => {
          const code = e.currentTarget.dataset.code;

          setSelectedLanguage(lang.label);
          localStorage.setItem("selectedLang", JSON.stringify(lang));
          translatePage(lang.code);
          setIsVerticalOpen(false);
        }}
      >
        {lang.label}
      </li>
    );
  });
}
