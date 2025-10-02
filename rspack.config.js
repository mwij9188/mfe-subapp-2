const { ModuleFederationPlugin } = require('@rspack/core').container;
const HtmlPlugin = require('@rspack/plugin-html').default;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3002,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  output: {
    publicPath: 'http://localhost:3002/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'ecmascript',
                jsx: true,
              },
              transform: {
                react: {
                  pragma: 'React.createElement',
                  pragmaFrag: 'React.Fragment',
                  development: true,
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'SubApp2',
      filename: 'remoteEntry.js',
      exposes: {
        './SubApp': './src/SubApp',
      },
    }),
  new HtmlPlugin({ template: './public/index.html' }),
  ],
};