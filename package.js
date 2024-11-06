Package.describe({
  name: 'mrspark:vue-typescript-babel',
  version: '1.0.0',
  summary: 'Add typescript support for vue components',
  git: 'https://github.com/nathantreid/meteor-vue-typescript-babel',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "vue-component-typescript-babel",
  use: [
    'ecmascript@0.16.9',
    'babel-compiler@7.11.1',
  ],
  sources: [
    'compiler.js',
    'vue-typescript.js',
  ],
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.4');
  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('mrspark:npm-check@1.0.0');
});
