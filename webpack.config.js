const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BUILD_PATH = path.resolve(path.resolve(__dirname), 'public/dist');
const config = require('./config');

let webpackPlugins = [
    new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        filename: __dirname + "/public/dist/index.html"
    }),
    new webpack.optimize.UglifyJsPlugin()
];

let entry = [];

if (process.env.NODE_ENV === 'development') {
    console.log('webpack env:', process.env.NODE_ENV);
    // entry.push('webpack-hot-middleware/client?path=http://' + config.host + ':' + config.port + '/');
    entry.push('./src/index.tsx');
    webpackPlugins = [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: __dirname + "/public/dist/index.html"
        }),
        // hot replace
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ];
} else {
    entry.push('./src/index.tsx');
    console.log("webpack env:", process.env.NODE_ENV);
}

console.log(require('./config'));

module.exports = {
    entry: entry,
    // output: {
    //     filename: "bundle.js",
    //     path: __dirname + "/public/dist"
    // },
    output: {
        path: BUILD_PATH,
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        publicPath: 'http://localhost:5000/dist/'
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
            { test: /\.(png|jpg|gif|jpeg)$/, use: ['url-loader?limit=8192&name=images/[name].[ext]&publicPath=' + __dirname + 'public/dist', 'file-loader'] },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    // 忽略某些包,不打包进bundle里面
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    
    devServer: {
        contentBase: "'http://localhost:5000/dist/'",//本地服务器所加载的页面所在的目录
        port: "8080",
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },

    plugins: webpackPlugins
};