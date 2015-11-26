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

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

const webpack = require('webpack');

module.exports = {
    entry: [
		`webpack-dev-server/client?http://${HOST}:${PORT}`,
		'webpack/hot/only-dev-server',
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
			loader: 'react-hot'
		},
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel',
			query: {
				presets: ['es2015','react'],
				plugins: ['transform-object-rest-spread']
			},
		}]
    }
};
