import { createSlice } from "@reduxjs/toolkit";

const initialValue = { value: [] };

export const productSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
