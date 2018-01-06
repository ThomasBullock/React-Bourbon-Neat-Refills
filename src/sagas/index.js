import { fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield [
    // fork(birdSaga),
    // fork(photosSaga),    
    // fork(authSaga),
  ];
}
