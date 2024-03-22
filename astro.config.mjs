import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs()],
  output: "server",
  adapter: netlify()
});