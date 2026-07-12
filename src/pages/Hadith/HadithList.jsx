import { useTranslation } from "react-i18next";
import { useContentData } from "../../hooks/useContentData";
import SectionCard from "../../components/ui/SectionCard";

const HadithList = ({ filter }) => {
  const { t } = useTranslation();
  const hadiths = useContentData("hadith");
  const visible = filter ? hadiths.filter((hadith) => hadith.category === filter) : hadiths;
  const sorted = [...visible].sort((a, b) => a.order - b.order);

  return (
    <div className="mx-auto max-w-6xl space-y-4 p-4 sm:p-6 md:px-6 lg:p-8 xl:px-8">
      <h1 className="text-2xl font-bold text-primary font-heading">
        {filter ? t(`nav.hadith.${filter}`) : t("nav.hadith.label")}
      </h1>

      {sorted.length === 0 ? (
        <p className="text-base-content/70">{t("content.comingSoon")}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((hadith) => (
            <SectionCard
              key={hadith.id}
              to={`/hadith/${hadith.id}`}
              title={hadith.translation}
              excerpt={hadith.collectionName}
              badge={t(`nav.hadith.${hadith.category}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HadithList;
