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