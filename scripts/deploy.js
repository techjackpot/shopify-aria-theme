const themeKit = require('@shopify/themekit');

themeKit.command('deploy', {
  env: 'production',
  config: 'src/config.yml',
  nodelete: true,
});
