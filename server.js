const webpack = require( 'webpack' );
const WebpackDevServer = require( 'webpack-dev-server' );
const config = require( './webpack.config' );

new WebpackDevServer( webpack( config ), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  stats: {
    progress: true,
    colors: true,
    displayErrorDetails: true,
    displayCached: true,
  },
} ).listen( 8000, 'localhost', ( err ) => {
  if ( err ) {
    console.log( err );
  }

  console.log( 'Listening to localhost:8000' );
} );
