const path = require('path');
const webpack = require('webpack');
const config = require('./config');
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");

console.log(webpackConfig.entry);

// "cross-env NODE_ENV=development webpack-dev-server --devtool eval --progress --colors --content-base public"

let host = config.host;
let port = config.port;
console.log(host, port);

let serverConfig = {
  watchOptions:{
    aggregateTimeout: 300, //延迟时间
    poll: 1000, // 轮询间隔
  },
  hot: true,
  inline: true,
  historyApiFallback: true,
  compress: true,
  staticOptions: {
  },
  stats: { colors: true },
  // contentBase: './public/dist/',
  // publicPath: '/',
  headers: {
    'X-Custom-Header': 'yes'
  },
  proxy: {
    '/**': {
      target: '/index.html',
      secure: false,
      bypass: function (req, res, proxyOptions) {
        return '/'
      }
    }
  },
}

// 开启Hot Module Replacement相关设置
if ( process.env.NODE_ENV === 'development' ) {
  webpackConfig.profile = true;
  webpackConfig.entry.push("webpack-dev-server/client?http://"+ host + ":" + port + "/");
  webpackConfig.entry.push("webpack/hot/dev-server");
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  );
}

let compiler = webpack(webpackConfig);
let server = new WebpackDevServer(compiler, serverConfig);

server.listen(port, host, function() {
  console.log('listening on ' + host + ' : ' + port);
});
