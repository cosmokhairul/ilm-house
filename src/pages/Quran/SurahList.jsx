import { useTranslation } from "react-i18next";

const SurahList = ({ filter }) => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary">
        {filter ? t(`nav.quran.${filter}`) : t("nav.quran.label")}
      </h1>
      <p className="mt-2 text-base-content/70">কনটেন্ট শীঘ্রই আসছে।</p>
    </div>
  );
};

export default SurahList;
