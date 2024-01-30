import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL || "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => "/api/video-games",
    }),
    getGame: builder.query({
      query: (id) => "/api/video-games/" + id,
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = api;
