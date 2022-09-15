const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [{ removeViewBox: false }],
        },
      });
  },
  pluginOptions: {
    i18n: {
      locale: 'pt-br',
      fallbackLocale: 'pt-br',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData:
          '@import "@/scss/_animations.scss"; @import "@/scss/_variables.scss";',
      },
    },
  },
});
