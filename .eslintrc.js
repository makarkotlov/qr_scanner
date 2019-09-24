module.exports = {
  root: true,
  extends: ['airbnb'],
  parser: 'babel-eslint',
  rules: {
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    'arrow-parens': 0,
    'linebreak-style': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    quotes: 0,
    semi: 0,
  },
  settings: {
    'import/core-modules': ['react'],
  },
  plugins: ['import', 'react-hooks', 'react', 'promise', 'jsx-a11y', 'lodash', 'react-native'],
}
