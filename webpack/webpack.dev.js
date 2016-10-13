'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'dist')
    },
    devtool: 'source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src/app/scripts/bootstrap') ],
        vendor: [ path.resolve(rootDir, 'src/app/scripts/vendor') ]
    },
    module: {
        loaders: [
            { 
                // exclude: /node_modules/, 
                loader: 'style!css!', 
                test: /\.css$/ 
            },
            { 
                // exclude: /node_modules/, 
                loader: 'raw', 
                test: /.html$/ 
            },
            { 
                // exclude: /node_modules/, 
                loader: 'ts', 
                test: /.ts$/ 
            },
            { 
                // exclude: /node_modules/, 
                loader: 'url?limit=10000', 
                test: /\.(png|jpg)$/ 
            },
            
            {   
                // exclude: /node_modules/,
                test: /\.(gif|svg)$/i, 
                loader: 'url?limit=10000!img?progressive=true' 
            },
    
            { 
                // exclude: /node_modules/, 
                loader: 'file', 
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?(\?-fvbane)?$/ 
            }       
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src/app/index.html')
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            "window.jQuery": 'jquery'
        })
    ],
    resolve: {
        extensions: [ '', '.js', '.ts' ]
    }
};