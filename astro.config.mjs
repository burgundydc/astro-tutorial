import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrotutorial45464674768.netlify.app',
  integrations: [alpinejs(), sitemap()],
  output: "server",
  adapter: netlify()
});