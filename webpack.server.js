/*
 * redux-react-boilerplate
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

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const pkg = require('./package.json');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(PORT, 'localhost', (err, result) => {
    if (err) {
        console.log(err);
    }

    console.log(`=> "${pkg.name}" is listening on port ${PORT}.`);
	console.log('=> Starting compile process ...');
});
