// vite.config.js
import { defineConfig } from "file:///D:/Dropbox/Dropbox/coding/02-hexschool-course/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/week8-layout-vite-bs/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///D:/Dropbox/Dropbox/coding/02-hexschool-course/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/week8-layout-vite-bs/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///D:/Dropbox/Dropbox/coding/02-hexschool-course/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/week8-layout-vite-bs/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///D:/Dropbox/Dropbox/coding/02-hexschool-course/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/week8-layout-vite-bs/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/Dropbox/Dropbox/coding/02-hexschool-course/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/week8-layout-vite-bs/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/2023-layout-bootcamp-week8/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative(
            "pages",
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEcm9wYm94XFxcXERyb3Bib3hcXFxcY29kaW5nXFxcXDAyLWhleHNjaG9vbC1jb3Vyc2VcXFxcMjAyM1x1NTIwN1x1NzI0OFx1NzZGNFx1NjRBRFx1NzNFRFxcXFx3ZWVrOC1sYXlvdXQtdml0ZS1ic1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRHJvcGJveFxcXFxEcm9wYm94XFxcXGNvZGluZ1xcXFwwMi1oZXhzY2hvb2wtY291cnNlXFxcXDIwMjNcdTUyMDdcdTcyNDhcdTc2RjRcdTY0QURcdTczRURcXFxcd2VlazgtbGF5b3V0LXZpdGUtYnNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Ryb3Bib3gvRHJvcGJveC9jb2RpbmcvMDItaGV4c2Nob29sLWNvdXJzZS8yMDIzJUU1JTg4JTg3JUU3JTg5JTg4JUU3JTlCJUI0JUU2JTkyJUFEJUU3JThGJUFEL3dlZWs4LWxheW91dC12aXRlLWJzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlRWpzUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tZWpzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InO1xuXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XG5cbmZ1bmN0aW9uIG1vdmVPdXRwdXRQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21vdmUtb3V0cHV0JyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgYXBwbHk6ICdidWlsZCcsXG4gICAgYXN5bmMgZ2VuZXJhdGVCdW5kbGUob3B0aW9ucywgYnVuZGxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGZpbGVOYW1lIGluIGJ1bmRsZSkge1xuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgncGFnZXMvJykpIHtcbiAgICAgICAgICBjb25zdCBuZXdGaWxlTmFtZSA9IGZpbGVOYW1lLnNsaWNlKCdwYWdlcy8nLmxlbmd0aCk7XG4gICAgICAgICAgYnVuZGxlW2ZpbGVOYW1lXS5maWxlTmFtZSA9IG5ld0ZpbGVOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gYmFzZSBcdTc2ODRcdTVCRUJcdTZDRDVcdUZGMUFcbiAgLy8gYmFzZTogJy9SZXBvc2l0b3J5IFx1NzY4NFx1NTQwRFx1N0EzMS8nXG4gIGJhc2U6ICcvMjAyMy1sYXlvdXQtYm9vdGNhbXAtd2VlazgvJyxcbiAgcGx1Z2luczogW1xuICAgIGxpdmVSZWxvYWQoWycuL2xheW91dC8qKi8qLmVqcycsICcuL3BhZ2VzLyoqLyouZWpzJywgJy4vcGFnZXMvKiovKi5odG1sJ10pLFxuICAgIFZpdGVFanNQbHVnaW4oKSxcbiAgICBtb3ZlT3V0cHV0UGx1Z2luKCksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIC8vIFx1NTU1Rlx1NTJENSBzZXJ2ZXIgXHU2NjQyXHU5ODEwXHU4QTJEXHU5NThCXHU1NTVGXHU3Njg0XHU5ODAxXHU5NzYyXG4gICAgb3BlbjogJ3BhZ2VzL2luZGV4Lmh0bWwnLFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIGdsb2JcbiAgICAgICAgICAuc3luYygncGFnZXMvKiovKi5odG1sJylcbiAgICAgICAgICAubWFwKChmaWxlKSA9PiBbXG4gICAgICAgICAgICBwYXRoLnJlbGF0aXZlKFxuICAgICAgICAgICAgICAncGFnZXMnLFxuICAgICAgICAgICAgICBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gcGF0aC5leHRuYW1lKGZpbGUpLmxlbmd0aClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgXSlcbiAgICAgICksXG4gICAgfSxcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0YyxTQUFTLG9CQUFvQjtBQUN6ZSxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFDakIsU0FBUyxZQUFZO0FBRXJCLE9BQU8sZ0JBQWdCO0FBTnNQLElBQU0sMkNBQTJDO0FBUTlULFNBQVMsbUJBQW1CO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU0sZUFBZSxTQUFTLFFBQVE7QUFDcEMsaUJBQVcsWUFBWSxRQUFRO0FBQzdCLFlBQUksU0FBUyxXQUFXLFFBQVEsR0FBRztBQUNqQyxnQkFBTSxjQUFjLFNBQVMsTUFBTSxTQUFTLE1BQU07QUFDbEQsaUJBQU8sUUFBUSxFQUFFLFdBQVc7QUFBQSxRQUM5QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBRzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLFdBQVcsQ0FBQyxxQkFBcUIsb0JBQW9CLG1CQUFtQixDQUFDO0FBQUEsSUFDekUsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsRUFDbkI7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FDRyxLQUFLLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUztBQUFBLFVBQ2IsS0FBSztBQUFBLFlBQ0g7QUFBQSxZQUNBLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxLQUFLLFFBQVEsSUFBSSxFQUFFLE1BQU07QUFBQSxVQUN2RDtBQUFBLFVBQ0EsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
