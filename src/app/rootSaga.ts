import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';

export function* helloSaga() {
    console.log('Helo Saga');
}

export default function* rootSaga() {
    console.log('Root Saga');

    yield all([helloSaga(), counterSaga()]);
}
