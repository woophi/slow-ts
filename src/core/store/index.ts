import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';


export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

type extendend = { hot: { accept: (f: string, cb: () => void) => void } } & NodeModule;

if (process.env.NODE_ENV === 'development' && (module as extendend).hot) {
  (module as extendend).hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}
