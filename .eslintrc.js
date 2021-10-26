module.exports = {
  extends: ['airbnb-base', 'prettier'],
  root: true,
  env: {
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
