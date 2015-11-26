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

const path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: [
		'koa-webpack-hot-middleware/node_modules/webpack-hot-middleware/client',
        './lib/index'
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/'
    },

	resolve: {
		extensions: ['', '.jsx', '.scss', '.js', '.json'],
		modulesDirectories: [
			'node_modules',
			path.resolve(__dirname, './node_modules')
		]
	},

    plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel',
			query: {
				presets: ['es2015','react'],
				plugins: ['transform-object-rest-spread']
			}
		}]
    }
};
