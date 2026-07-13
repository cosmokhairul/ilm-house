import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { FiCheck } from "react-icons/fi";
import { useContentData } from "../../hooks/useContentData";
import ArabicBlock from "../../components/ui/ArabicBlock";

const DuaBlock = ({ dua, t }) => (
  <div className="card bg-base-100 border-base-300 space-y-4 border p-4 sm:p-6 lg:p-8">
    <h2 className="font-heading text-lg font-bold text-primary">{dua.heading}</h2>
    {dua.context && <p className="text-base-content/80 text-sm leading-relaxed">{dua.context}</p>}

    <ArabicBlock className="text-xl sm:text-2xl">{dua.arabic}</ArabicBlock>
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

    {dua.extra && (
      <div className="border-base-300 space-y-4 border-t pt-4">
        <p className="text-base-content/80 text-sm leading-relaxed">{dua.extra.note}</p>
        <ArabicBlock className="text-lg sm:text-xl">{dua.extra.arabic}</ArabicBlock>
        <div>
          <p className="text-base-content/60 mb-1 text-sm">{t("content.pronunciation")}</p>
          <p className="italic">{dua.extra.pronunciation}</p>
        </div>
        <div>
          <p className="text-base-content/60 mb-1 text-sm">{t("content.translation")}</p>
          <p>{dua.extra.translation}</p>
        </div>
        <p className="text-base-content/50 text-xs">
          {t("content.reference")}: {dua.extra.reference}
        </p>
      </div>
    )}
  </div>
);

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

  const hasDetailedSteps = typeof lesson.steps?.[0] === "object";

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-4 sm:p-6 md:p-6 lg:max-w-3xl lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-primary font-heading">{lesson.title}</h1>
        <p className="text-base-content/70 mt-1">{lesson.summary}</p>
      </div>

      {lesson.intro && (
        <p className="text-base-content/80 leading-relaxed">{lesson.intro}</p>
      )}

      {lesson.fards && (
        <section className="card bg-base-100 border-base-300 space-y-3 border p-4 sm:p-6 lg:p-8">
          <h2 className="font-heading text-lg font-bold text-primary">{lesson.fardsHeading}</h2>
          {lesson.fardsIntro && (
            <p className="text-base-content/80 text-sm">{lesson.fardsIntro}</p>
          )}
          <ol className="list-decimal space-y-2 pl-6">
            {lesson.fards.map((fard, index) => (
              <li key={index}>{fard}</li>
            ))}
          </ol>
        </section>
      )}

      <section className="space-y-3">
        {lesson.stepsHeading && (
          <h2 className="font-heading text-lg font-bold text-primary">{lesson.stepsHeading}</h2>
        )}

        {hasDetailedSteps ? (
          <ol className="space-y-3">
            {lesson.steps.map((step, index) => (
              <li key={index} className="card bg-base-100 border-base-300 border p-4 sm:p-6">
                <p className="font-heading font-semibold text-primary">
                  {index + 1}. {step.title}
                </p>
                <p className="text-base-content/80 mt-1 text-sm leading-relaxed">{step.detail}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="card bg-base-100 border-base-300 list-decimal space-y-2 border p-4 sm:p-6 lg:p-8 pl-8 sm:pl-10">
            {lesson.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        )}
      </section>

      {lesson.dua && <DuaBlock dua={lesson.dua} t={t} />}

      {lesson.sunnahs && (
        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-primary">{lesson.sunnahsHeading}</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {lesson.sunnahs.map((sunnah, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <FiCheck className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <span>{sunnah}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {lesson.womenNotes && (
        <section className="card bg-base-100 border-base-300 space-y-3 border p-4 sm:p-6 lg:p-8">
          <h2 className="font-heading text-lg font-bold text-primary">
            {lesson.womenNotes.heading}
          </h2>
          <p className="text-base-content/80 text-sm">{lesson.womenNotes.intro}</p>
          <ul className="space-y-2">
            {lesson.womenNotes.items.map((item, index) => (
              <li key={index} className="text-sm">
                <span className="font-semibold">{item.title}:</span>{" "}
                <span className="text-base-content/80">{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {lesson.breakers && (
        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-primary">
            {lesson.breakers.heading}
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-sm">
            {lesson.breakers.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {lesson.requiredFor && (
        <section className="space-y-3">
          <h2 className="font-heading text-lg font-bold text-primary">
            {lesson.requiredFor.heading}
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-sm">
            {lesson.requiredFor.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <Link to="/prayer" className="link link-primary text-sm">
        ← {t("nav.prayer.all")}
      </Link>
    </div>
  );
};

export default PrayerDetail;
