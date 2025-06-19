import crisp from "eslint-plugin-crisp";

export default function configRecommended(pluginJomo) {
  return [
    crisp.configs.recommended,

    {
      plugins: {
        jomo: crisp
      }
    }
  ];
}
