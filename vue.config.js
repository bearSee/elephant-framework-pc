
module.exports = {
  lintOnSave: true,
  devServer: {
      port: 5174,
      overlay: {
        warnings: true,
        errors: true,
      },
      hot: true,
      open: false,
      disableHostCheck: true, // 热加载
  },
  publicPath: '',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  transpileDependencies: [],
};
