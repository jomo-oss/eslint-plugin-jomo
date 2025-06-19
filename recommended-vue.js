import crisp from "eslint-plugin-crisp";

export default function configRecommendedVue(pluginJomo) {
  return [
    crisp.configs["recommended-vue"],

    {
      plugins: {
        jomo: crisp
      }
    }
  ];
}
