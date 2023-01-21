module.exports = {
    mode: "production",
    output: {
        // clean: true,
    },
    /*
     * # loader
     *
     * - Webpack 默认情况下，只会处理 JS 文件，如果希望其可以处理其它类型的文件，则需要为其引入 loader
     * - 以 CSS 为例
     *   - 使用 css-loader 可以处理 JS 中的样式
     *   - 使用步骤
     *     1. 安装：`pnpm i -D css-loader style-loader`
     *     2. 配置
     */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // 从右向左执行
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }, // 图片这些资源类型的数据，可以通过指定 type 来处理
        ],
    },
};
