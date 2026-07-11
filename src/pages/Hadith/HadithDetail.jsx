import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

const HadithDetail = () => {
  const { t } = useTranslation();
  const { hadithId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary">{t("nav.hadith.label")}</h1>
      <p className="mt-2 text-base-content/70">
        হাদিস: <span className="font-semibold">{hadithId}</span> — কনটেন্ট শীঘ্রই আসছে।
      </p>
    </div>
  );
};

export default HadithDetail;
