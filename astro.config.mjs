import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://grandbleuyachts.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
