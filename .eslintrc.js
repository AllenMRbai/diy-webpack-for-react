module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: ["airbnb", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "react/forbid-prop-types": [0]
  }
};
