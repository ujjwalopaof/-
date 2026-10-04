import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import propAdjustmentPlugin from './vite-prop-adjustment-plugin.ts'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), propAdjustmentPlugin(), svgr({ svgrOptions: { typescript: false } }), react()],
  server: { host: '0.0.0.0', port: 3000, allowedHosts: true },
})
