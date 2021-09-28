import { configureStore } from "@reduxjs/toolkit";
import categories from './slices/categories.slice';
import products from './slices/products.slice'

const store = configureStore({
    reducer : {
        categories,
        products
    }
});


export type RootState = ReturnType<typeof store.getState>;

export default store;