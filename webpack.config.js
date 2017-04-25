const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BUILD_PATH = path.resolve(path.resolve(__dirname), 'public/dist');

let webpackPlugins = [
    new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        filename: __dirname + "/public/dist/index.html"
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    // new ExtractTextPlugin("style.css")
];

console.log(require('./config'));

if (process.env.NODE_ENV === 'development') {
    console.log('webpack env:', process.env.NODE_ENV);
    webpackPlugins = [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: __dirname + "/public/dist/index.html"
        })
    ];
} else {
    console.log("webpack env:", process.env.NODE_ENV);
}

module.exports = {
    entry: './src/index.tsx',
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

    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            { test: /\.(png|jpg|gif|jpeg)$/, use: ['url-loader?limit=8192&name=images/dist/[name].[ext]', 'file-loader'] },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    // postcss: [
    //     require("autoprefixer")
    // ],

    // 忽略某些包,不打包进bundle里面
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    
    devServer: {
        contentBase: "./public/dist",//本地服务器所加载的页面所在的目录
        port: "8080",
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },

    plugins: webpackPlugins
};