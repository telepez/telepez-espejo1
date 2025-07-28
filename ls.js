const translations = {
  es: {
    description: "Una lista gratuita de IPTV enfocado en canales de Latinoamérica y Sudamérica.",
    github: "GitHub",
    mirrors: "Repositorios espejos",
    discord: "Servidor de Discord",
    disclaimer: "Descargo de Responsabilidad"
  },
  en: {
    description: "A free IPTV list focused on Latin American and South American channels.",
    github: "GitHub",
    mirrors: "Mirror Repositories",
    discord: "Discord Server",
    disclaimer: "Disclaimer"
  }
};

function updateLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });const translations = {
  es: {
    description: "Una lista gratuita de IPTV enfocado en canales de Latinoamérica y Sudamérica.",
    github: "GitHub",
    espejos: "Repositorios espejos:",
    discord: "Servidor de Discord",
    ddr: "Descargo de Responsabilidad",
  },
  en: {
    description: "A free IPTV list focused on Latin American and South American channels.",
    github: "GitHub",
    espejos: "Mirrors",
    discord: "Discord server",
    ddr: "Disclaimer",
  }
};

function updateLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

const savedLang = localStorage.getItem("lang") || "es";
document.getElementById("languageSwitcher").value = savedLang;
updateLanguage(savedLang);

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("lang", lang);
  updateLanguage(lang);
});

}

const savedLang = localStorage.getItem("lang") || "es";
document.getElementById("languageSwitcher").value = savedLang;
updateLanguage(savedLang);

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("lang", lang);
  updateLanguage(lang);
});
