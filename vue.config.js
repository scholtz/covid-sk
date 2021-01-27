module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  path: "./dist",
  filename: "bundle.min.js",
  chunkFilename: "[id].chunk.js",
  publicPath: "https://cdnsitestoragecovid.blob.core.windows.net/web/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/themes/default/_colors.scss";',
      },
    },
  },
};
