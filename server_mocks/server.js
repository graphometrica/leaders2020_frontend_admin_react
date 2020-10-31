const path = require('path')
const express = require('express');
const fileUpload = require('express-fileupload');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser')

const SimpleNodeLogger = require('simple-node-logger'),
    opts = {
        logFilePath:'node_server.log',
        timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    },
log = SimpleNodeLogger.createSimpleLogger( opts );

const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static(__dirname + '../build'));
app.use(fileUpload());

app.listen(config.devServer.port, function () {
  const logmsg = ` - app is listening on port ${config.devServer.port}!\n`;

  console.log(logmsg);
  log.info(logmsg);
});

require('./routes')(app);
