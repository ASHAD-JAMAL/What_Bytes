import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/score/scoreSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
});
