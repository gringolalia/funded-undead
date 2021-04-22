module.exports = {
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
    config.optimization.minimizer("terser").tap((args) => {
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-inline-loader").loader("vue-svg-inline-loader");
    config.resolve.extensions.prepend(".vue");
  },
  // config.module
  //     const svgRule = config.module.rule( 'svg' )
  //       svgRule.uses.clear()
  //       svgRule
  //       .rule("vue")
  //         .use("vue-svg-inline-loader")
  //           .loader("vue-svg-inline-loader"),
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
