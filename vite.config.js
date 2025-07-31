import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import federation from "@mxsbc/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: "remoteApp",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./App": {
    //       import: "./src/App.jsx",
    //       dontAppendStylesToHead: true,
    //     },
    //   },
    //   shared: ["react", "react-dom"],
    // }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
