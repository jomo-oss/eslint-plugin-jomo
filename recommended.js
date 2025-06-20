import crisp from "eslint-plugin-crisp";

let _configJSDoc = crisp.configs.recommended[0];
let _configCrisp = crisp.configs.recommended[1];

// Rename 'crisp/' rules to 'jomo/'
Object.keys(_configCrisp.rules).forEach((key) => {
  if (key.startsWith("crisp/")) {
    let _key = key.replace("crisp/", "jomo/");

    _configCrisp.rules[_key] = _configCrisp.rules[key];

    delete _configCrisp.rules[key];
  }
});

export default function configRecommended(pluginJomo) {
  return [
    _configJSDoc,
    _configCrisp,

    {
      plugins: {
        // Define 'crisp' plugin as 'jomo', so we can reference rules with \
        //   'jomo/'
        jomo: crisp
      },

      rules: {
        "jomo/header-check": ["error", {
          "patterns": [
            "\n \\* This file is part of .+\\n \\*\\n \\* Copyright \\(c\\) \\d{4} Jomo SAS\\n \\* All rights belong to Jomo SAS\\n ",
            "\n \\* This file is part of .+\\n \\* .+ script\\n \\*\\n \\* Copyright \\d{4}, Jomo SAS\\n \\* Author: .+\\n ",
            "\n \\* Bundle: .+\\n \\* Project: .+\\n \\* Author: .+\\n \\* Copyright: \\d{4}, Jomo SAS\\n "
          ]
        }]
      }
    }
  ];
}
