import { useCallback, useEffect, useState } from "react";
import i18n, { LANGUAGE_STORAGE_KEY } from "../i18n/i18n";

const readStoredLanguage = () => {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return saved === "bn" || saved === "en" ? saved : "bn";
};

export const useLanguage = () => {
  const [language, setLanguage] = useState(readStoredLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const changeLanguage = useCallback((lng) => setLanguage(lng), []);
  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "bn" ? "en" : "bn"));
  }, []);

  return { language, changeLanguage, toggleLanguage };
};
