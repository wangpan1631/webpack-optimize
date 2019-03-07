let path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        test: ['react', 'react-dom'],
    },
    output: {
        filename: '_dll_[name].js', // 产生的文件名
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]' // _dll_react
    }
};