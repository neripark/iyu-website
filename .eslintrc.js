module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "no-console": 1,
    "semi": [2, "always"],
    "vue/html-self-closing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/html-closing-bracket-newline": 0
  }
}
