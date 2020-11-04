import pkg from "./package";

module.exports = {
  server: {
    port: 4000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  head: {
    title: "Mersedes Benz",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href:
        "https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap",
      }
    ]
  },

  loading: { color: "#00A3FF" },

  css: [
    { src: "~/assets/styles/common.scss", lang: "scss" },
  ],

  plugins: [
  ],

  modules: ["@nuxtjs/svg", "@nuxtjs/axios", "@nuxtjs/proxy"],

  axios: {
    proxy: true
  },

  proxy: {
    "/api/": process.env["BE_URL"] || "http://localhost:8000/"
  },

  buildModules: [["@nuxtjs/moment"]],

  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
