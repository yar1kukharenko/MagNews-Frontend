import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      utils: '/src/utils',
      styles: '/src/styles',
      config: '/src/config',
      assets: '/src/assets',
      store: '/src/store',
    },
  },
});
