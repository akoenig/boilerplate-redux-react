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
const HOST = process.env.HOST || '0.0.0.0';

const path = require('path');

const koa = require('koa');
const sendfile = require('koa-sendfile');
const config = require('./webpack.config');
const compiler = require('webpack')(config);

const pkg = require('./package.json');

const app = koa();

app.use(require('koa-webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
}));

app.use(require('koa-webpack-hot-middleware')(compiler));

app.use(function* (next) {
	const stats = yield* sendfile.call(this, path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, (err) => {
	if (err) {
 	return console.log(err);
	}

	console.log(`=> "${pkg.name}" is listening at http://${HOST}:${PORT}`);
	console.log('=> Starting compile process ...');
});
