export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE = 'REMOVE';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

export const removeItem = (id) => {
	return {type: REMOVE, payload: {id}}
}
