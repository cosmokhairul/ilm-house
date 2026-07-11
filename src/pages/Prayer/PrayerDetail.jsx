import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

const PrayerDetail = () => {
  const { t } = useTranslation();
  const { lessonId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary">{t("nav.prayer.label")}</h1>
      <p className="mt-2 text-base-content/70">
        পাঠ: <span className="font-semibold">{lessonId}</span> — কনটেন্ট শীঘ্রই আসছে।
      </p>
    </div>
  );
};

export default PrayerDetail;
