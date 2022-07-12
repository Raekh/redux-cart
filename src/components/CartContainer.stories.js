import React from "react";
import CartContainer from './CartContainer';
import store from '../store';
import { Provider } from "react-redux";
import '../index.css';
import { CLEAR_CART } from "../actions";

export default {
	title: 'Cart container',
	component: CartContainer
}

const Template = (args) => (
	<Provider store={store}>
		<CartContainer {...args} />
	</Provider>
)

export const Default = Template.bind({});

export const Empty = Template.bind({});
Empty.args = {
	...Default,
	cart: []
}
