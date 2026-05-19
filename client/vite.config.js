// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     historyApiFallback: true,  // ← add this
//   },
// })
/**
 * vite.config.js — Recommended Performance Config
 * ─────────────────────────────────────────────────
 * Drop this into your project root (or merge with existing config).
 * These settings produce the best Lighthouse scores without
 * changing any UI.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    /* ── Code splitting ─────────────────────────
     * Each async import (React.lazy) becomes its
     * own chunk, reducing initial JS parse time.
     */
    rollupOptions: {
      output: {
        manualChunks: {
          /* React runtime in its own chunk — cached
           * across deploys if the version hasn't changed */
          "vendor-react": ["react", "react-dom"],
          /* Router in its own chunk */
          "vendor-router": ["react-router-dom"],
        },
      },
    },

    /* ── Minification ───────────────────────────
     * esbuild (default) is ~20× faster than terser.
     * Switch to "terser" only if you need advanced
     * dead-code elimination.
     */
    minify: "esbuild",

    /* ── Chunk size warning threshold ──────────
     * Warn if any chunk exceeds 500 KB (gzipped
     * chunks over ~100 KB hurt Time to Interactive).
     */
    chunkSizeWarningLimit: 500,

    /* ── Asset inlining threshold ───────────────
     * Inline assets < 4 KB as base64 (saves HTTP
     * round-trips for tiny icons/fonts).
     */
    assetsInlineLimit: 4096,

    /* ── Source maps ─────────────────────────────
     * Disable in production — source maps double
     * download size and expose code.
     */
    sourcemap: false,
  },

  /* ── Dev server ──────────────────────────────
   * These don't affect production scores but
   * speed up local development.
   */
  server: {
    port: 3000,
    open: true,
  },
});