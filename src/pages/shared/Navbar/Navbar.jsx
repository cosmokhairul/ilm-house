import { useTranslation } from "react-i18next";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";
import LanguageToggle from "../../../components/LanguageToggle/LanguageToggle";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h2 className="font-heading text-xl px-2">{t("app.name")}</h2>
      </div>
      <div className="flex-none flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
