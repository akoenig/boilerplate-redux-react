/*
 * boilerplate-redux-react
 *
 * Copyright(c) 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

const pkg = require('./package.json');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(PORT, HOST, (err, result) => {
	if (err) {
		return console.log(err);
  	}

	console.log(`=> "${pkg.name}" is listening at http://${HOST}:${PORT}`);
	console.log('=> Starting compile process ...');
});
