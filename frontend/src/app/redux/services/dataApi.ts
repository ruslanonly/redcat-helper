import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { UserData } from "../slices/dataSlice"

type LoginRequest = {
  username: string,
  password: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/"
  }),
  endpoints: (builder) => ({
    setData: builder.mutation<{}, UserData>({
      query: (data) =>({
        url: "/api/save_data?123123",
        method: "POST",
        body: data
      })
    }),
    getData: builder.query({
      query: (data) =>({
        url: "/api/get_data?1",
        method: "POST",
        body: data
      })
    })
  })  
})

export const { useGetDataQuery, useSetDataMutation } = api
