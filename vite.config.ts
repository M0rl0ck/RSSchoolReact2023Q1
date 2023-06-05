/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="cypress" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      ignored: ["/coverage/"],
    },
  },
});
