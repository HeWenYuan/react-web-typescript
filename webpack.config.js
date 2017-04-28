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
    // entry.push('webpack-hot-middleware/client?path=http://' + config.host + ':' + config.port + '/');
    // entry.push('webpack/hot/dev-server/client?path=http://localhost:8080/');
    // entry.push('webpack/hot/dev-server');
    
    entry.push('./src/index.tsx');
    webpackPlugins = [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: __dirname + "/public/dist/index.html"
        }),
        new ExtractTextPlugin("styles.css"),
    //     new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
        // hot replace
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin()
    ];
} else {
    entry.push('./src/index.tsx');
    console.log("webpack env:", process.env.NODE_ENV);
}

console.log(require('./config'));

console.log(entry);
let webpackConfig = {
    entry: entry,
    output: {
        path: __dirname + '/public/dist/', // js以及image,css处理后所在的目录
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        publicPath: '/dist/' // html模板处理后所在的目录,index.html
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
            // { test: /\.(png|jpg|gif|jpeg)$/, use: ['url-loader?limit=8192&name=images/[name].[ext]&publicPath=' + __dirname + 'public/dist', 'file-loader'] },
            // { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
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

// if (process.env.NODE_ENV === 'development') {
//     webpackConfig.devServer = {
//         port: '5000',
//         contentBase: "./public",//本地服务器所加载的页面所在的目录
//         colors: true,//终端中输出结果为彩色
//         historyApiFallback: true,//不跳转
//         inline: true//实时刷新
//     };
// }

module.exports = webpackConfig;