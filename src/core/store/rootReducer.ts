import { combineReducers } from '@reduxjs/toolkit';
import { DataActions, dataReducer } from 'core/reducers/data';

const uiReducer = combineReducers({
  data: dataReducer,
});

export const rootReducer = combineReducers({
  ui: uiReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AllActions = DataActions;

declare module 'react-redux' {
  export interface DefaultRootState extends AppState {}
}
