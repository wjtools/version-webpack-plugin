'use strict'

const fs = require('fs')
const path = require('path')
const ID = 'version-webpack-plugin'

class VersionWebpackPlugin {
  constructor(options = {}) {
    this.options = {
      // version: '1.0.0', // 指定版本号
      file: 'package.json', // 版本号所在文件
      ...options,
    }
  }

  apply(compiler) {
    const hook = () => {
      try {
        const opts = this.options
        const pkgPath = path.resolve(opts.file)
        const pkg = require(pkgPath)
        pkg.version = opts.version || pkg.version.replace(/\d+$/, v => ++v)
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
        console.log('版本号已成功更新为：' + pkg.version)
      } catch (r) {
        console.log('版本号更新出错：' + r)
      }
    }

    // 兼容 webpack 4 和 webpack 3
    if (compiler.hooks) {
      compiler.hooks.compile.tap(ID, hook)
    } else {
      compiler.plugin('compile', hook)
    }
  }
}

module.exports = VersionWebpackPlugin
