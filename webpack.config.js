var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
  devTool: 'eval',
  debug: true,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/router'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join( __dirname, 'public' )
  },

  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.ProvidePlugin({
      "_": "underscore"
    })
  ],

  resolve: {
    extensions: [ '', '.js', '.jsx', '.coffee', '.less', '.ttf', '.eot', '.woff'],
    moduleDirectories: [
      'node_modules',
      'bower_components'
    ]
  },

  resolveLoader: {
    moduleDirectories: [ 'node_modules' ]
  },

  module: {
    noParse: [
      /aws\-sdk/
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: [ 'style', 'css' ]
      },
      {
        test: /\.less/,
        loaders: [ 'style', 'css', 'less' ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel',
        query: {
          presets: [ 'react', 'es2015', 'stage-0' ]
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(jpg|png|gif|svg)/,
        loader: 'file-loader'
      },
      {
        test: /\.(eot|ttf|woff)/,
        loader: 'file-loader'
      }
    ]
  }
};
