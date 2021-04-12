module.exports = {
  extends: [
    'plugin:vue-libs/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'], // 要求使用拖尾逗号
    'prefer-const': 'off', // 关闭建议使用 const 的规则
    'generator-star-spacing': 'off', // allow async-await
    'space-before-function-paren': 'off', // 关闭函数括号前的空格验证
    'arrow-parens': 'off', // 不强制使用圆括号括住箭头函数参数
    quotes: ['error', 'single'], // 强制使用单引号
    semi: ['error', 'never'], // 强制结尾不使用分号
    // 'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
