import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows access from external devices
    port: 3000, // Make sure to set the port you want to use
  },
});
