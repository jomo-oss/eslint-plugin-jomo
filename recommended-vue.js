import crisp from "eslint-plugin-crisp";

let _configJS = crisp.configs["recommended-vue"][0];
let _configJSDoc = crisp.configs["recommended-vue"][1];
let _configVue = crisp.configs["recommended-vue"][2];
let _configVuePug = crisp.configs["recommended-vue"][3];
let _configCrisp = crisp.configs["recommended-vue"][4];

// Rename 'crisp/' rules to 'jomo/'
Object.keys(_configCrisp.rules).forEach((key) => {
  if (key.startsWith("crisp/")) {
    let _key = key.replace("crisp/", "jomo/");

    _configCrisp.rules[_key] = _configCrisp.rules[key];

    delete _configCrisp.rules[key];
  }
});

export default function configRecommendedVue(pluginJomo) {
  return [
    _configJS,
    _configJSDoc,
    _configVue,
    _configVuePug,
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
