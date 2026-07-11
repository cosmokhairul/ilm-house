import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-center space-y-4">
      <h1 className="text-3xl font-bold text-primary">৪০৪</h1>
      <p className="text-base-content/70">পেজটি খুঁজে পাওয়া যায়নি।</p>
      <Link to="/" className="btn btn-primary">
        {t("nav.home")}
      </Link>
    </div>
  );
};

export default NotFound;
