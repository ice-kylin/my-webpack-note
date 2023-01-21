const path = require("node:path");

module.exports = {
    mode: "production",
    // entry: "./src/index.js", // 用来指定打包时的主文件，默认为 `./src/index.js`
    // entry: ["./src/index.js"],
    entry: {
        main: "./src/index.js",
        a: "./src/a.js",
        b: "./src/b.js",
    },
    output: {
        // filename: "main.js", // 打包后的文件名，默认为 `main.js`
        filename: "[name].js",
        // filename: "[name]-[id].js",
        // filename: "[name]-[id]-[hash].js",
        clean: true, // 每次打包前清空打包目录
        path: path.resolve(__dirname, "./dist"), // 打包后的目录，必须要绝对路径
    }, // 配置代码打包后的地址
};
