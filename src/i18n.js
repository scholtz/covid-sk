import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([a-z0-9]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

function defaultLanguage() {
  let lang = localStorage.getItem("lang");
  if (lang) {
    return lang;
  }

  var userLang = navigator.language || navigator.userLanguage;
  if (userLang.length >= 2 && userLang.substring(0, 2) == "sk") {
    lang = "sk";
    localStorage.setItem("lang", lang);
    return lang;
  }
  if (userLang.length >= 2 && userLang.substring(0, 2) == "cs") {
    lang = "cs";
    localStorage.setItem("lang", lang);
    return lang;
  }
  if (userLang.length >= 2 && userLang.substring(0, 2) == "en") {
    lang = "en";
    localStorage.setItem("lang", lang);
    return lang;
  }

  lang = process.env.VUE_APP_I18N_LOCALE || "sk";
  localStorage.setItem("lang", lang);
  return lang;
}

function fallbackLanguage() {
  // if (defaultLanguage() !== "en") return "en";
  return process.env.VUE_APP_I18N_FALLBACK_LOCALE || "sk";
}

export default new VueI18n({
  locale: defaultLanguage(),
  fallbackLocale: fallbackLanguage(),
  messages: loadLocaleMessages(),
});
