import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chrislynde.ca',
  vite: {
    plugins: [tailwindcss()],
  },
});
