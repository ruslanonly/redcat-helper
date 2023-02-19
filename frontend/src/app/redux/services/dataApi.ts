import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/"
  }),
  endpoints: (builder) => ({
    setData: builder.mutation<{}, {[key: string]: string}>({
      query: (data) =>({
        url: "/api/save_data",
        method: "POST",
        body: {
          user_id: 1,
          user_data: data
        }
      })
    }),
    getData: builder.query({
      query: () =>({
        url: "/api/get_data?1",
        method: "GET",
      })
    })
  })  
})

export const { useGetDataQuery, useSetDataMutation } = api
