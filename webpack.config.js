const path = require('path')

module.exports = {
    // 选择模式： 开发
    mode: 'development',
    // 入口文件
    entry: './src/index.js',
    // 打包出口
    output: {
        filename: 'bundle.js'
    },
    // 配置webpack-dev-server
    devServer: {
        // 静态文件根目录
        contentBase: path.join(__dirname, 'www'),
        // 不压缩
        compress: false,
        // 端口号
        port: 8888,
        // 虚拟打包路径
        publicPath: '/xuni/'
    }
}