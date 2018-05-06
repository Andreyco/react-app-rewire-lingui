const { injectBabelPlugin } = require('react-app-rewired');

module.exports.rewireLingui = function rewireLingui(config, env, options = {}) {
    config = injectBabelPlugin('@lingui/babel-plugin-transform-js', config);
    config = injectBabelPlugin('@lingui/babel-plugin-transform-react', config);
    return config;
}

module.exports.createLinguiRewire = function createLinguiRewire(options = {}) {
    return function(config, env) {
        return rewireLingui(config, env, options);
    }
}