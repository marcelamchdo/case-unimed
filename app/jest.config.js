module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest"
  },
  moduleFileExtensions: [
    "js",
    "jsx",
    "mjs"
  ],
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).js?(x)"
  ],
  testEnvironment: "node"
}
  