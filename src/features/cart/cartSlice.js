import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            //payload is always new item
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            //Payload is the pizza Id
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload
            );
        },
        increaseItemQuantity(state, action) {
            //Payload is the pizza Id
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            );
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            //Payload is the pizza Id
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            );
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if (item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action);
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const {
    addItem,
    decreaseItemQuantity,
    deleteItem,
    clearCart,
    increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((item, cur) => item + cur.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((item, cur) => item + cur.totalPrice, 0);

//Check if element id exists or return 0
export const getCurrentQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

//Check out the "reselect" library to optimize Redux
