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
        tree: entryPath('sample/tree/app.js'),
        panel: entryPath('sample/panel/app.js'),
        modal: entryPath('sample/modal/app.js'),
        button: entryPath('sample/button/app.js'),
        input: entryPath('sample/input/app.js'),
        search: entryPath('sample/search/app.js'),
        upload: entryPath('sample/upload/app.js')

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
                        limit: 81920,
                        outputPath: 'assets'
                    }}]
            },
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
            chunks: ['tree','panel','modal','button','input','search','upload']
        }),
        new CleanWebpackPlugin()
    ]
};