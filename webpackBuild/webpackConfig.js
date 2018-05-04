const config = {
    entry:  "../src/script/index.js",
    output: {
        path: "../web/script",//打包后的文件存放的地方
        filename: "index.js"//打包后输出文件的文件名
    },
    devtool: "source-map",
    devServer: {
        contentBase: "../web",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}

module.exports = {
    config: config
}