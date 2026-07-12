import { useTranslation } from "react-i18next";
import { useContentData } from "../../hooks/useContentData";
import SectionCard from "../../components/ui/SectionCard";

const SurahList = ({ filter }) => {
  const { t } = useTranslation();
  const surahs = useContentData("surahs");
  const visible = filter ? surahs.filter((surah) => surah.category === filter) : surahs;
  const sorted = [...visible].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold text-primary font-heading">
        {filter ? t(`nav.quran.${filter}`) : t("nav.quran.label")}
      </h1>

      {sorted.length === 0 ? (
        <p className="text-base-content/70">{t("content.comingSoon")}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((surah) => (
            <SectionCard
              key={surah.id}
              to={`/quran/${surah.id}`}
              title={`${surah.order}. ${surah.name}`}
              excerpt={`${surah.meaning} · ${surah.versesCount} ${t("content.verses")} · ${surah.revelationPlace}`}
              badge={surah.arabicName}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SurahList;
