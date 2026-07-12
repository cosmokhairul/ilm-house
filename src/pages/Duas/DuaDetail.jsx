import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useContentData } from "../../hooks/useContentData";
import ArabicBlock from "../../components/ui/ArabicBlock";

const DuaDetail = () => {
  const { t } = useTranslation();
  const { duaId } = useParams();
  const duas = useContentData("duas");
  const dua = duas.find((item) => item.id === duaId);

  if (!dua) {
    return (
      <div className="space-y-4 p-6 text-center">
        <h1 className="text-2xl font-bold text-primary font-heading">{t("nav.duas.label")}</h1>
        <p className="text-base-content/70">{t("content.notFound")}</p>
        <Link to="/duas" className="btn btn-primary btn-sm">
          {t("nav.duas.all")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div>
        <span className="badge badge-outline mb-2">{t(`nav.duas.${dua.category}`)}</span>
        <h1 className="text-2xl font-bold text-primary font-heading">{dua.title}</h1>
      </div>

      <div className="card bg-base-100 border-base-300 space-y-4 border p-6">
        <ArabicBlock className="text-2xl">{dua.arabic}</ArabicBlock>

        <div>
          <p className="text-base-content/60 mb-1 text-sm">{t("content.pronunciation")}</p>
          <p className="italic">{dua.pronunciation}</p>
        </div>

        <div>
          <p className="text-base-content/60 mb-1 text-sm">{t("content.translation")}</p>
          <p>{dua.translation}</p>
        </div>

        <p className="text-base-content/50 text-xs">
          {t("content.reference")}: {dua.reference}
        </p>
      </div>

      <Link to="/duas" className="link link-primary text-sm">
        ← {t("nav.duas.all")}
      </Link>
    </div>
  );
};

export default DuaDetail;
