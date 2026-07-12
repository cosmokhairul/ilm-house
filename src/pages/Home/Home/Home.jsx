import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { FaBookOpen, FaMosque, FaPray, FaScroll } from "react-icons/fa";
import heroImg from "../../../assets/hero.png";

const SECTIONS = [
  { key: "prayer", path: "/prayer", Icon: FaPray },
  { key: "quran", path: "/quran", Icon: FaBookOpen },
  { key: "duas", path: "/duas", Icon: FaMosque },
  { key: "hadith", path: "/hadith", Icon: FaScroll },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="hero bg-base-200 px-4 py-12">
        <div className="hero-content flex-col gap-8 text-center lg:flex-row-reverse lg:text-left">
          <img src={heroImg} className="w-full max-w-xs rounded-lg" alt="" />
          <div>
            <h1 className="text-4xl font-bold text-primary font-heading">{t("app.name")}</h1>
            <p className="text-base-content/80 max-w-md py-4">{t("home.tagline")}</p>
            <Link to="/duas" className="btn btn-primary">
              {t("home.cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6 px-4 py-10">
        <h2 className="text-center text-2xl font-bold font-heading">{t("home.exploreTitle")}</h2>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SECTIONS.map(({ key, path, Icon }) => (
            <Link
              key={key}
              to={path}
              className="card bg-base-100 border-base-300 hover:border-primary text-center transition-colors"
            >
              <div className="card-body items-center gap-2">
                <Icon className="text-primary h-8 w-8" />
                <h3 className="card-title font-heading text-base">{t(`nav.${key}.label`)}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
