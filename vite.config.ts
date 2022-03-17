import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; // 添加这一句

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
