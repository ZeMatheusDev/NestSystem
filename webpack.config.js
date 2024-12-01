const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development', // ou 'production', dependendo do ambiente
  entry: './src/main.ts', // Arquivo principal do Vue.js
  output: {
    path: path.resolve(__dirname, 'public'), // Onde salvar o bundle
    filename: 'bundle.js', // Nome do arquivo gerado
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // Processa arquivos .vue
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/, // Processa arquivos TypeScript
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.css$/, // Processa arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // Necessário para lidar com .vue
  ],
};