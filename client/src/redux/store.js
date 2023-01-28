import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice/dataSlice";
import wishlistReducer from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    solutions: dataReducer,
    wishlist: wishlistReducer,
  },
});
