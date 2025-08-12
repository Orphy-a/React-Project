import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      includeAssets: ["apple-touch-icon.png"],
      manifest: {
        name: "테스트용 리액트앱",
        short_name: "MyApp",
        description: "설명",
        theme_color: "#000000",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "screenshots/screenshot.png", // public/screenshots 폴더에 실제 존재
            sizes: "850x567",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
});
