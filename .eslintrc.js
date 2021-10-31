module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,

    // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
    'vue/setup-compiler-macros': true,
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:promise/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'max-len': ['warn', { 'code': 100 }],

    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    semi: [2, 'always'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'config'],
      },
    ],
  },
  settings: {},
};
