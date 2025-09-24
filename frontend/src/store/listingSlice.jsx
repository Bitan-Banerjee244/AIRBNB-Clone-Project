import { createSlice } from "@reduxjs/toolkit";

let listingSlice = createSlice({
  name: "list",
  initialState: {
    allListing: null,
  },
  reducers: {
    setAllListing: (state, action) => {
      state.allListing = action.payload;
    },
  },
});

export const { setAllListing } = listingSlice.actions;
export default listingSlice.reducer;