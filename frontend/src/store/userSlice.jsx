import { createSlice } from "@reduxjs/toolkit";

let userSLice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSLice.actions;
export default userSLice.reducer;
