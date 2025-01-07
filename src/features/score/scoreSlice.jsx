import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  score: 12,
  percentile: 90,
  rank: 1,
};
export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    update: (state, action) => {
      state.score = action.payload.score;
      state.percentile = action.payload.percentile;
      state.rank = action.payload.rank;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = scoreSlice.actions;

export default scoreSlice.reducer;
