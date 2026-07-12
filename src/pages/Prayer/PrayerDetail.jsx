import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useContentData } from "../../hooks/useContentData";

const PrayerDetail = () => {
  const { t } = useTranslation();
  const { lessonId } = useParams();
  const lessons = useContentData("prayer");
  const lesson = lessons.find((item) => item.id === lessonId);

  if (!lesson) {
    return (
      <div className="space-y-4 p-4 sm:p-6 text-center">
        <h1 className="text-2xl font-bold text-primary font-heading">{t("nav.prayer.label")}</h1>
        <p className="text-base-content/70">{t("content.notFound")}</p>
        <Link to="/prayer" className="btn btn-primary btn-sm">
          {t("nav.prayer.all")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 sm:p-6">
      <div>
        <h1 className="text-2xl font-bold text-primary font-heading">{lesson.title}</h1>
        <p className="text-base-content/70 mt-1">{lesson.summary}</p>
      </div>

      <ol className="card bg-base-100 border-base-300 list-decimal space-y-2 border p-4 sm:p-6 pl-8 sm:pl-10">
        {lesson.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <Link to="/prayer" className="link link-primary text-sm">
        ← {t("nav.prayer.all")}
      </Link>
    </div>
  );
};

export default PrayerDetail;
