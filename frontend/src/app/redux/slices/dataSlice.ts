import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../services/dataApi";

export type UserData = {
  second_name?: string
  first_name?: string
  patronymic?: string
  birthdate?: string
  gender?: string
  address?: string
  passport_series?: string
  passport_number?: string
  passport_issue_date?: string
  snils?: string
}

type State = {
  data: UserData
}

const initialState: State = {
  data: {}
}
let authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<UserData>) => {
      state.data = {
        ...state.data,
        ...action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getData.matchFulfilled,
      (state, { payload }) => {
        state.data = payload
        state.data = payload
      }
    )
  }
})

export const {
  setData
} = authSlice.actions

export default authSlice
