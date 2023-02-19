import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../services/dataApi";

export type UserData = {
  [key: string]: string;
}

type State = {
  data: UserData
}

const initialState: State = {
  data: {}
}
let dataSlice = createSlice({
  name: "user",
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
} = dataSlice.actions

export default dataSlice
