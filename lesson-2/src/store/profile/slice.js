import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "User",
  visible: true,
  auth: false,
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    toggleProfile: (state, action) => {
      state.visible = !state.visible;
    },
    auth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { changeName, toggleProfile, auth } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
