import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

const SurahDetail = () => {
  const { t } = useTranslation();
  const { surahId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary">{t("nav.quran.label")}</h1>
      <p className="mt-2 text-base-content/70">
        সূরা: <span className="font-semibold">{surahId}</span> — কনটেন্ট শীঘ্রই আসছে।
      </p>
    </div>
  );
};

export default SurahDetail;
