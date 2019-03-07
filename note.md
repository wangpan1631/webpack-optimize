#### webpack optimize
1. 使用noparse（把不需要解析的库加进来）

```
module.exports = {
    module: {
        noParse: /jquery/ //不去解析jq中的依赖库  对于大的库添加此项，效果比较明显，可以缩短打包时间
    }
}
```

2. 在module的rules里面添加包含目录和忽略目录
```
module.exports = {
    module: {
        rules: [
            test:/\.js$/,
            exclude: /node_modules/, // 不包含的模块
            include: path.resolve('src') //包含的模块
        ]
    }
}
```

3. 使用webpack内置的插件IgnorePlugin
```
module.exports = {
    plugins:[
        new webpack.IgnorePlugin(/\.\/local/, /moment/) //以moment为例
    ]
}
```
4. 
```
output: {
    filename: '[name].js',
    path: path.resoleve(__dirname, 'dist'),
    library: 'ab', //知道打包后的结果赋值给ab
    libraryTarget: 'umd' // can be commonjs  umd var this and so on
}
```
5. happypack实现多线程打包，第三方模块，需要安装
npm i happypack

6. webpack 自带的优化
* import在生产环境下，会自动去掉无用的代码，这种叫做tree-shaking (把没用的代码自动删除，必要要用import语法)
es6模块会把结果自动放到default里面（let fn = require('.test')）
尽量使用import
* scope hosting
```
let a = 1;
let b = 2;
let c = 3;
let d = 1+2+3; // webpack 在生产环境打包出来是 d = 6, 省略了一些简化的代码
```

7. 抽离公共代码

```
module.exports = {
    optimization: {
        splitChunks: { // 分隔代码块
            cacheGroups: { // 缓存组
                common: {
                    chunks: 'initial',
                    minSize: 0, // 抽取的公共文件最小是0K
                    minChunks: 2 //被使用的模块最少是两处
                }
            },
            vendor: { // 第三方模块   // 3.7加上这个报错~~~后面再试下
                priority: 1, //权重
                test: /node_modules/, // 抽离出来
                chunks: 'initial',
                minSize: 0,
                minChunks: 2
            }
        }
    }
}
```

8. 懒加载
使用import()语法，动态加载文件，vue的懒加载和react懒加载都是这样实现的

9. 热更新

deserve: {
    hot: true
}

webpack.NameModulesPlugin({}) 打印更新的模块路径
webpack.HotModuleReplacementPlugin({})  热更新插件