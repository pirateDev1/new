import { defineConfig } from "vite"
import jsconfigPaths from "vite-jsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [jsconfigPaths()],
})
