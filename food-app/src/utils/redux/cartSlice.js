import { createSlice } from "@reduxjs/toolkit";

/**
 * createSlice function will return similar to below format:
 * {
 *  actions:{
 *  },
 *  reducer:{
 *  }
 * }
 */
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers:{
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart:(state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
            // const newState = {
            //     ...state
            // };
            // newState = [];
            // return newState;
        }
    }
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;