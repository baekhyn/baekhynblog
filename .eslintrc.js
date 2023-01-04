module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 0,
    },
};
