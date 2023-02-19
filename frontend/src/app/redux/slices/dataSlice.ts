import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../services/dataApi";

type State = {
  data: {
    [key: string]: string;
  }
}

const initialState: State = {
  data: {}
}
let dataSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<{[key: string]: string;}>) => {
      const newObject = {
        ...action.payload,
        ...state.data,
      }
      console.log(newObject)
      state.data = newObject
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getData.matchFulfilled,
      (state, { payload }) => {
        state.data = payload
      }
    )
  }
})

export const {
  setData
} = dataSlice.actions

export default dataSlice
