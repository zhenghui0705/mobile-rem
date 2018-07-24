var webpack = require("webpack");
var path = require('path');
module.exports = {
    //页面入口文件配置
    entry: [
        './app.js'
    ],
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './bulid'),
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [{
                test: /\.css$/,
                loaders: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: ['url-loader?limit=8192&name=./[name].[ext]']
            }, /*解析图片*/
        
        ],
    },

}