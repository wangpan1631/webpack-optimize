let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    optimization: {
        splitChunks: { // 分隔代码块
            cacheGroups: { // 缓存组
                common: {
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2
                }
            },
            // vendor: { // 第三方模块   // 3.7加上这个报错~~~
            //     priority: 1, //权重
            //     test: /node_modules/, // 抽离出来
            //     chunks: 'initial',
            //     minSize: 0,
            //     minChunks: 2
            // }
        }
    },
    mode: 'development',
    // entry: './src/index.js',
    entry: {
        'index': './src/index.js',
        'other': './src/other.js'
    },
    output: {
        filename: '[name].js',
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