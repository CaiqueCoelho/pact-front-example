import { defineConfig } from "cypress";
const pactCypressPlugin = require('@pactflow/pact-cypress-adapter/dist/plugin')
const fs = require('fs')

export default defineConfig({
  "env": {
        "headersBlocklist": ["access-control-allow-origin"]
    },
  e2e: {
    setupNodeEvents(on, config) {
      pactCypressPlugin(on, config, fs)
      // implement node event listeners here
    },
    "env": {
        "headersBlocklist": ["access-control-allow-origin"]
    }
  },
});
