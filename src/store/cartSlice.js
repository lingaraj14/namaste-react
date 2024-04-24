import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //state.items.pop();
      state.items = action.payload;
    },
    clearItem: (state) => {
      console.log(current(state)); //To console the current sate, we need to call state inside current method, provided by `redux toolkit`
      //RTK - either Mutate the existing  state or return a new State
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
