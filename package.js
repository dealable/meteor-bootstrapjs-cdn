Package.describe({
  name: 'viacdn:bootstrapjs',
  summary: 'Only the Bootstrap JS via CDN for Meteor',
  version: '3.3.0',
  git: 'https://github.com/dealable/meteor-bootstrapjs-cdn.git'
});

Package.onUse(function(api) {
  api.use(['jquery@1.11.2']);
  api.addFiles('load.js','client');
});
