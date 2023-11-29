import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';
export function* log(action: PayloadAction) {
    console.log(action.type);
}
export default function* counterSaga() {
    console.log('Counter Saga');

    yield takeEvery(increment.toString(), log);
}
