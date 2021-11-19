import { NuxtConfig } from "@nuxt/types";

const env = process.env.NODE_ENV;

const config: NuxtConfig = {
  buildDir: "dist/.nuxt",
  generate: { dir: "dist/renderer" },
  css: [
    "~/assets/main.scss",
    "codemirror/lib/codemirror.css",
    "codemirror/theme/monokai.css",
    "codemirror/addon/hint/show-hint.css",
    "codemirror/addon/dialog/dialog.css",
    "codemirror/addon/fold/foldgutter.css",
  ],
  srcDir: "src/renderer",
  build: {
    extend(config, { isDev }) {
      if (env === "web") {
        config.target = "web";
      }
      if (env === "development") {
        config.target = "electron-renderer";
      }
    },
  },
  buildModules: [
    // ts
    "@nuxt/typescript-build",
  ],
  plugins: [
    "~/plugins/ant-design-vue",
    { src: "~/plugins/vue-codemirror", ssr: false },
  ],
};

export default config;
