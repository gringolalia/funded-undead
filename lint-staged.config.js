module.exports = {
  "*.{js,vue}": ["eslint . --fix --cache", "prettier --write"],
  "*.{vue,css,less,sass,scss,styl,stylus,js}": [
    "stylelint --fix --cache",
    // 'prettier --write ',
  ],
  // '*.htm?(l)': ['htmlhint', 'prettier --write']
};
