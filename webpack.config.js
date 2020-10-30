const path = require("path");
const webpack = require("webpack");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const CONFIG = {
  ...require('./config/default'),    
    DIR: () => path.resolve(__dirname, "./"),
    contentBasePublicPath: ''
};


const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const TerserPlugin = require("terser-webpack-plugin");

const DIR = CONFIG.DIR();
const ENV = CONFIG.ENV();

module.exports = {
  context: path.resolve(DIR, "src"),
  mode: ENV.mode === 'production' ? 'production' : 'development',
  devtool: ENV.mode === 'production' ? false : 'source-map',  
  entry: {
    main: ["@babel/polyfill", "./client.js"],    
  },
  output: {
    filename: `js/[name].[chunkhash].bundle.js`,
    path: path.resolve(DIR, "build"),
    publicPath: '/'    
  },
  resolve: {    
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.resolve(DIR), 'node_modules', 'app'],
    alias: {
      "@components": path.resolve(DIR, "src/app/common/components"),
      "@containers": path.resolve(DIR, "src/app/common/containers"),
      "@helpers": path.resolve(DIR, "src/app/common/helpers"),      
      "@routes": path.resolve(DIR, "src/app/routes"),
      "@pages": path.resolve(DIR, "src/app/pages"),
      "@models": path.resolve(DIR, "src/app/common/models"),      
      "@domain": ["src/app/domain"],

      "@appConfig": path.resolve(DIR, "config/default.js"),

            
      "@const": path.resolve(DIR, "src/app/common/constants/index.js"),

      "@tokens": path.resolve(DIR, "src/app/uikit/tokens/index.js"),
      "@uikit": path.resolve(DIR, "src/app/uikit/index.js"),      

      "@images": path.resolve(DIR, "src/assets/images"),
      "@fonts": path.resolve(DIR, "src/assets/fonts"),
      "@assets": path.resolve(DIR, "src/assets"),      
      "@styles": path.resolve(DIR, "src/assets/styles")      
    },
  },

  devServer: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3001,
    contentBase: path.join(DIR, 'build'),
    contentBasePublicPath: CONFIG.contentBasePublicPath,
    hot: true,
    onListening: function(server) {
      const port = server.listeningApp.address().port;
      console.log('---------------------------------')
      console.log('- DEV SERVER IS LISTENING ON PORT', port);
      console.log('---------------------------------')
    }
  },
  

  plugins: [
    
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({            
      'ENV': JSON.stringify(ENV)
    }),
    new HTMLWebpackPlugin({
      template: "./index.html",
      scriptLoading: 'defer',
      minify: {
        collapseWhitespace: ENV.mode === 'production' ? true : false,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(DIR, "src/favicon.ico"),
          to: path.resolve(DIR, "build"),
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/app.[chunkhash].css",
      chunkFilename: '[id].[hash].css'
    })    
  ],

  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            filename: '[name].[contenthash].worker.js',
          }
        },
      },
      

      {
        test: /.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false, //isProd
              reloadAll: true
            },
          },
          'css-loader',
          'scoped-css-loader',
          'sass-loader'          
        ]
      },

      {
        test: /.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false,
              reloadAll: true
            },
          },
          'css-loader',
          'scoped-css-loader',
          'less-loader'
        ]
      },


      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif|ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[contenthash].[ext]',
              publicPath: '../',              
            },
          },
        ],
      }      
    ],
  },

  optimization: {
    minimizer:
    
    ENV.mode === 'production' ? [new TerserPlugin(), new OptimizeCssAssetWebpackPlugin()] : [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: "all",
      minChunks: 1,
      minSize: 30000,
      name: false,
    },
  },
};
