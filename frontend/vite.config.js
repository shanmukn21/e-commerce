import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const backendUrl = process.env.NODE_ENV === 'production' 
  ? 'https://ecmrc.onrender.com'
  : 'http://localhost:5000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": backendUrl,
      "/uploads/": backendUrl,
    },
  },
});
