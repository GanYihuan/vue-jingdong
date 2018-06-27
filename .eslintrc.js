module.exports = {
  "extends": "standard",
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': ['error', 'never'],
    'eol-last': 0,
    'no-tabs': 0,
    'indent': 0,
    'space-before-function-paren': 0
  }
};