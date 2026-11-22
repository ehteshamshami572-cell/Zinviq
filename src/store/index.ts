import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/ui-slice';
import showcaseReducer from './slices/showcase-slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      showcase: showcaseReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
