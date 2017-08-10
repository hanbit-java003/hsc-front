/*jshint esversion: 6 */
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const utils = require('./webpack.config.utils');

const port = {
    web: 84,
    was: 8080
};

const pages = [{
    html: 'index',
    script: 'main',
}, {
    html: 'with',
    script: 'with',
}, {
    html: 'search',
    script: 'search',
}, {
    html: 'signup',
    script: 'signup',
}, {
    html: 'login',
    script: 'login',
}, {
    html: 'password',
    script: 'password',
}, {
    html: 'admin/index',
    script: 'admin/main'
}, {
    html: 'admin/area-group',
    script: 'admin/area-group'
}, {
    html: 'admin/area-contents',
    script: 'admin/area-contents'
}, {
    html: 'admin/user-group',
    script: 'admin/user-group'
}, {
    html: 'admin/user-contents',
    script: 'admin/user-contents'
}];

module.exports = {
    entry: utils.getEntry(pages),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                }]
            })
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader',
            query: {
                helperDirs: path.resolve(__dirname, 'src/template/helpers')
            }
        }]
    },
    devServer: {
        contentBase: './dist',
        port: port.web,
        proxy: {
            '/api': 'http://localhost:' + port.was
        }
    },
    plugins: utils.getPlugins(pages)
};
