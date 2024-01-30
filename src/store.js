import { configureStore } from "@reduxjs/toolkit";
import { api } from "./redux/api/api";
import gamesSlice from "./redux/slices/gamesSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    games: gamesSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
