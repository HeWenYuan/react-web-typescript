const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BUILD_PATH = path.resolve(path.resolve(__dirname), 'public/dist');
const config = require('./config');

let webpackPlugins = [
    new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        filename: __dirname + "/public/dist/index.html"
    }),
    new webpack.optimize.UglifyJsPlugin()
];

let host = config.host;
let port = config.port;
let entry = [];

if (process.env.NODE_ENV === 'development') {
    console.log('webpack env:', process.env.NODE_ENV);
    entry.push('./src/index.tsx');
    webpackPlugins = [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: __dirname + "/public/dist/index.html"
        }),
        new ExtractTextPlugin("styles.css")
    ];
} else {
    entry.push('./src/index.tsx');
    console.log("webpack env:", process.env.NODE_ENV);
}

let webpackConfig = {
    entry: entry,
    output: {
        path: __dirname + '/public/dist/',
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        publicPath: 'http://'+ config.host +':'+ config.port +'/dist/'
    },

    devtool: "inline-source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            { test: /\.(png|jpg|gif|jpeg)$/, use: 'url-loader?limit=8192' },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules' }) },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

    plugins: webpackPlugins
};

module.exports = webpackConfig;