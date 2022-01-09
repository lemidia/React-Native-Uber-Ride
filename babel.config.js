module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],

    // to bundle the env to the app at build time
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
