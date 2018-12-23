# Design Systems with React and Typescript in Storybook

* <https://egghead.io/courses/design-systems-with-react-and-typescript-in-storybook>

```bash
mkdir egghead-storybook
cd ./egghead-storybook
yarn init -y
yarn add -D @storybook/react babel-core
yarn add react react-dom
mkdir .storybook src
touch .storybook/config.js
```

Add script to package.json file:

```bash
"scripts": {
  "storybook": "start-storybook -p 6006 -c .storybook"
}
```

```bash
npm run storybook
```

```bash
yarn add -D @storybook/addons storybook-addon-jsx
```

```bash
yarn add -D @storybook/addon-info
```

```bash
yarn add -D @storybook/addon-knobs
```

```bash
yarn add -D @types/react typescript awesome-typescript-loader
```

```bash
yarn add -D react-docgen-typescript-webpack-plugin
```