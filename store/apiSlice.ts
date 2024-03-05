import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { returnObject } from "@/type/type";

export const jokesAPI = createApi({
  reducerPath: "jokesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v2.jokeapi.dev",
  }),


  tagTypes: ["Jokes"],
  endpoints: (builder) => ({
    getJokes: builder.query<returnObject, void>({
      query: () => '/joke/Any?amount=20',
      providesTags:["Jokes"],
    }),
  }),
});

export const { useGetJokesQuery } = jokesAPI;