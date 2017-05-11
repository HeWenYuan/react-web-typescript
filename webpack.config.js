const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./config');
const dist_path = path.join(__dirname + 'public/dist/');

let webpackConfig = {
    entry: {},
    output: {
        path: __dirname + '/public/dist/',
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
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: []
};

webpackConfig.entry.commons = ['react', 'react-dom', 'redux', 'react-redux'];
    webpackConfig.entry.index = ['./client/index.tsx'];
if (process.env.NODE_ENV === 'development') {
    console.log('webpack env:', process.env.NODE_ENV);
    // webpackConfig.devtool = 'inline-source-map';
    // webpackConfig.entry.push('./client/index.tsx');
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: __dirname + "/client/index.html",
            filename: __dirname + "/public/dist/index.html",
            chunks: ['commons', 'index'],
        }),
        new ExtractTextPlugin("styles.css"),
        // new webpack.ProvidePlugin({
        //     $: "jqeury",
        //     jQuery: 'jquery',
        //     Cookies: "js-cookie"
        // }),
        new webpack.DefinePlugin({
            backend_url: JSON.stringify(config.client.backend_url)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: '[name].js',
            minChunks: Infinity
        }),
        // new CleanWebpackPlugin(
        //     // ['build'],
        //     {
        //         root: dist_path, // An absolute path for the root.
        //         verbose: true, // Write logs to console.
        //         dry: false, // Use boolean 'true' to test/emulate delete. (will not remove files).
        //     }
        // )
    );
} else {
    console.log("webpack env:", process.env.NODE_ENV);
    // webpackConfig.entry.push('./client/index.tsx');
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            template: __dirname + "/client/index.html",
            filename: __dirname + "/public/dist/index.html",
            chunks: ['commons', 'index'],
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
        //    html2canvas: 'html2canvas'
        }),
        new webpack.DefinePlugin({
            backend_url: JSON.stringify(config.client.backend_url)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: '[name].js',
            minChunks: Infinity
        }),
        // new CleanWebpackPlugin(
        //     ['build'],
        //     {
        //         root: dist_path, // An absolute path for the root.
        //         verbose: true, // Write logs to console.
        //         dry: false, // Use boolean 'true' to test/emulate delete. (will not remove files).
        //     }
        // )
    );
}

module.exports = webpackConfig;

function file_exists(path) {
  try {
    fs.lstatSync(path);
    return true;
  } catch (e) {
    return false;
  }
}