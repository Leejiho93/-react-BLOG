module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": [
        ["airbnb", "airbnb/hooks"]
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react-hooks",
        "import"
    ],
    "rules": {
        "no-underscore-dangle": "off",
        "react/forbid-prop-types": 0,
        "object-curly-newline": 0,
        "arrow-parens": ["warn", "as-needed"],
    }
};