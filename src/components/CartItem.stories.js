import React from "react";
import CartItem from './CartItem';
import { PARAM_REDUX_MERGE_STATE } from 'addon-redux';
import store from '../store';
import { Provider } from "react-redux";
import '../index.css';

export default {
	title: 'Cart item',
	component: CartItem,
}


const Template = (args) => (
	<Provider store={store}>
		<CartItem {...args}/>
	</Provider>
)

console.log("%cstore", "", store.getState());

const firstCartItem = store.getState().cart.at(0);
const { id, title, amount, price, img } = firstCartItem;

export const Default = Template.bind({});
Default.args = {
	id,
	title,
	amount,
	price,
	img
}

export const NoImg = Template.bind({});
NoImg.args = {
	...Default.args,
	img: ''
}
