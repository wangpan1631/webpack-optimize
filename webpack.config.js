let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.IgnorePlugin(/\.\/local/, /moment/), // 忽略这个模块的打包
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module: {
        noParse: /jquery/, //不去解析jq依赖库
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/, // 不包含的目录
                include: path.resolve('src'), // 包含的目录
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}