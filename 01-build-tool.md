# 构建工具

- 当习惯了在 Node.js 中编写代码的方式后，在回到前端编写 HTML、CSS、JS 这些东西会感到各种不便
  - 不能放心使用模块化规范（浏览器兼容性）
  - 即使可以使用模块化规范，也会面临模块过多时的加载问题
- 迫切的希望有一款工具可以对代码进行打包
  - 将多个模块打包成一个文件
  - 这样以来既解决了兼容性问题，又解决了模块过多的问题
- 构建工具就起到这样一个作用
  - 通过构建工具可以将使用 ESM 规范编写的代码转换为旧的 JS 语法
  - 这样使得所有的浏览器都可以运行

## Webpack

### 使用步骤

1. 初始化项目
   - `pnpm init`
2. 安装依赖：`webpack`、`webpack-cli`
   - `pnpm add webpack webpack-cli -D`
3. 在项目中创建 `src` 目录，在 src 目录中编写代码（`index.js`）
4. 执行 `pnpm webpack` 命令来对代码进行打包（打包后观察 `dist` 目录）

### 配置文件

- 配置文件：`webpack.config.js`
- 配置文件中的配置项
  - `entry`：入口文件
  - `output`：输出文件
  - `mode`：模式
    - `development`：开发模式
    - `production`：生产模式
  - `module`：模块
    - `rules`：规则
      - `test`：匹配文件的正则表达式
      - `use`：使用的 loader

### Babel

- 在编写 JS 代码时，经常需要使用一些 JS 中的新特性，而新特性在旧的浏览器中兼容性并不好
  - 此时就导致我们无法使用一些新特性
  - 但是现在希望能够使用新的特性，可以采用折中的方案
  - 依然使用新特性编写代码，但是代码编写完成后可以通过一些工具将新代码转换为旧代码
  - `babel` 就是这样一个工具，可以将新的 JS 语法转换为旧的 JS 语法，以提高代码的兼容性
- 如果希望在 Webpack 中使用 `babel`，则需要安装 `babel-loader`，并在配置文件中进行配置
  - 使用步骤
    1. 安装依赖：`babel-loader`、`@babel/core`、`@babel/preset-env`
       - `pnpm i -D babel-loader @babel/core @babel/preset-env`
    2. 配置
    3. 在 `package.json` 中添加 `browserslist` 字段
       - 用来指定浏览器的兼容性
       - 例如：`"browserslist": "> 1%, last 2 versions, not dead"`

### 插件

- 插件用来为 Webpack 来扩展功能
- `html-webpack-plugin`：这个插件可以在打包代码后，自动在打包目录生成 HTML 页面
- 安装插件：`pnpm i -D html-webpack-plugin`

### 开发服务器

- `webpack-dev-server`：这个工具可以用来实现自动化打包
  - 代码发生变化后，自动打包
  - 自动打包后，浏览器自动刷新
- 安装依赖：`pnpm i -D webpack-dev-server`
- 配置
  - 在 `package.json` 中添加 `scripts` 字段
    - `"dev": "webpack-dev-server"`
  - 在 `webpack.config.js` 中添加 `devServer` 字段
    - `contentBase`：指定静态资源目录
    - `open`：自动打开浏览器
    - `port`：指定端口号
    - `hot`：开启热更新
    - `hotOnly`：即使热更新没有生效，也不让浏览器自动刷新

## Vite

- Vite 也是前端的构建工具
- Vite 相较于 Webpack 采用了不同的运行方式
  - 开发时并不对代码打包，而是直接采用 ESM 的方式来运行项目
  - 在项目部署时，再对代码进行打包
- 除了速度外，Vite 使用起来也更加方便

### 基本使用

- 安装依赖：`pnpm i -D vite`
- Vite 的源码目录就是项目的根目录
- 开发的命令
  - `vite`：启动开发服务器
  - `vite build`：打包项目
  - `vite preview`：预览打包后的项目
- 使用命令构建
  - `npm create vite@latest`
  - `yarn create vite`
  - `pnpm create vite`

### 配置文件

- `vite.config.js`
