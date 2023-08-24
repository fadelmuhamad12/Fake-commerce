import { configureStore } from "@reduxjs/toolkit";
import uiCartSlice from "./uiCart-slice";
import cartSlice from "./cart-Slice";



const store = configureStore({
    reducer: {
        uiCart: uiCartSlice.reducer,
        cart: cartSlice.reducer,
    }
});


export default store;
