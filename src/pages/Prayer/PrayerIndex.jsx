import { useTranslation } from "react-i18next";
import { useContentData } from "../../hooks/useContentData";
import SectionCard from "../../components/ui/SectionCard";

const PrayerIndex = () => {
  const { t } = useTranslation();
  const lessons = useContentData("prayer");
  const sorted = [...lessons].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-4 p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-primary font-heading">{t("nav.prayer.label")}</h1>

      {sorted.length === 0 ? (
        <p className="text-base-content/70">{t("content.comingSoon")}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((lesson) => (
            <SectionCard
              key={lesson.id}
              to={`/prayer/${lesson.id}`}
              title={lesson.title}
              excerpt={lesson.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PrayerIndex;
