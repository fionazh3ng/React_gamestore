import { api } from "../api/api";
import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: [],

  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getGames.matchFulfilled,
      (state, { payload }) => {
        // console.log(payload);
        return payload;
      }
    );
  },
});

export default gamesSlice.reducer;
