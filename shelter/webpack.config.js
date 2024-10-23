const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //очистка папки dist
const HtmlWebpackPlugin = require('html-webpack-plugin'); //ссылки сам вставит



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        })
    ]

}