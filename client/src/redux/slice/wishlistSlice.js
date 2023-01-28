import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.data.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.data = state.data.filter((elem) => elem._id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
