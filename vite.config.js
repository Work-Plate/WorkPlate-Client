import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// __dirname 설정
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    proxy: {
      // /ai 요청은 http://52.78.46.251:8000으로 라우팅
      "/ai": {
        target: "http://52.78.46.251:8000",
        changeOrigin: true, // 요청 헤더의 Origin을 타겟 서버로 변경
        rewrite: (path) => path.replace(/^\/ai/, ""), // /ai 경로 제거
      },
      // /api 요청은 http://52.78.46.251:8080으로 라우팅
      "/api": {
        target: "http://52.78.46.251:8080",
        changeOrigin: true, // 요청 헤더의 Origin을 타겟 서버로 변경
        rewrite: (path) => path.replace(/^\/api/, ""), // /api 경로 제거
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@apis": path.resolve(__dirname, "src/apis"),
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@linenow-types": path.resolve(__dirname, "src/lib/types"),
      "@interfaces": path.resolve(__dirname, "src/lib/interfaces"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
