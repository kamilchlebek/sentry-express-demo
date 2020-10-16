const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const appPath = path.join(__dirname, './')
const distPath = path.join(appPath, './dist')

module.exports = {
  entry: { server: path.join(appPath, 'server.ts') },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
      }),
    ],
  },
  target: 'node',
  mode: 'production',
  output: {
    path: distPath,
    filename: '[name].js',
  },
  module: {
    noParse: /polyfills-.*\.js/,
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
}
