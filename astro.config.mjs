import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import GalaxyTheme from "@futurethemes/galaxy"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    GalaxyTheme({
      siteName: "My Awesome Site!",
      logo: {
        src: './src/assets/logo.svg',
      },
      starSpeed: "slow",
    }),
  ]
});