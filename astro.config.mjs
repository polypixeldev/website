import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
  // TODO: set to my site url
  site: "http://localhost:3000",
});
