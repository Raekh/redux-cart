import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from './actions';
import cartItems from './cart-items';

const initialStore = {
	cart: cartItems,
	total: 0,
	amount: 3
};

const reducer = (
	state = initialStore,
	action
) => {
	if(action.type === CLEAR_CART) {
		return { ...state, cart: [], amount: 0 }
	}
	if(action.type === DECREASE) {
		let tempCart =  state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
		tempCart = state.cart.map((cartItem) => {
			if(cartItem.id === action.payload.id) {
				cartItem = { ...cartItem, amount: cartItem.amount - 1}
			}
			return cartItem;
		})
		return {
			...state,
			cart: tempCart
		}
	}
	if(action.type === INCREASE) {
		let tempCart = state.cart.map((cartItem) => {
			if(cartItem.id === action.payload.id) {
				return { ...cartItem, amount: cartItem.amount + 1}
			}
			return cartItem;
		})
		return {
			...state,
			cart: tempCart
		}
	}
	if(action.type === REMOVE) {
		return {
			...state,
			cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
		}
	}
	if(action.type === GET_TOTALS) {
		let {total, amount} = state.cart.reduce((acc, cur) => {
			return {
				...acc,
				total: parseFloat((acc.total + cur.price * cur.amount).toFixed(2)),
				amount: acc.amount + cur.amount
			};
		}, {total: 0, amount: 0})

		return {
			...state,
			amount,
			total
		}
	}
	if(action.type === TOGGLE_AMOUNT) {
		return {
			...state,
			cart: state.cart.map((cartItem) => {
				if(cartItem.id === action.payload.id) {
					if(action.payload.toggle === 'inc') {
						return {
							...cartItem,
							amount: cartItem.amount + 1
						}
					}
					if(action.payload.toggle === 'dec') {
						return {
							...cartItem,
							amount: cartItem.amount - 1
						}
					}
				}
				return cartItem
			})
		}
	}
	return state;
}

export default reducer;
