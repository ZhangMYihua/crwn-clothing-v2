module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'consistent-return': 2,
        'indent': [1, 4],
        'semi': [1, 'always'],
        'quotes': ['error', 'single'],
        'space-unary-ops': 2
    }
};
