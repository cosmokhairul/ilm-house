import { useCallback, useEffect, useState } from "react";

export const THEME_STORAGE_KEY = "ilmghar-theme";

const DAISY_THEME = {
  light: "ilmghar-light",
  dark: "ilmghar-dark",
};

const getSystemPrefersDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const applyTheme = (mode) => {
  const root = document.documentElement;
  if (mode === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", DAISY_THEME[mode]);
  }
};

const readStoredMode = () => {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
};

export const useTheme = () => {
  const [mode, setMode] = useState(readStoredMode);
  const [systemPrefersDark, setSystemPrefersDark] = useState(getSystemPrefersDark);

  useEffect(() => {
    applyTheme(mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event) => setSystemPrefersDark(event.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const setTheme = useCallback((nextMode) => setMode(nextMode), []);

  const resolvedTheme = mode === "system" ? (systemPrefersDark ? "dark" : "light") : mode;

  return { mode, resolvedTheme, setTheme };
};
