import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";

const LanguageToggle = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="join" aria-label={t("language.toggleLabel")}>
      <button
        type="button"
        className={`btn btn-sm join-item ${language === "bn" ? "btn-primary" : "btn-ghost"}`}
        onClick={() => changeLanguage("bn")}
        aria-pressed={language === "bn"}
      >
        বাং
      </button>
      <button
        type="button"
        className={`btn btn-sm join-item ${language === "en" ? "btn-primary" : "btn-ghost"}`}
        onClick={() => changeLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
