import path from "path";
import fs from "fs";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  // server: {
  //   host: "127.0.0.1",
  //   port: 80,
  // },
  head: {
    titleTemplate: "HcRaid",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A Minecraft multiplayer network that connects you with your friends in real-time. Party up and play games with your friends with ease.",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js",
      },
      {
        src: "https://kit.fontawesome.com/1250b98b47.js",
      },
      {
        src:
          "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: "~assets/styles/client.css",
    },
    {
      src: "~assets/styles/header.css",
    },
    {
      src: "~assets/styles/responsive.css",
    },
    {
      src: "simplemde/dist/simplemde.min.css",
    },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/components",
    "~/plugins/inject",
    "~/plugins/json-viewer",
    "~/plugins/timeago",
    "~/plugins/vuelidate",
    "~/plugins/clipboard",
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/markdownit",
  ],
  googleAnalytics: {
    id: "G-ZDVDCB4XSB",
  },
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    xhtmlOut: false,
    linkify: true,
    breaks: false,
    use: [
      "markdown-it-div",
      "markdown-it-imsize",
      // 'markdown-it-attrs'
    ],
    injected: true,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://129.213.49.0:7246/api/",
    // baseURL: 'http://evilblock.net/api',
    progress: true,
    https: false,
  },
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/guide
   */
  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "access",
          maxAge: 60,
        },
        refreshToken: {
          property: "refresh",
          data: "refresh",
          maxAge: 60 * 60 * 24,
          required: true,
        },
        user: {
          property: "user",
        },
        endpoints: {
          login: {
            url: "/token/",
            method: "post",
            propertyName: "access",
          },
          refresh: {
            url: "/token/refresh/",
            method: "post",
            propertyName: "refresh",
          },
          user: {
            url: "/token/user/",
            method: "get",
            propertyName: "user",
          },
          logout: {
            url: "/token/logout/",
            method: "post",
          },
          home: false,
        },
      },
    },
  },
  router: {
    extendRoutes(routes, resolve) {
      // routes.push(
      //     {
      //         name: "forums-thread-slug",
      //         path: "/forums/:thread?/:slug?",
      //         component: resolve(__dirname, 'pages/forums/_thread/_slug.vue')
      //     }
      // )
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: "empty",
      };
      config.devServer = {
        clientLogLevel: "silent",
      };
    },
    hotMiddleware: {
      client: {
        overlay: false,
      },
    },
  },
};
