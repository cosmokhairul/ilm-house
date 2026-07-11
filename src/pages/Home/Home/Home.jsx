import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-primary">{t("app.name")} থিম প্রিভিউ</h1>
      <p className="text-base-content">
        এটি একটি সাময়িক প্রিভিউ — থিম, ফন্ট, কালার ও ভাষা যাচাইয়ের জন্য।
      </p>

      <ul className="flex flex-wrap gap-3 text-sm">
        <li className="badge badge-outline">{t("nav.home")}</li>
        <li className="badge badge-outline">{t("nav.prayer")}</li>
        <li className="badge badge-outline">{t("nav.quran")}</li>
        <li className="badge badge-outline">{t("nav.duas")}</li>
        <li className="badge badge-outline">{t("nav.hadith")}</li>
      </ul>

      <div className="flex flex-wrap gap-3">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>

      <div className="space-y-2">
        <p className="font-heading text-xl">হিন্দ শিলিগুড়ি হেডিং ফন্ট নমুনা</p>
        <p className="font-bengali">নোটো সান্স বাংলা — সাধারণ বাংলা টেক্সট নমুনা।</p>
        <p className="font-english">Cabin — English text sample for the site.</p>
        <p dir="rtl" className="font-arabic text-2xl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </div>
    </div>
  )
}

export default Home
