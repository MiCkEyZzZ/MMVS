module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'template-curly-spacing': 'off',
        indent: [
            'error',
            2,
            {
                ignoredNodes: [ 'TemplateLiteral' ]
            }
        ],
        "vue/no-multiple-template-root": "off"
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 8,
        sourceType: 'module'
    }
}
