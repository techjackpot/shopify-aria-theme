const themeKit = require('@shopify/themekit');

themeKit.command('watch', {
  env: process.env.SHOPIFY_ENV || 'development',
  config: 'src/config.yml',
  ignores: 'src/themekit_ignores',
  "allow-live": true,
});
