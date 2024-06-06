import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.otf"],
  server: {
    port: 3000,
    hmr: {
      overlay: false
    }
  }
});
