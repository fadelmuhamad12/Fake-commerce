import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity:0,
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const ExistingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if(!ExistingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                ExistingItem.quantity++;
                ExistingItem.totalPrice = ExistingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const ExistingItem = state.items.find(item=> item.id === id);
            state.totalQuantity--;
            if(ExistingItem === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else {
                ExistingItem.quantity--;
                ExistingItem.totalPrice = ExistingItem.totalPrice - ExistingItem.price;
            }
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;