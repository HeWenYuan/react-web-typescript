const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('../config');
console.log(config);

let webpackConfig = {
    entry: {},
    output: {
        path: path.join(__dirname, '/../public/dist/'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        publicPath: 'http://' + config.host + ':' + config.port + '/dist/'
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.(png|jpg|gif|jpeg)$/, use: 'url-loader?limit=8192' },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' }) },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    plugins: []
};

webpackConfig.entry.commons = ['react', 'react-dom', 'redux', 'react-redux'];
    webpackConfig.entry.index = [path.join(__dirname, '/../client/index.tsx')];
    console.log(path.join(__dirname, '/../client/index.html'));
if (process.env.NODE_ENV === 'development') {
    console.log('webpack env:', process.env.NODE_ENV);
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/../client/index.html'),
            filename: path.join(__dirname, '/../public/dist/index.html'),
            chunks: ['commons', 'index'],
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
            backend_url: JSON.stringify(config.client.backend_url)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: '[name].js',
            minChunks: Infinity
        })
    );
} else {
    console.log("webpack env:", process.env.NODE_ENV);
    delete webpackConfig.devtool;
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/../client/index.html'),
            filename: path.join(__dirname, '/../public/dist/index.html'),
            chunks: ['commons', 'index'],
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            backend_url: JSON.stringify(config.client.backend_url)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: '[name].js',
            minChunks: Infinity
        })
    );
}

module.exports = webpackConfig;