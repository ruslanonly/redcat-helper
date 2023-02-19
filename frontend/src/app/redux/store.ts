import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dataSlice from "./slices/dataSlice";
import helperSlice from "./slices/helperSlice";
// Slices

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    helper: helperSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;