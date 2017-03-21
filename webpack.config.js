'use strict';

const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./app.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: ['.js', '.san'],
        modules: ['node_modules'],
    },
    module: {
        rules: [{
            test: /\.san$/,
            use: 'san-loader'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            include: [ __dirname + "/src" ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
