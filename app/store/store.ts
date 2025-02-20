import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../componentes/counter/CounterSlice";
import cartReducer from "../componentes/cart/CartSlice";
import { catApiDois } from "../store/catApiDois";
import { catsApi } from "../store/catApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    [catApiDois.reducerPath]: catApiDois.reducer, 
    [catsApi.reducerPath]: catsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApiDois.middleware, catsApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

