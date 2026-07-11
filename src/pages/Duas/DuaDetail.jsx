import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

const DuaDetail = () => {
  const { t } = useTranslation();
  const { duaId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary">{t("nav.duas.label")}</h1>
      <p className="mt-2 text-base-content/70">
        দোয়া: <span className="font-semibold">{duaId}</span> — কনটেন্ট শীঘ্রই আসছে।
      </p>
    </div>
  );
};

export default DuaDetail;
