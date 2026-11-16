import fs from "fs";

/**
 * Post-build script to fix sitemap and robots.txt files
 *
 * Issue: next-sitemap copies files from public to out directory BEFORE generating
 * the updated sitemaps, resulting in outdated files in the out directory.
 *
 * Solution: Copy the freshly generated robots.txt and sitemap*.xml files
 * from public to out directory after the build process, then remove them from public.
 *
 * Note: Using Node.js fs module for cross-platform compatibility
 * (avoids shell-specific commands like cp/mv that differ between bash/pwsh)
 */

if (fs.existsSync("./public")) {
  fs.readdirSync("./public").forEach(file => {
    const sitemapRegex = new RegExp(/^sitemap.*\.xml$/);
    if (file === "robots.txt" || sitemapRegex.test(file)) {
      if (fs.existsSync("./out")) {
        fs.copyFileSync(`./public/${file}`, `./out/${file}`);
        console.log(`Copied: ./public/${file} -> ./out/${file}`);
      }
      try {
        fs.unlinkSync(`./public/${file}`);
        console.log(`Removed from public: ./public/${file}`);
      } catch (err) {
        // ignore removal error
      }
    }
  });
}

