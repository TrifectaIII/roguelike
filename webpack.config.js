/* eslint-disable require-unicode-regexp */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    // mode: 'production',
    // devtool: false,
    entry: path.resolve(__dirname, './src/demo/index.ts'),

    // settings for dev server (npm start)
    devServer: {
        static: path.join(__dirname, 'docs'),
        compress: true,
        port: 8000,
    },

    module: {
        rules: [
            // ts rule
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            // css rule
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    // will build html from src file, injecting script tag automatically.
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/demo/index.html',
        }),
    ],

    // filename of output js, and path for all build files
    output: {
        filename: '[id].bundle.js',
        path: path.resolve(__dirname, './docs'),
    },
};
