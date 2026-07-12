import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";
import LanguageToggle from "../../../components/LanguageToggle/LanguageToggle";

const NAV_SECTIONS = [
  {
    key: "prayer",
    path: "/prayer",
    items: [
      { key: "wudu", path: "/prayer/wudu" },
      { key: "method", path: "/prayer/method" },
      { key: "nullifiers", path: "/prayer/nullifiers" },
    ],
  },
  {
    key: "quran",
    path: "/quran",
    items: [{ key: "popular", path: "/quran/popular" }],
  },
  {
    key: "duas",
    path: "/duas",
    items: [
      { key: "daily", path: "/duas/daily" },
      { key: "special", path: "/duas/special" },
    ],
  },
  {
    key: "hadith",
    path: "/hadith",
    items: [
      { key: "topics", path: "/hadith/topics" },
      { key: "collections", path: "/hadith/collections" },
    ],
  },
];

const NavMenu = ({ t, className }) => (
  <ul className={className}>
    <li>
      <Link to="/">{t("nav.home")}</Link>
    </li>
    {NAV_SECTIONS.map((section) => (
      <li key={section.key}>
        <details>
          <summary>{t(`nav.${section.key}.label`)}</summary>
          <ul className="bg-base-100 rounded-box z-10 w-56 p-2">
            <li>
              <Link to={section.path}>{t(`nav.${section.key}.all`)}</Link>
            </li>
            {section.items.map((item) => (
              <li key={item.key}>
                <Link to={item.path}>{t(`nav.${section.key}.${item.key}`)}</Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label={t("nav.home")}
          >
            <FiMenu className="h-5 w-5" />
          </div>
          <NavMenu
            t={t}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-64 p-2 shadow"
          />
        </div>
        <Link to="/" className="btn btn-ghost font-heading px-2 text-lg sm:text-xl">
          {t("app.name")}
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <NavMenu t={t} className="menu menu-horizontal px-1" />
      </div>

      <div className="navbar-end gap-1 sm:gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
