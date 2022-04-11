const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

const config = {
    entry: "./src/index.js",
    output: {
        filename:"[name].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./images/[name][ext]",
        clean: true,
    },
    performance: {
        hints: false
    },

    name: 'browser',
    //mode: 'development',
    mode: 'production',
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        }), 
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }), 
         
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                }
            },
        ]
    },

}
module.exports = config;