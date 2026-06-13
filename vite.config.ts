import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O site publicado é HTML estático (index.html, ecom.html, profissionais.html
// + public/ e src/Logos/), servido como está pelo Vercel (ver vercel.json).
// Esta config existe apenas para o servidor de desenvolvimento (npm run dev).
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
});
