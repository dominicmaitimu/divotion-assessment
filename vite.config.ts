import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Material+Symbols+Outlined',
          },
          {
            name: 'Fjalla+One',
            styles: 'wght@400',
          },
          {
            name: 'Roboto',
            styles: 'wght@300;400',
          },
        ],
      },
    }),
  ],
});
