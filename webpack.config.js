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
        tree: entryPath('sample/tree/sample-tree.js'),
        panel: entryPath('sample/panel/sample-panel.js'),
        modal: entryPath('sample/modal/sample-modal.js'),
        button: entryPath('sample/button/sample-button.js'),

    },
    output:{
        path: path.join( __dirname, "build"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        alias: {
            '$vue': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/sample.html',
            chunks: ['tree','panel','modal','button']
        }),
        new CleanWebpackPlugin('build')
    ]
};