module.exports = {
  configs: {
    recommended: require("./recommended"),
    "recommended-vue": require("./recommended-vue")
  },
  rules: {
    "align-one-var": require("./rules/align-one-var"),
    "align-requires": require("./rules/align-requires"),
    "const": require("./rules/const"),
    "constructor-variables": require("./rules/constructor-variables"),
    "header-check": require("./rules/header-check"),
    "header-comments-check": require("./rules/header-comments-check"),
    "jsdoc-align-params": require("./rules/jsdoc-align-params"),
    "jsdoc-check-indentation": require("./rules/jsdoc-check-indentation"),
    "jsdoc-check-optional-params": require("./rules/jsdoc-check-optional-params"),
    "jsdoc-enforce-access": require("./rules/jsdoc-enforce-access"),
    "jsdoc-enforce-classdesc": require("./rules/jsdoc-enforce-classdesc"),
    "methods-naming": require("./rules/methods-naming"),
    "multiline-comment-end-backslash": require("./rules/multiline-comment-end-backslash"),
    "no-async": require("./rules/no-async"),
    "no-var-in-blocks": require("./rules/no-var-in-blocks"),
    "no-space-in-optional-arguments": require("./rules/no-space-in-optional-arguments"),
    "no-useless-template-literals": require("./rules/no-useless-template-literals"),
    "no-short-parameters": require("./rules/no-short-parameters"),
    "one-space-after-operator": require("./rules/one-space-after-operator"),
    "regex-in-constructor": require("./rules/regex-in-constructor"),
    "ternary-parenthesis": require("./rules/ternary-parenthesis"),
    "multiline-comment-end-backslash": require("./rules/multiline-comment-end-backslash"),
    "two-lines-between-class-members": require("./rules/two-lines-between-class-members"),
    "variable-names": require("./rules/variable-names"),
    "align-consecutive-class-assignements": require("./rules/align-consecutive-class-assignements"),
    "vue-computed-order": require("./rules/vue-computed-order"),
    "vue-emits-order": require("./rules/vue-emits-order"),
    "vue-header-check": require("./rules/vue-header-check"),
    "vue-html-quotes": require("./rules/vue-html-quotes"),
    "vue-props-declaration-order": require("./rules/vue-props-declaration-order")
  }
};
