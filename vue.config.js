module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: "https://cdnsitestoragecovid.blob.core.windows.net/web/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/themes/default/_colors.scss";',
      },
    },
  },
};
