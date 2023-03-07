import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: 'host-app',
      remotes: {
          remote_app: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ['vue']
  }),
  vue()
  ],
})
