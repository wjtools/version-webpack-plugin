<p align="center"><img src="https://webpack.js.org/assets/icon-square-big.svg" width="200" height="200"></p>



<h1 align="center">version-webpack-plugin</h1>
<p align="center">一个简易的 webpack 版本号自动更新插件</p>



<h2 align="center">安装</h2>

首先，您需要安装 `version-webpack-plugin`:

```console
$ yarn add version-webpack-plugin --save-dev
```

然后将插件添加到您的 `webpack` 配置。例如：

**webpack.config.js**

```js
const VersionWebpackPlugin = require('version-webpack-plugin')

module.exports = {
  plugins: [
    new VersionWebpackPlugin({
      file: './package.json', // 指定版本号更新文件，默认：'./package.json'
      version: '1.0.1', // 指定版本号，默认取 file 指定文件中的版本号
    }),
  ],
}
```



<h2 align="center">使用</h2>

每次打包后版本号会自动更新，直接引入即可使用，例如：

**main.js**

```js
import { version } from '../package'
```

***版本号兼容 `1.x.x`、`x.x`、`x` 等写法***
