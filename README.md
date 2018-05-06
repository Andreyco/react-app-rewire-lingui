# react-app-rewire-lingui

Add **jsLingui** babel plugins to create-react-app using **react-app-rewired**

This package adds `@lingui/babel-plugin-transform-js` and `@lingui/babel-plugin-transform-react` to you app via [react-app-rewired](https://github.com/timarney/react-app-rewired)

## Installation
npm
```
npm install --save-dev react-app-rewire-lingui

// these peer dependencies are required, you should add them on your own.
npm install --save-dev @lingui/babel-plugin-transform-js @lingui/babel-plugin-transform-react
```

Yarn
```
yarn add --dev react-app-rewire-lingui

// these peer dependencies are required, you should add them on your own.
yarn add --dev @lingui/babel-plugin-transform-js @lingui/babel-plugin-transform-react
```

## Usage
In the `config-overrides.js` you created for `react-app-rewired` add this code:
```js
const { rewireLingui } = require('react-app-rewire-lingui');

/* config-overrides.js */
module.exports = function override(config, env) {
  return rewireLingui(config, env);
}
```

If you are using `compose` utility provided by `react-app-rewired` to add multiple rewires, use this code:
```js
const { compose } = require('react-app-rewired');
const { createLinguiRewire } = require('react-app-rewire-lingui');

/* config-overrides.js */
module.exports = function override(config, env) {
  const rewires = compose(
    createRewireForSomeOtherPlugin(),
    createRewireEvenFormMorePlugins(),
    createLinguiRewire(),
  );
  return rewires(config, env);
};
```

## Usage with Storybook
When using `@storybooks/storybook` with CRA via `getstorybook`, create a `webpack.config.js` file in `.storybook` folder and add this code:

```js
const { rewireLingui } = require('react-app-rewire-lingui');

module.exports = function override(config, env) {
  return rewireLingui(config, env);
};
```

## License
Licensed under the MIT License, Copyright ©️ 2018 Andrej Badin. See LICENSE.md for more information.
