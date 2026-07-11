import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import bn from "./locales/bn/translation.json";
import en from "./locales/en/translation.json";

export const LANGUAGE_STORAGE_KEY = "ilmghar-lang";

const readStoredLanguage = () => {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === "bn" || saved === "en" ? saved : "bn";
  } catch {
    return "bn";
  }
};

i18n.use(initReactI18next).init({
  resources: {
    bn: { translation: bn },
    en: { translation: en },
  },
  lng: readStoredLanguage(),
  fallbackLng: "bn",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
