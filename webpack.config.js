const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        polyfill: path.resolve(__dirname, 'babel-polyfill'), 
        index: path.resolve(__dirname, './src/js/index.js'),
        upload:'./src/js/upload.js'
    },
    // output: {
    //     path: path.resolve(__dirname, '[name].js'),
    //     filename: path
    // },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            chunks: ['polyfill', 'index']
        }),
        new HtmlWebpackPlugin({
            filename: 'programs.html',
            template: './src/html/programs.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'uploadPodcast.html',
            template: './src/html/uploadPodcast.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'uploadArtikel.html',
            template: './src/html/uploadArtikel.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'artikler.html',
            template: './src/html/artikler.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'artikel.html',
            template: './src/html/artikel.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new MiniCssExtractPlugin({
        filename: "[name].sass",
        chunkFilename: "[id].sass"
        })
    ],
};

// console.log(filename);
