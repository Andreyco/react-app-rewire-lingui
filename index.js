const { injectBabelPlugin } = require('react-app-rewired');

function createLinguiRewire(options = {}) {
  return function(config, env) {
    return rewireLingui(config, env, options);
  };
}

function rewireLingui(config, env, options = {}) {
  config = injectBabelPlugin('@lingui/babel-plugin-transform-js', config);
  config = injectBabelPlugin('@lingui/babel-plugin-transform-react', config);
  return config;
}

module.exports = {
  rewireLingui,
  createLinguiRewire,
};
