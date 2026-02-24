import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  
  // 💡 THIS MUST MATCH YOUR GITHUB PAGES SUB-PATH
  base: "/portfolio/"
})
