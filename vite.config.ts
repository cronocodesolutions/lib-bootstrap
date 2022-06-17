import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: `./src/index.ts`,
      name: 'index',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // NOTE: external dependencies to ignore from library
      // external: ['react'],
      // output: {
      //   globals: {
      //     react: 'React',
      //   },
      // },
    },
  },
});
