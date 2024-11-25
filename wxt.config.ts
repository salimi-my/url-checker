import { defineConfig } from "wxt";
import Unfonts from "unplugin-fonts/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react"],
  manifest: {
    host_permissions: ["<all_urls>"],
  },
  vite: () => ({
    plugins: [
      Unfonts({
        custom: {
          families: [
            {
              name: "Geist",
              src: "./src/assets/fonts/geist/*.woff2",
            },
          ],
        },
      }),
    ],
  }),
});
