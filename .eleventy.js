module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  eleventyConfig.addFilter("humanDate", (value) => {
    const date = value instanceof Date ? value : new Date(value);

    return new Intl.DateTimeFormat("cs-CZ", {
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
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
  };
};
