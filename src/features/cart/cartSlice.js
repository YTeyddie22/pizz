import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //cart:[]
    cart: [
        {
            pizzaId: 12,
            name: "Mediterranean",
            quantity: 2,
            unitPrice: 15,
            totalPrice: 30,
        },
    ],
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
