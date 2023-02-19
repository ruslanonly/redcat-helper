import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../services/dataApi";
type State = {
  text: string
}

const initialState: State = {
  text: ""
}
let helperSlice = createSlice({
  name: "helper",
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<State>) => {
      state.text = action.payload.text
    }
  },
})

export const {
  setData
} = helperSlice.actions

export default helperSlice
