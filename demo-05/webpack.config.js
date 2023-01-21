const HTMLPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new HTMLPlugin({
            // title: "Webpack Demo",
            template: "./src/index.html",
        }),
    ],
    // devtool: "inline-source-map",
};
