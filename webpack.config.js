const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:"./src/index.tsx",
    module:{
        rules:[
            {
                test:/\.svg$/,
                use:"svg-inline-loader",
            },
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"],

            },
            {
                test:/\.(js|jsx|tsx)$/,
                use:"babel-loader",
            }

        ],
    },
    output:{
        path:path.resolve(__dirname,"./src/"),
        filename:"bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({template:"./public/index.html"})],
     mode:"development"
};