import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useContentData } from "../../hooks/useContentData";
import ArabicBlock from "../../components/ui/ArabicBlock";

const HadithDetail = () => {
  const { t } = useTranslation();
  const { hadithId } = useParams();
  const hadiths = useContentData("hadith");
  const hadith = hadiths.find((item) => item.id === hadithId);

  if (!hadith) {
    return (
      <div className="space-y-4 p-4 sm:p-6 text-center">
        <h1 className="text-2xl font-bold text-primary font-heading">{t("nav.hadith.label")}</h1>
        <p className="text-base-content/70">{t("content.notFound")}</p>
        <Link to="/hadith" className="btn btn-primary btn-sm">
          {t("nav.hadith.all")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 sm:p-6 md:p-6 lg:max-w-3xl lg:p-8">
      <div>
        <span className="badge badge-outline mb-2">{t(`nav.hadith.${hadith.category}`)}</span>
        <h1 className="text-2xl font-bold text-primary font-heading">{hadith.collectionName}</h1>
      </div>

      <div className="card bg-base-100 border-base-300 space-y-4 border p-4 sm:p-6 lg:p-8">
        <ArabicBlock className="text-xl sm:text-2xl">{hadith.arabic}</ArabicBlock>

        <div>
          <p className="text-base-content/60 mb-1 text-sm">{t("content.pronunciation")}</p>
          <p className="italic">{hadith.pronunciation}</p>
        </div>

        <div>
          <p className="text-base-content/60 mb-1 text-sm">{t("content.translation")}</p>
          <p>{hadith.translation}</p>
        </div>

        <p className="text-base-content/50 text-xs">
          {t("content.narrator")}: {hadith.narrator} · {t("content.reference")}: {hadith.reference}
        </p>
      </div>

      <Link to="/hadith" className="link link-primary text-sm">
        ← {t("nav.hadith.all")}
      </Link>
    </div>
  );
};

export default HadithDetail;
