const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");
var config;

if (file_exists('./config/local.json')) {
    config = require('./config/local.json');
} else {
    config = require('./config/config.json');
}

console.log(config);

webpackConfig.output.publicPath = 'http://'+ config.host +':'+ config.port +'/';

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
  contentBase: './public',
  publicPath: webpackConfig.output.publicPath,
  headers: {
    'X-Custom-Header': 'yes'
  },
  proxy: {
    // '/**': {
    //   target: '/index.html',
    //   secure: false,
    //   bypass: function (req, res, proxyOptions) {
    //     return '/'
    //   }
    // },
    // 'test': {
    //   target: '',
    //   secure: false,
    //   bypass: function (req, res, proxyOptions) {
    //     return res.json({msg: 'test proxy ok !'});
    //   }
    // },
    'get_color': {
      target: '',
      secure: false,
      bypass: function (req, res, proxyOptions) {
        return res.json({code: 200, color: 'purple'});
      }
    },
    'get_test_data': {
      target: '',
      secure: false,
      bypass: function (req, res) {
        return res.json({msg: 'get_test_data success !'});
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

function file_exists(path) {
  try {
    fs.lstatSync(path);
    return true;
  } catch (e) {
    return false;
  }
}
