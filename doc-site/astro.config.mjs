import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind'; // ✅ la bonne intégration Astro

export default defineConfig({
  integrations: [react(), tailwind()],
});
