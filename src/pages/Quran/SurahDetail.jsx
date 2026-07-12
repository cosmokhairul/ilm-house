import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useContentData } from "../../hooks/useContentData";
import ArabicBlock from "../../components/ui/ArabicBlock";

const SurahDetail = () => {
  const { t } = useTranslation();
  const { surahId } = useParams();
  const surahs = useContentData("surahs");
  const surah = surahs.find((item) => item.id === surahId);

  if (!surah) {
    return (
      <div className="space-y-4 p-4 sm:p-6 text-center">
        <h1 className="text-2xl font-bold text-primary font-heading">{t("nav.quran.label")}</h1>
        <p className="text-base-content/70">{t("content.notFound")}</p>
        <Link to="/quran" className="btn btn-primary btn-sm">
          {t("nav.quran.all")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 sm:p-6 md:p-6 lg:max-w-3xl lg:p-8">
      <div>
        <p dir="rtl" className="font-arabic text-2xl sm:text-3xl text-primary">
          {surah.arabicName}
        </p>
        <h1 className="text-2xl font-bold font-heading">
          {surah.order}. {surah.name}
        </h1>
        <p className="text-base-content/70 mt-1 text-sm">
          {surah.meaning} · {surah.versesCount} {t("content.verses")} · {surah.revelationPlace}
        </p>
      </div>

      <div className="space-y-4">
        {surah.verses.map((verse) => (
          <div
            key={verse.number}
            className="card bg-base-100 border-base-300 space-y-3 border p-4 sm:p-6 lg:p-8"
          >
            <div className="flex items-start gap-3">
              <span className="badge badge-primary badge-sm shrink-0">{verse.number}</span>
              <ArabicBlock className="flex-1 text-xl sm:text-2xl">{verse.arabic}</ArabicBlock>
            </div>
            <div>
              <p className="text-base-content/60 mb-1 text-sm">{t("content.pronunciation")}</p>
              <p className="italic">{verse.pronunciation}</p>
            </div>
            <div>
              <p className="text-base-content/60 mb-1 text-sm">{t("content.translation")}</p>
              <p>{verse.translation}</p>
            </div>
          </div>
        ))}
      </div>

      <Link to="/quran" className="link link-primary text-sm">
        ← {t("nav.quran.all")}
      </Link>
    </div>
  );
};

export default SurahDetail;
