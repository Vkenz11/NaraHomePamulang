import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap'; // [1] Import the plugin

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      Sitemap({
        hostname: 'https://narahomepamulang.com', // [2] REPLACE WITH YOUR DEPLOYED VERCEL URL
        // readable: true, // Optional: Makes the xml file human-readable
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
