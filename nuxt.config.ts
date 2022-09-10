import { NuxtConfig } from "@nuxt/types";

const NODE_ENV = process.env.NODE_ENV;

const routerBase =
  NODE_ENV === "github"
    ? {
        router: {
          base: "/postchild/",
        },
      }
    : {};

const config: NuxtConfig = {
  head: {
    titleTemplate: "%s",
    title: "Postchild • 一个API请求构建工具",
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
          "模仿 Postman，搭建了一个 API 请求构建工具，帮助您更高效的开发和测试。",
      },
      {
        name: "X-UA-Compatible",
        content: "IE=edge, chrome=1",
      },
      { name: "baidu-site-verification", content: "yHZaLQtn7p" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  server: {
    port: 3000,
    host: "0.0.0.0",
  },

  ...routerBase,

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
  srcDir: "src",
  build: {
    extend(config, { isDev }) {
      if (NODE_ENV === "web") {
        config.target = "web";
      }
      if (NODE_ENV === "development") {
        config.target = "electron-renderer";
      }
    },
  },
  buildModules: [
    // ts
    "@nuxt/typescript-build",

    "@nuxtjs/dotenv",
  ],
  env: {
    NODE_ENV: NODE_ENV,
  },
  plugins: [
    "~/plugins/ant-design-vue",
    { src: "~/plugins/vue-codemirror", ssr: false },
  ],
  serverMiddleware: [
    {
      path: "/middleware",
      handler: "~/server-middleware/proxy.ts",
      prefix: false,
    },
  ],
};

export default config;
