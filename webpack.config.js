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

const path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './lib/index'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/static/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [{
            test: /.js$/,
            loaders: [
                'react-hot',
                'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'
            ],
            exclude: /node_modules/
        }]
    }
};
