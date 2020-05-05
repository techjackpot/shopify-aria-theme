const themeKit = require('@shopify/themekit');

themeKit.command('watch', {
  config: 'src/config.yml',
  ignores: 'src/themekit_ignores',
});
