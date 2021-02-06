module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/themes/default/_colors.scss";',
      },
    },
  },
};
