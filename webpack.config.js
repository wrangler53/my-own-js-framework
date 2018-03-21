const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'source'),
    entry: './js/main.js',
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}