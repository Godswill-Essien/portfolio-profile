
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import translations from "@/lib/translations";

const LanguageContext = createContext(null);

const SUPPORTED_LANGUAGES = [
  "en",
  "fr",
  "es",
  "de",
  "pt",
  "zh",
];

function getBrowserLanguage() {
  if (typeof navigator === "undefined") {
    return "en";
  }

  const browserLanguages =
    navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

  for (const language of browserLanguages) {
    if (!language) continue;

    const shortLanguage = language
      .toLowerCase()
      .split("-")[0];

    if (
      SUPPORTED_LANGUAGES.includes(
        shortLanguage
      )
    ) {
      return shortLanguage;
    }
  }

  return "en";
}

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage =
    window.localStorage.getItem(
      "portfolio-language"
    );

  if (
    savedLanguage &&
    SUPPORTED_LANGUAGES.includes(savedLanguage)
  ) {
    return savedLanguage;
  }

  return getBrowserLanguage();
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] =
    useState("en");

  const [ready, setReady] = useState(false);

  /*
   * Initialize language on the client.
   */
  useEffect(() => {
    const initialLanguage =
      getInitialLanguage();

    setLanguageState(initialLanguage);
    setReady(true);
  }, []);

  /*
   * Keep browser language and localStorage
   * synchronized with the active language.
   */
  useEffect(() => {
    if (!ready) return;

    window.localStorage.setItem(
      "portfolio-language",
      language
    );

    document.documentElement.lang = language;
  }, [language, ready]);

  /*
   * Change language.
   */
  const changeLanguage = useCallback(
    (newLanguage) => {
      if (
        typeof newLanguage !== "string"
      ) {
        return;
      }

      const normalizedLanguage =
        newLanguage
          .toLowerCase()
          .split("-")[0];

      if (
        !SUPPORTED_LANGUAGES.includes(
          normalizedLanguage
        )
      ) {
        console.warn(
          `Unsupported language: ${newLanguage}`
        );

        return;
      }

      setLanguageState(
        normalizedLanguage
      );
    },
    []
  );

  /*
   * Translation helper.
   *
   * Example:
   * t("nav.home")
   * t("hero.greeting")
   * t("about.paragraph2")
   */
  const t = useCallback(
    (path) => {
      if (
        typeof path !== "string" ||
        !path.trim()
      ) {
        return "";
      }

      const keys = path.split(".");

      const getValue = (languageCode) => {
        let value =
          translations[languageCode];

        for (const key of keys) {
          value = value?.[key];
        }

        return value;
      };

      /*
       * First try the selected language.
       */
      const translatedValue =
        getValue(language);

      if (
        translatedValue !== undefined &&
        translatedValue !== null
      ) {
        return translatedValue;
      }

      /*
       * If the selected language doesn't have
       * the translation, fall back to English.
       */
      const englishValue =
        getValue("en");

      if (
        englishValue !== undefined &&
        englishValue !== null
      ) {
        return englishValue;
      }

      /*
       * Last fallback: show the key itself.
       */
      return path;
    },
    [language]
  );

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      t,
      languages: SUPPORTED_LANGUAGES,
      ready,
    }),
    [
      language,
      changeLanguage,
      t,
      ready,
    ]
  );

  return (
    <LanguageContext.Provider
      value={contextValue}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context =
    useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}

