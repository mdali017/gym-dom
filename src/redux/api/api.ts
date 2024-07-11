import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "gym_api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        // console.log(data)
        return {
          url: "/api/tasks/todo",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["category"],
    }),
  }),
});

export const { useGetAllCategoryQuery } = baseApi;
