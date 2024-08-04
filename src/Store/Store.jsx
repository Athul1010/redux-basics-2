import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice"; // Import the product slice

const store = configureStore({
    reducer: {
        products: ProductSlice // Add the product slice to the store
    }
})

export default store;