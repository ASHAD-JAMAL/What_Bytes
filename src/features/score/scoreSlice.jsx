import { createSlice } from "@reduxjs/toolkit";

const getInitialData = () => {
  if (typeof window !== "undefined") {
    const rawData = localStorage.getItem("stats");
    return rawData ? JSON.parse(rawData) : {};
  }
  return {}; // Return empty object during server-side rendering
};

const data = getInitialData();

console.log(data);

const initialState = {
  score: data?.score || 12,
  percentile: data?.percentile || 90,
  rank: data?.rank || 1,
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    update: (state, action) => {
      state.score = action.payload.score;
      state.percentile = action.payload.percentile;
      state.rank = action.payload.rank;
      // Save the updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("stats", JSON.stringify(state));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = scoreSlice.actions;

export default scoreSlice.reducer;
