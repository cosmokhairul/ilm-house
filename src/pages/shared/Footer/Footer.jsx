import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const LINKS = [
  { key: "prayer", path: "/prayer" },
  { key: "quran", path: "/quran" },
  { key: "duas", path: "/duas" },
  { key: "hadith", path: "/hadith" },
];

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="footer sm:footer-horizontal mx-auto max-w-5xl px-4 py-10 md:px-6 xl:px-8">
        <nav>
          <Link to="/" className="footer-title font-heading">
            {t("app.name")}
          </Link>
          <p className="max-w-xs text-sm opacity-80">{t("footer.tagline")}</p>
        </nav>
        <nav>
          <h6 className="footer-title">{t("footer.quickLinks")}</h6>
          {LINKS.map((link) => (
            <Link key={link.key} to={link.path} className="link link-hover">
              {t(`nav.${link.key}.label`)}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-neutral-content/10 border-t px-4 py-4 text-center text-sm opacity-70">
        © {year} {t("app.name")} — {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
