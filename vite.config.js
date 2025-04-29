import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5lv6hf-5173.csb.app"], // Add this line
  },
});
