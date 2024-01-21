import { DefinePlugin } from 'webpack';

module.exports = {
  entry: './firebase.js',
  plugins: [
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': '"production"'
          }
      })
  ]
};