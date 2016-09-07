
import webpack from 'webpack';
import path from 'path';

const devPort = 9009;
export default {
  devtool: 'source-map',
  entry: {
    hhd: ['./src/hhd.js', 'webpack/hot/dev-server'],
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    publicPath: `http://localhost:${devPort}/assets/`,
    filename: '[name].js',
  },
  module: {
    loaders: [
      // {
      //   test: /\.js?$/,
      //   exclude: /(node_modules|ext-lib)/,
      //   loader: 'babel',
      //   query: {
      //     plugins: ['transform-runtime'],
      //   },
      // },
      {
        test: /\.less$/,
        loader: 'style!css?sourceMap!less?sourceMap',
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap',
      },
      {
        test: /\.(png|jpg|svg|gif|eot|woff|ttf)$/,
        loader: 'file-loader',
      },
      {
        test: /ext-lib[\\\/].+\.js$/,
        loader: 'imports?require=>false,module=>false,define=>false,exports=>undefined',
      },
    ],
    noParse: [
      /ext-lib[\\\/].+\.js/i,
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  profile: true,
};
