import { defineConfig } from "cypress";

export default defineConfig({
  blockHosts: ["www.google-analytics.com", "sockjs*", "countries*"],

  env: {
    TAGS: "not @ignore",
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://petstore.swagger.io/v2/pet/",
  },
});
