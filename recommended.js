module.exports = {
  env: {
    es6: true,
    node: true
  },

  plugins: [
    "eslint-plugin-jsdoc"
  ],

  extends: [
    "plugin:jsdoc/recommended"
  ],

  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: "return"
      },

      preferredTypes: {
        Function: "function",
        Array: "array",
        Integer: "number"
      }
    }
  },

  rules: {
    // General JS rules
    "arrow-parens": ["error", "always"],
    "brace-style": [
      "error",
      "1tbs",

      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": ["error", "never"],
    "comma-style": ["error", "last"],
    "curly": "error",
    "default-param-last": "error",
    "default-case-last": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "eol-last": "error",
    "for-direction": "error",
    "indent": [
      "error",
      2,

      {
        "SwitchCase": 1,
        "FunctionDeclaration": {
          "parameters": "off"
        },
        "FunctionExpression": {
          "parameters": "off"
        },
        "CallExpression": {
          "arguments": "off"
        },
        "VariableDeclarator": "first",
        "outerIIFEBody": 0,
        "ArrayExpression": "first",
        "ObjectExpression": "first",
        "ImportDeclaration": "first",
        "flatTernaryExpressions": false,
        "ignoredNodes": [
          "BinaryExpression",
          "ConditionalExpression",
          "IfStatement *",
          "VariableDeclarator",
          "VariableDeclarator > CallExpression",
          "CallExpression > ArrayExpression"
        ]
      }
    ],
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", 80],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-eval": "error",
    "no-magic-numbers": [
      "error",

      {
        "ignore": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100],
        "ignoreArrayIndexes": true,
        "ignoreDefaultValues": true
      }
    ],
    "no-multi-str": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-unused-vars": "warn",
    "no-unsafe-optional-chaining": "error",
    "object-curly-newline": [
      "error",

      {
        "multiline": true, "consistent": true
      }
    ],
    "object-curly-spacing": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": [
      "error",

      { "blankLine": "always", "prev": "let", "next": "*" },
      { "blankLine": "any", "prev": "let", "next": "let" },
      { "blankLine": "always", "prev": "const", "next": "*" },
      { "blankLine": "any", "prev": "const", "next": "const" },
      { "blankLine": "always", "prev": "block-like", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "break" },
      { "blankLine": "any", "prev": "empty", "next": "break" },
      { "blankLine": "always", "prev": "*", "next": "block-like" },
      { "blankLine": "any", "prev": "case", "next": "case" },
      { "blankLine": "always", "prev": "continue", "next": "*" },
      { "blankLine": "always", "prev": "break", "next": "*" }
    ],
    "quotes": [
      "error",
      "double",

      {
        "avoidEscape": true, "allowTemplateLiterals": true
      }
    ],
    "quote-props": ["error", "as-needed"],
    "semi": ["error", "always"],
    "semi-style": ["error", "last"],
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],

    // Jomo JS rules
    "jomo/align-comments": "error",
    "jomo/align-consecutive-class-assignements": "error",
    "jomo/align-one-var": "error",
    "jomo/align-requires": "error",
    "jomo/const": "error",
    "jomo/constructor-variables": "error",
    "jomo/enforce-optional": "error",
    "jomo/header-check": "error",
    "jomo/header-comments-check": "error",
    "jomo/methods-naming": "error",
    "jomo/methods-ordering": "error",
    "jomo/multiline-comment-end-backslash": "error",
    "jomo/newline-after-switch-case": "error",
    "jomo/no-async": "error",
    "jomo/no-extra-line-within-function": "error",
    "jomo/no-var-in-blocks": "error",
    "jomo/no-short-parameters": [
      "error",

      {
        "exceptions": ["_", "$"]
      }
    ],
    "jomo/no-space-in-optional-arguments": "error",
    "jomo/one-space-after-operator": "error",
    "jomo/regex-in-constructor": "error",
    "jomo/ternary-parenthesis": "error",
    "jomo/two-lines-between-class-members": "error",
    "jomo/variable-names": "error",

    // General JSDoc rules
    "jsdoc/no-undefined-types": "off",
    "jsdoc/require-jsdoc": [
      "error",

      {
        require: {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
        }
      }
    ],
    "jsdoc/require-param-description": "off",
    "jsdoc/sort-tags": [
      "error",

      {
        tagSequence: [
          {
            tags: [
              "private",
              "protected",
              "public",

              "class",
              "classdesc",

              "generator",

              "param",
              "return",
              "yields"
            ]
          }
        ]
      }
    ],

    // Jomo JSDoc rules
    "jomo/jsdoc-align-params": "error",
    "jomo/jsdoc-check-indentation": "error",
    "jomo/jsdoc-enforce-classdesc": "error",
    "jomo/jsdoc-require-description-uppercase": "error"
  }
}
