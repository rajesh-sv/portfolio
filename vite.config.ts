import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: "Geist",
            src: "./src/assets/fonts/geist/sans/*.woff2",
            transform(font) {
              if (font.basename === "Geist-Thin") {
                font.weight = 100;
              } else if (font.basename === "Geist-UltraLight") {
                font.weight = 200;
              } else if (font.basename === "Geist-Light") {
                font.weight = 300;
              } else if (font.basename === "Geist-Regular") {
                font.weight = 400;
              } else if (font.basename === "Geist-Medium") {
                font.weight = 500;
              } else if (font.basename === "Geist-SemiBold") {
                font.weight = 600;
              } else if (font.basename === "Geist-Bold") {
                font.weight = 700;
              } else if (font.basename === "Geist-Black") {
                font.weight = 800;
              } else {
                font.weight = 900;
              }
              return font;
            },
          },
          {
            name: "GeistMono",
            src: "./src/assets/fonts/geist/mono/*.woff2",
            transform(font) {
              if (font.basename === "GeistMono-Thin") {
                font.weight = 100;
              } else if (font.basename === "GeistMono-UltraLight") {
                font.weight = 200;
              } else if (font.basename === "GeistMono-Light") {
                font.weight = 300;
              } else if (font.basename === "GeistMono-Regular") {
                font.weight = 400;
              } else if (font.basename === "GeistMono-Medium") {
                font.weight = 500;
              } else if (font.basename === "GeistMono-SemiBold") {
                font.weight = 600;
              } else if (font.basename === "GeistMono-Bold") {
                font.weight = 700;
              } else if (font.basename === "GeistMono-Black") {
                font.weight = 800;
              } else {
                font.weight = 900;
              }
              return font;
            },
          },
        ],
        preload: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
