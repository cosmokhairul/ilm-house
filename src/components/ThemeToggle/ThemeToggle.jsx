import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";

const OPTIONS = [
  { mode: "light", labelKey: "theme.light", Icon: FiSun },
  { mode: "dark", labelKey: "theme.dark", Icon: FiMoon },
  { mode: "system", labelKey: "theme.system", Icon: FiMonitor },
];

const ThemeToggle = () => {
  const { t } = useTranslation();
  const { mode, resolvedTheme, setTheme } = useTheme();
  const CurrentIcon = resolvedTheme === "dark" ? FiMoon : FiSun;

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle btn-sm sm:btn-md"
        aria-label={t("theme.toggleLabel")}
      >
        <CurrentIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu menu-sm bg-base-200 rounded-box z-10 mt-3 w-40 p-2 shadow"
      >
        {OPTIONS.map(({ mode: optionMode, labelKey, Icon }) => (
          <li key={optionMode}>
            <button
              type="button"
              className={mode === optionMode ? "active" : ""}
              onClick={() => setTheme(optionMode)}
            >
              <Icon className="h-4 w-4" />
              {t(labelKey)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeToggle;
