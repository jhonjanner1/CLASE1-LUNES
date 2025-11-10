import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/CLASE1-LUNES/", // Cambiado para Netlify
  build: {
    outDir: "build", // Cambia la carpeta de salida a "build"
  },
});
