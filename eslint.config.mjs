import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "18.3.1",
      },
    },
    rules: {
      semi: ["error", "always"], // Enforce semicolons
      quotes: ["warn", "single"], // Prefer single quotes but only warn
      "no-console": "warn", // Warn when console statements are used
    },
  },
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
