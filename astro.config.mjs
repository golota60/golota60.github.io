import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import wasm from "vite-plugin-wasm";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://golota60.github.io",
  integrations: [mdx(), sitemap(), solidJs(), tailwind()],
  vite: {
    plugins: [wasm()],
  },
});
