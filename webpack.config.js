const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {alias} = require(path.resolve(__dirname,'src/alias/alias.js'))
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';

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
                            "emotion"
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
                test:/\.png$|\.jpg$|\.ttf$|\.woff$|\.woff2$|\.eot$|\.svg$/,
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
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],
    devServer:{
        historyApiFallback:true
        
    },
    resolve :{
        alias: alias(path.resolve(__dirname))
    }

}