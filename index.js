import configRecommended from "./recommended.js";
import configRecommendedVue from "./recommended-vue.js";

import projectPackage from "./package.json" assert { type: "json" };

const plugin = {
  meta: {
    name: projectPackage.name,
    version: projectPackage.version,
    namespace: "jomo"
  },

  configs: {},

  rules: {}
};

// Assign configs here so we can reference `plugin`
Object.assign(plugin.configs, {
  recommended: configRecommended(plugin),
  "recommended-vue": configRecommendedVue(plugin)
});

export default plugin;
