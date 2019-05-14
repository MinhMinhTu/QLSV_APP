const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');
const {alias} = require(path.resolve(__dirname,'src/alias/alias.js'))
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'bundle.js',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react",                      
                            ],
                        "plugins": [ 
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-proposal-class-properties",
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.jpg$|\.ttf$|\.woff$|\.woff2|\.eot$|\.svg$/,
                loader : 'file-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: [
                    'file-loader','url-loader'
                ]
            }

        ]
    },
    plugins:[
        new Htmlwebpackplugin({
            template : './src/index.html'
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    devServer:{
        historyApiFallback:true
        
    },
    resolve :{
        alias: alias(path.resolve(__dirname))
    }

}