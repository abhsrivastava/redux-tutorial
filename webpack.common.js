const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AwesomeTypescriptLoader = require("awesome-typescript-loader");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/App.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.[contentHash].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: ["source-map-loader"]
            },
            {
                test: /\.(svg|png|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        }),
        new CleanWebpackPlugin()
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".tsx", ".css", ".svg"]
    }
}