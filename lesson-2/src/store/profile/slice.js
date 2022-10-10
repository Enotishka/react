import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "User",
  visible: true,
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
  },
});

export const { changeName, toggleProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
