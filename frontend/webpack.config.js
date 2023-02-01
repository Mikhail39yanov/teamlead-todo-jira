const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  watch: !(process.argv.indexOf('--no-watch') > -1),
  entry: path.resolve('./src/App.tsx'),
  output: {
    filename: 'client.js',
    path: path.resolve('../backend/public/dist'),
  },
}
