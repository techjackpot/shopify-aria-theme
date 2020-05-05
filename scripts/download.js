const themeKit = require('@shopify/themekit');

themeKit.command('download', {
  env: process.env.SHOPIFY_ENV || 'development',
  config: 'src/config.yml',
  files: [
    'config/settings_data.json',
  ],
});
