import crisp from "eslint-plugin-crisp";

// Preserve every config entry and rename 'crisp/' rules
let _configs = crisp.configs.recommended.map((config) => {
  if (!config.rules) {
    return config;
  }

  return {
    ...config,

    rules: Object.fromEntries(Object.entries(config.rules).map(([key, value]) => {
      return [key.replace(/^crisp\//, "jomo/"), value];
    }))
  };
});

export default function configRecommended(pluginJomo) {
  return [
    ..._configs,

    {
      plugins: {
        // Define 'crisp' plugin as 'jomo', so we can reference rules with 'jomo/'
        jomo: crisp
      },

      rules: {
        // General JS rules
        "max-len": ["error", 100],

        // Jomo JS rules
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
