import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["burgers", "pizza"],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {},
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
