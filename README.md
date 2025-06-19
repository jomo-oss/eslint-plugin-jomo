# ESLint Plugin Jomo

[![Build and Release](https://github.com/jomo-oss/eslint-plugin-jomo/workflows/Build%20and%20Release/badge.svg)](https://github.com/jomo-oss/eslint-plugin-jomo/actions?query=workflow%3A%22Build+and+Release%22) [![NPM](https://img.shields.io/npm/v/eslint-plugin-jomo.svg)](https://www.npmjs.com/package/eslint-plugin-jomo) [![Downloads](https://img.shields.io/npm/dt/eslint-plugin-jomo.svg)](https://www.npmjs.com/package/eslint-plugin-jomo)

A set of custom [ESLint](https://eslint.org/) configurations and rules for Jomo.

**😘 Maintainers**: [@eliottvincent](https://github.com/eliottvincent)

> **Note:** This package mostly uses [eslint-plugin-crisp](https://github.com/crisp-oss/eslint-plugin-crisp) rules, with some minor adjustments.

## Usage

The plugin provides two configurations:
* `recommended`: JS rules targetting backend code (Node.js)
* `recommended-vue`: JS rules targetting frontend code (Vue.js)

Add the plugin in your ESLint config object, then extend the desired configuration:
```javascript
import jomo from "eslint-plugin-jomo";

export default defineConfig([
  jomo.configs["recommended"],
  // OR jomo.configs["recommended-vue"]

  {
    rules: {
      // Rules override
    }
  }
]);
```

## License

eslint-plugin-jomo is released under the MIT License. See the bundled LICENSE file for details.
