module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,

  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/themes/default/_colors.scss";',
      },
    },
  },
};
