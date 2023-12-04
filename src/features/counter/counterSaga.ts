import { PayloadAction } from '@reduxjs/toolkit';
import { delay, takeEvery } from 'redux-saga/effects';
import { increment } from './counterSlice';
export function* log(action: PayloadAction) {
    yield delay(0);
    console.log(action.type);
}
export default function* counterSaga() {
    yield takeEvery(increment.toString(), log);
}
