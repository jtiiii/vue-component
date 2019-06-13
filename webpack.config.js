const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

function entryPath( p){
    return path.join( __dirname, p);
}

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry:{
        sample: entryPath('sample/index.js'),

    },
    output:{
        path: path.join( __dirname, "build"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {test: /\.vue$/,
                use: ['vue-loader']
            },
            {test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            { test: /\.(jpg|png|jpeg|ttf|ttc)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        // limit: 81920,
                        outputPath: 'assets'
                    }}]
            },
        ]
    },
    // devServer: {
    //     port: 8080,
    //     host: '192.168.1.101'
    // },
    resolve: {
        alias: {
            '$vue': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/sample.html',
            chunks: ['sample'
                // 'tree',
                // 'panel',
                // 'modal',
                // 'button',
                // 'input',
                // 'search',
                // 'upload',
                // 'thumbnail',
                // 'table','editor','layout','dropdown'
            ]
        }),
        new CleanWebpackPlugin()
    ]
};