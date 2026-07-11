import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import PrayerIndex from "../pages/Prayer/PrayerIndex";
import PrayerDetail from "../pages/Prayer/PrayerDetail";
import SurahList from "../pages/Quran/SurahList";
import SurahDetail from "../pages/Quran/SurahDetail";
import DuaList from "../pages/Duas/DuaList";
import DuaDetail from "../pages/Duas/DuaDetail";
import HadithList from "../pages/Hadith/HadithList";
import HadithDetail from "../pages/Hadith/HadithDetail";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "prayer",
        children: [
          { index: true, Component: PrayerIndex },
          { path: ":lessonId", Component: PrayerDetail },
        ],
      },
      {
        path: "quran",
        children: [
          { index: true, Component: SurahList },
          { path: "popular", element: <SurahList filter="popular" /> },
          { path: ":surahId", Component: SurahDetail },
        ],
      },
      {
        path: "duas",
        children: [
          { index: true, Component: DuaList },
          { path: "daily", element: <DuaList filter="daily" /> },
          { path: "special", element: <DuaList filter="special" /> },
          { path: ":duaId", Component: DuaDetail },
        ],
      },
      {
        path: "hadith",
        children: [
          { index: true, Component: HadithList },
          { path: "topics", element: <HadithList filter="topics" /> },
          { path: "collections", element: <HadithList filter="collections" /> },
          { path: ":hadithId", Component: HadithDetail },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
