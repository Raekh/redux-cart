import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { enhancer } from 'addon-redux'

const store = configureStore({
	reducer,
	enhancers: [enhancer]
})

export default store;

console.log("%cstore", "color:limegreen", store.getState());
