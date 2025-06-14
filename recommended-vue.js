module.exports = {
  env: {
    es6: true,
    node: true
  },

  plugins: [
    "eslint-plugin-jsdoc"
  ],

  extends: [
    "eslint:recommended",
    "plugin:jsdoc/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:vue-pug/vue3-recommended"
  ],

  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: "return"
      },

      preferredTypes: {
        Function: "function",
        Array: "array",
        Map: "map",
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
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "curly": "error",
    "computed-property-spacing": ["error", "never"],
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
        "VariableDeclarator": 1,
        "outerIIFEBody": 0,
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "offsetTernaryExpressions": true
      }
    ],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "newline-per-chained-call": "error",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-eval": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-mixed-spaces-and-tabs": "error",
    "no-restricted-syntax": [
      "error",

      {
        "selector": "SwitchCase > *.consequent[type!='BlockStatement']",
        "message": "Switch cases without braces are disallowed."
      }
    ],
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
    "prefer-arrow-callback": "error",
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
    "semi-spacing": ["error", { "before": false, "after": true }],
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",

    // Jomo JS rules
    "jomo/align-comments": "error",
    "jomo/enforce-optional": "error",
    "jomo/header-check": "error",
    "jomo/header-comments-check": "error",
    "jomo/import-group-comment": "error",
    "jomo/import-group-order": "error",
    "jomo/methods-naming": "error",
    "jomo/methods-ordering": "error",
    "jomo/multiline-comment-end-backslash": "error",
    "jomo/newline-after-switch-case": "error",
    "jomo/no-async": "error",
    "jomo/no-extra-line-within-function": "error",
    "jomo/no-short-parameters": [
      "error",

      {
        "exceptions": ["_", "$", "x", "y"]
      }
    ],
    "jomo/no-useless-template-literals": "error",
    "jomo/no-var-in-blocks": "error",
    "jomo/one-space-after-operator": [
      "error",

      {
        "checkColon": false
      }
    ],
    "jomo/regex-in-constructor": "error",
    "jomo/ternary-parenthesis": "error",
    "jomo/variable-names": "error",

    // General JSDoc rules
    "jsdoc/require-description": "error",
    "jsdoc/require-param-description": "off",
    "jsdoc/require-jsdoc": [
      "error",

      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
        },

        "contexts": [
          "Property[key.name=\"getters\"] > ObjectExpression > Property",
          "Property[key.name=\"methods\"] > ObjectExpression > Property"
        ]
      }
    ],
    "jsdoc/sort-tags": [
      "error",

      {
        "tagSequence": [
          {
            "tags": [
              "private",
              "protected",
              "public",

              "class",

              "classdesc",

              "param",
              "return"
            ]
          }
        ]
      }
    ],

    // Jomo JSDoc rules
    "jomo/jsdoc-align-params": "error",
    "jomo/jsdoc-check-indentation": "error",
    "jomo/jsdoc-check-optional-params": "error",
    "jomo/jsdoc-enforce-access": "error",
    "jomo/jsdoc-enforce-classdesc": "error",
    "jomo/jsdoc-require-description-uppercase": "error",

    // General Vue rules
    "vue/attributes-order": [
      "error",

      {
        "order": [
          "RENDER_MODIFIERS",
          "CONDITIONALS",
          "OTHER_DIRECTIVES",
          "LIST_RENDERING",
          "SLOT",
          "TWO_WAY_BINDING",
          "CONTENT",
          "EVENTS",
          "DEFINITION",
          "ATTR_DYNAMIC",
          "ATTR_STATIC",
          "ATTR_SHORTHAND_BOOL"
        ],
        "alphabetical": false
      }
    ],
    "vue/block-lang": [
      "error",

      {
        "script": { "allowNoLang": true }
      }
    ],
    "vue/block-order": [
      "error",

      {
        "order": ["template", "script", "style"]
      }
    ],
    "vue/block-tag-newline": [
      "error",

      {
        "singleline": "always",
        "multiline": "always",
        "maxEmptyLines": 0
      }
    ],
    "vue/comma-dangle": "error",
    "vue/component-api-style": ["error", ["options"]],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/component-options-name-casing": ["error", "PascalCase"],
    "vue/custom-event-name-casing": [
      "error",
      "camelCase",

      {
        "ignores": [
          "/^[a-z]+(?:-[a-z]+)*(?::[a-z]+(?:-[a-z]+)*)*$/i"
        ]
      }
    ],
    "vue/eqeqeq": "error",
    "vue/html-comment-content-spacing": ["error", "always"],
    "vue/html-quotes": "off",
    "vue/key-spacing": [
      "error",

      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "vue/match-component-import-name": "error",
    "vue/max-len": [
      "error",

      {
        "code": 80,
        "template": 999,
        "ignorePattern": "^import|\`(.+?)\`|\/\\*\\* \@type|\@return \\{|\\*{20,}",
        "ignoreStrings": true,
        "ignoreUrls": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "vue/new-line-between-multi-line-property": "error",
    "vue/no-bare-strings-in-template": "error",
    "vue/no-irregular-whitespace": "error",
    "vue/no-multiple-objects-in-class": "error",
    "vue/no-mutating-props": [
      "error",

      {
        "shallowOnly": true
      }
    ],
    "vue/no-static-inline-styles": "error",
    "vue/no-use-v-else-with-v-for": "error",
    "vue/no-useless-v-bind": "error",
    "vue/no-v-html": "off",
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/padding-lines-in-component-definition": [
      "error",

      {
        "groupSingleLineProperties": false
      }
    ],
    "vue/prefer-true-attribute-shorthand": "error",
    "vue/require-direct-export": "error",
    "vue/v-for-delimiter-style": ["error", "in"],
    "vue/v-slot-style": [
      "error",

      {
        "atComponent": "v-slot",
        "default": "v-slot",
        "named": "longform"
      }
    ],

    // Jomo Vue rules
    "jomo/vue-attribute-comma": "error",
    "jomo/vue-attribute-linebreak": "error",
    "jomo/vue-computed-order": "error",
    "jomo/vue-emits-order": "error",
    "jomo/vue-header-check": "error",
    "jomo/vue-html-indent": "error",
    "jomo/vue-html-quotes": "error",
    "jomo/vue-no-regex-data": "error",
    "jomo/vue-props-declaration-line-break": "error",
    "jomo/vue-props-declaration-multiline": "error",
    "jomo/vue-props-declaration-order": "error",
    "jomo/vue-ref-case": "error"
  }
}
