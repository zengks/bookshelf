module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-native/all",
    ],
    plugins: ["react", "react-native", "import"],
    env: {
        browser: true,
        es2021: true,
        "react-native/react-native": true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "no-undef": "error", // Show error for undefined (unimported) components
        "react/prop-types": "off", // Optional, turn off if not using prop-types
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
