import path from "node:path";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";

const PORT = 3000;

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
  },
  server: {
    port: PORT,
  },
});
