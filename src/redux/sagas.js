import { all, fork } from 'redux-saga/effects';

import homeSaga from '../view/home/redux/saga';

const sagas = function* () {
  yield all([
    fork(homeSaga),
  ]);
};

export default sagas;
