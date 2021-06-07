import { defineConfig } from "vite";

export default defineConfig({
  root: "./assets",
  base: "/assets/",
  build: {
    manifest: true,
    assetsDir: "",
    outDir: "../public/assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      input: {
        "main.js": "./assets/js/main.js",
      },
    },
  },
});
