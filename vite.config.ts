import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { configDefaults } from "vitest/config";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';


export default defineConfig({
  plugins: [
    viteReact(),
    TanStackRouterVite()],
   css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/__tests__/setup.ts"],
    exclude: [...configDefaults.exclude],
  },
  server: {
    port: 3000,
  },
});
