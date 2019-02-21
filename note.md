#### webpack optimize
```
module.exports = {
    module: {
        noParse: /jquery/ //不去解析jq中的依赖库  对于大的库添加此项，效果比较明显，可以缩短打包时间
    }
}
```