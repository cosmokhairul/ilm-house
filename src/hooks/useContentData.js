import { useTranslation } from "react-i18next";
import bnDuas from "../data/bn/duas.json";
import enDuas from "../data/en/duas.json";
import bnSurahs from "../data/bn/surahs.json";
import enSurahs from "../data/en/surahs.json";
import bnPrayer from "../data/bn/prayer.json";
import enPrayer from "../data/en/prayer.json";
import bnHadith from "../data/bn/hadith.json";
import enHadith from "../data/en/hadith.json";

const CONTENT = {
  duas: { bn: bnDuas, en: enDuas },
  surahs: { bn: bnSurahs, en: enSurahs },
  prayer: { bn: bnPrayer, en: enPrayer },
  hadith: { bn: bnHadith, en: enHadith },
};

export const useContentData = (contentKey) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "bn";
  return CONTENT[contentKey]?.[lang] ?? [];
};
