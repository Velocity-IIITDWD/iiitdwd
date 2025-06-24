const fs = require("fs");

/**
 * Post-build script to fix sitemap and robots.txt files
 *
 * Issue: next-sitemap copies files from public to out directory BEFORE generating
 * the updated sitemaps, resulting in outdated files in the out directory.
 *
 * Solution: Copy the freshly generated robots.txt and sitemap*.xml files
 * from public to out directory after the build process.
 *
 * Note: Using Node.js fs module for cross-platform compatibility
 * (avoids shell-specific commands like cp/mv that differ between bash/pwsh)
 */

fs.readdirSync("./public").forEach(file => {
  const sitemapRegex = new RegExp(/^sitemap.*\.xml$/);
  if (file === "robots.txt" || sitemapRegex.test(file)) {
    fs.copyFileSync(`./public/${file}`, `./out/${file}`);
    console.log(`Copied: ./public/${file} -> ./out/${file}`);
  }
});
