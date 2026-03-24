import react from "@astrojs/react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://aqurius-osuszanie.pl",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      port: 8080,
      hmr: { overlay: false },
    },
  },
});
