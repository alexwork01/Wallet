import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations";

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: cb => cb("en"),
  init: () => {},
  cacheUserLanguage: () => {}
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: "ua",
    fallbackLng: "en",
    debug: true,
    resources: translations
  });

export default i18next;
