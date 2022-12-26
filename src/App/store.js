import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "../Features/Counter/CounterSlice";


export const store = configureStore({
    reducer: {
        counter: CounterSlice,
    },
});

export default store;