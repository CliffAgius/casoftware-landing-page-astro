import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default {
  buildOptions: {
    site: 'https://kind-bush-0d0d21403.4.azurestaticapps.net',
  },
  defineConfig: {
    integrations: [tailwind()],
  }
};
