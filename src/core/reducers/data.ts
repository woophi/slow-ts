import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FetchingDataType,
  FetchingReadyPayload,
  FetchingStateName,
  FetchingStatus,
  FetchingUpdatePayload,
} from "core/models";

const initialState: { [key in FetchingStateName]?: FetchingDataType<key> } = {};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    update(state, a: PayloadAction<FetchingUpdatePayload>) {
      const { name } = a.payload;
      if (!state[name]) {
        state[name] = {} as any;
      }
      state[name]!.status = FetchingStatus.Updating;
    },
    ready(state, a: PayloadAction<FetchingReadyPayload>) {
      const { name, data } = a.payload;
      if (!state[name]) {
        state[name] = {} as any;
      }
      state[name]!.status = FetchingStatus.Ready;
      state[name]!.data = data;
    },
    error(state, a: PayloadAction<{ name: FetchingStateName; error: any }>) {
      const { name, error } = a.payload;
      if (!state[name]) {
        state[name] = {} as any;
      }
      state[name]!.error = error;
      state[name]!.status = FetchingStatus.Error;
    },
  },
});

export const dataActions = dataSlice.actions;
export const dataReducer = dataSlice.reducer;

export type DataActions =
  | PayloadAction<FetchingUpdatePayload>
  | PayloadAction<FetchingReadyPayload>
  | PayloadAction<{ name: FetchingStateName; error: any }>;
