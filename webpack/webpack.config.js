const webpack = require ('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development':'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', // adiciona css dentro da dom injetando  a tag <style></style>
                    'css-loader', //interpreta o @import, url()
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']


            }
        ]
    }
}