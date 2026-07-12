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
      <section className="hero bg-base-200 px-4 py-8 sm:py-10 md:py-12 xl:py-16">
        <div className="hero-content w-full max-w-7xl flex-col gap-6 text-center sm:gap-8 md:flex-row-reverse md:text-left">
          <img
            src={heroImg}
            className="w-full max-w-[12rem] rounded-lg sm:max-w-xs md:max-w-sm xl:max-w-md"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-bold text-primary font-heading sm:text-4xl xl:text-5xl">
              {t("app.name")}
            </h1>
            <p className="text-base-content/80 max-w-md py-4 xl:text-lg">{t("home.tagline")}</p>
            <Link to="/duas" className="btn btn-primary">
              {t("home.cta")}
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6 px-4 py-8 sm:py-10 md:px-6 xl:px-8">
        <h2 className="text-center text-2xl font-bold font-heading xl:text-3xl">
          {t("home.exploreTitle")}
        </h2>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {SECTIONS.map(({ key, path, Icon }) => (
            <Link
              key={key}
              to={path}
              className="card bg-base-100 border-base-300 hover:border-primary text-center transition-colors"
            >
              <div className="card-body items-center gap-2 xl:py-8">
                <Icon className="text-primary h-8 w-8 xl:h-10 xl:w-10" />
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
