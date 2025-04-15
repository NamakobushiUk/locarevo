import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/locarevo/', // ✅ ここをリポジトリ名に合わせて変更！

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
