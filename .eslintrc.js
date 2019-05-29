module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "babel"],
  rules: {
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "no-invalid-this": 0,
    "babel/no-invalid-this": 1,
    "arrow-parens": 0,
    "no-debugger": 0
  }
};
