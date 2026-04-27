module.exports = function (eleventyConfig) {
  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/";
  const labels = {
    cs: {
      articles: "Přehled článků",
      newerPost: "Novější článek",
      olderPost: "Starší článek",
      postNavigation: "Navigace mezi články",
      siteDescription: "Průběžné reporty o tom, co se v projektu děje, kam se práce posouvá a co z toho plyne pro další postup.",
      siteSubtitle: "Aktuální zprávy z bojiště pro ty, koho to zajímá.",
      siteTitle: "HAIFA - Helios AI Factory",
      switchLabel: "Jazyk",
    },
    en: {
      articles: "Article Overview",
      newerPost: "Newer Article",
      olderPost: "Older Article",
      postNavigation: "Article navigation",
      siteDescription: "Ongoing reports on what is happening in the project, where the work is moving, and what it means for the next steps.",
      siteSubtitle: "Current field notes for people who want to follow the work.",
      siteTitle: "HAIFA - Helios AI Factory",
      switchLabel: "Language",
    },
  };

  const getLang = (data) => data?.lang || "cs";

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  eleventyConfig.addFilter("url", (value) => {
    if (!value) {
      return pathPrefix;
    }

    const stringValue = String(value);

    if (
      stringValue.startsWith("http://") ||
      stringValue.startsWith("https://") ||
      stringValue.startsWith("mailto:") ||
      stringValue.startsWith("#")
    ) {
      return stringValue;
    }

    const normalizedPrefix = pathPrefix === "/" ? "/" : `/${pathPrefix.replace(/^\/+|\/+$/g, "")}/`;
    const normalizedPath = stringValue.startsWith("/") ? stringValue.slice(1) : stringValue;

    if (normalizedPrefix === "/") {
      return `/${normalizedPath}`.replace(/\/+/g, "/");
    }

    return `${normalizedPrefix}${normalizedPath}`.replace(/\/+/g, "/");
  });

  eleventyConfig.addFilter("humanDate", (value, lang = "cs") => {
    const date = value instanceof Date ? value : new Date(value);
    const locale = lang === "en" ? "en-US" : "cs-CZ";

    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  });

  eleventyConfig.addFilter("isoWeekLabel", (value) => {
    if (!value) {
      return "";
    }

    return String(value).toUpperCase();
  });

  eleventyConfig.addFilter("homeUrl", (lang = "cs") => (lang === "en" ? "/en/" : "/"));

  eleventyConfig.addFilter("otherLang", (lang = "cs") => (lang === "en" ? "cs" : "en"));

  eleventyConfig.addFilter("postsByLang", (collection, lang = "cs") => {
    if (!Array.isArray(collection)) {
      return [];
    }

    return collection.filter((item) => getLang(item.data) === lang);
  });

  eleventyConfig.addFilter("t", (key, lang = "cs") => labels[lang]?.[key] || labels.cs[key] || key);

  eleventyConfig.addFilter("translation", (collection, translationKey, lang = "cs") => {
    if (!Array.isArray(collection) || !translationKey) {
      return null;
    }

    return collection.find((item) => item.data.translationKey === translationKey && getLang(item.data) === lang) || null;
  });

  eleventyConfig.addFilter("adjacentPosts", (collection, currentUrl) => {
    if (!Array.isArray(collection) || !currentUrl) {
      return { newer: null, older: null };
    }

    const index = collection.findIndex((item) => item.url === currentUrl);

    if (index === -1) {
      return { newer: null, older: null };
    }

    return {
      older: index > 0 ? collection[index - 1] : null,
      newer: index < collection.length - 1 ? collection[index + 1] : null,
    };
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix,
  };
};
