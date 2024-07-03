import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; 
import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  edgeMiddleware: true,
  integrations: [tailwind(), react],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing:{
      prefixDefaultLocale: false
    }
  }
});