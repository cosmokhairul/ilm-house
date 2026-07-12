import { useTranslation } from "react-i18next";
import bnDuas from "../data/bn/duas.json";
import enDuas from "../data/en/duas.json";

const CONTENT = {
  duas: { bn: bnDuas, en: enDuas },
};

export const useContentData = (contentKey) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "bn";
  return CONTENT[contentKey]?.[lang] ?? [];
};
