const path = require('path');
const custom_fonts_dir = "./src/assets/fonts";
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @use 'sass:math' ;
          @function rem($pixel) {
            @return math.div($pixel, 16) + rem;
          }

          @import "src/global_styles/_animations.scss";
          @import "src/global_styles/_global_variables_init.scss";
          @import "src/global_styles/_variables.scss";
          @import "src/global_styles/_breakpoints.scss";
          @import "src/global_styles/_styles.scss";
          @import "src/global_styles/_mixins.scss";
          `,
      },
    },
  },
  webpack: {
    alias: {
      custom_fonts: path.resolve(__dirname, custom_fonts_dir),
    },
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      });
      return webpackConfig;
    },
  },
}
