const themeKit = require('@shopify/themekit');

themeKit.command('deploy', {
  env: process.env.SHOPIFY_ENV || 'development',
  config: 'src/config.yml',
  // nodelete: true,
  ignoredFiles: [
    'config/settings_data.json',
    'sections/scratchpad/*',
    'sections/*.html',
    'snippets/scratchpad/*',
    'snippets/*.html',
  ],
  "allow-live": true,
});
