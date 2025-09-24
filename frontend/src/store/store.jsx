import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import listReducer from "./listingSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    list: listReducer,
  },
});
export default store;
