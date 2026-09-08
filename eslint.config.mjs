import eslint from "@eslint/js";

export default[
    eslint.configs.recommended,
    {
        files: ["**/*.js"],
        ignores: ["node_modules/**", "coverage/**"],
        languageOptions: {
            globals: {
                document: "readonly",
                window: "readonly",
                history: "readonly",
                localStorage: "readonly",
                setTimeout: "readonly",
                crypto: "readonly",
                fetch: "readonly",
                console: "readonly"
            }
        }
    }
];
