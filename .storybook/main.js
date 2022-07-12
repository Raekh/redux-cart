// import { configureStore } from "@reduxjs/toolkit";
// import { configure, addDecorator } from '@storybook/react';
// import { Provider } from "react-redux";
// import store from '../src/store';

// const store = configureStore({
// 	store
// })

// addDecorator(Story => {
// 	<Provider store={store}>
// 		<Story />
// 	</Provider>
// })

// configure(require.context('../src', true, /\.stories\.js$/), module)
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-redux",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react"
}
