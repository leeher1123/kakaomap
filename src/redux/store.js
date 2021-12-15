import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import homeSlice from '../view/home/redux/slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    home: homeSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
