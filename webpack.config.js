const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        babel: 'babel-polyfill',
        salah: './src/js/salah.js',
        index: './src/js/index.js',
        om: './src/js/om.js',
        programs: './src/js/programs.js',
        upload: './src/js/upload.js',
        artikler: './src/js/artikler.js',
        dashboard: './src/js/dashboard.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'waih'
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
            chunks: ['waih', 'babel', 'salah', 'index']
        }),
        new HtmlWebpackPlugin({
            filename: 'om.html',
            template: './src/html/om.html',
            chunks: ['waih','babel','salah', 'om']
        }),
        new HtmlWebpackPlugin({
            filename: 'artikler.html',
            template: './src/html/artikler.html',
            chunks: ['waih','babel','salah', 'artikler']
        }),
        new HtmlWebpackPlugin({
            filename: 'artikel.html',
            template: './src/html/artikel.html',
            chunks: ['waih','babel','salah', 'artikler']
        }),
        new HtmlWebpackPlugin({
            filename: 'programs.html',
            template: './src/html/programs.html',
            chunks: ['waih','babel','salah', 'programs']
        }),
        new HtmlWebpackPlugin({
            filename: 'program.html',
            template: './src/html/program.html',
            chunks: ['waih','babel','salah', 'programs']
        }),
        new HtmlWebpackPlugin({
            filename: 'uploadPodcast.html',
            template: './src/html/uploadPodcast.html',
            chunks: ['waih','babel', 'upload']
        }),
        new HtmlWebpackPlugin({
            filename: 'uploadArtikel.html',
            template: './src/html/uploadArtikel.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'dashboard.html',
            template: './src/html/dashboard.html',
            chunks: ['waih','babel', 'dashboard']
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].sass",
            chunkFilename: "[id].sass"
        }),
    ],
};

// console.log(filename);
