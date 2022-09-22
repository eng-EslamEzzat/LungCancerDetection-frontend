import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: null,
  result: null
};

const detectionSlice = createSlice({
  name: "detection",
  initialState,
  reducers: {
    addDetection: (state, action) => {
      state.image = action.payload.image;
      state.result = action.payload.result;
    },
    clearDetection: (state) => {
      state = initialState;
    }
  }
});

export const { addDetection, clearDetection } = detectionSlice.actions;
export default detectionSlice.reducer;
