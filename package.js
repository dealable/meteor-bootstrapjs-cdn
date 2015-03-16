Package.describe({
  name: 'viacdn:bootstrap',
  summary: 'Bootstrap via CDN for Meteor',
  version: '0.3.2',
  git: 'https://github.com/dealable/meteor-bootstrap-cdn.git'
});

Package.onUse(function(api) {
  api.use(['jquery@1.11.2']);
  api.addFiles('load.js','client');
});
