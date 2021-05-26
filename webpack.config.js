const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'production',

  entry: {
    popup: path.join(__dirname, 'src/popup.tsx'),
    content: path.join(__dirname, 'src/content.ts'),
    background: path.join(__dirname, 'src/background.ts'),
  },

  output: { path: path.join(__dirname, 'dist'), filename: '[name].js' },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.s?css$/,
        oneOf: [
          {
            test: /\.module\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  sassOptions: {
                    importLoaders: 1,
                    outputStyle: 'compressed',
                    modules: true,
                  },
                },
              },
            ],
          },
          {
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(__dirname, 'src'),
    },
  },

  devServer: {
    contentBase: './dist',
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
  ],
};

module.exports = config;
