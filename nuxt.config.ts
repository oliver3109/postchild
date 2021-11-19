import { NuxtConfig } from "@nuxt/types";

const env = process.env.NODE_ENV;

const config: NuxtConfig = {
  head: {
    titleTemplate: "%s",
    title: "Postchild • 一个免费好看的API请求构建工具",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "postchild, postman, api, request, tool, test tool, api test tool, similar postman, postman instead, 接口测试工具, API测试, 类似postman, postman代替, 好用的接口测试工具",
      },
      {
        hid: "description",
        name: "description",
        content:
          "模仿 Postman，搭建了一个免费好看的 API 请求构建工具，帮助您更高效的开发和测试。",
      },
      {
        name: "X-UA-Compatible",
        content: "IE=edge, chrome=1",
      },
      { name: "baidu-site-verification", content: "yHZaLQtn7p" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  router: {
    base: "/postchild/",
  },

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
