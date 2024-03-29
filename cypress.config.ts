import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    video: false,
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);

      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);

      return config;
    },
  },
  video: false,
  // experimentalFetchPolyfill: true,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: false,
});
