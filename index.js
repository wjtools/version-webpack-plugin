'use strict'

const fs = require('fs')
const path = require('path')
const ID = 'version-webpack-plugin'

class VersionWebpackPlugin {
  constructor(options = {}) {
    this.options = {
      // version: '1.0.0', // 指定版本号
      file: 'package.json', // 版本号所在文件
      mode: 'increment', // 更新模式：increment-递增（默认）；timestamp-时间戳
      ...options,
    }
  }

  apply(compiler) {
    const hook = () => {
      try {
        const opts = this.options
        const pkgPath = path.resolve(opts.file)
        const pkg = require(pkgPath)
        if (opts.version) pkg.version = opts.version

        // 未指定版本号
        if (!pkg.version) {
          console.warn('请指定版本号或版本号所在文件')
          return
        }

        // 根据更新模式新版本号
        if (opts.mode === 'timestamp') {
          pkg.version = pkg.version.replace(/\d+$/, Date.now())
        } else {
          pkg.version = pkg.version.replace(/\d+$/, v => ++v)
        }

        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
        console.log('版本号已更新为：' + pkg.version)
      } catch (r) {
        console.error('版本号更新出错：' + r)
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
