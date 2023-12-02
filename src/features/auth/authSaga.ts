import { call, delay, fork, put, take } from 'redux-saga/effects';
import { LoginPayload, authActions } from './authSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { history } from 'utils';

function* handleLogin(payload: LoginPayload) {
    try {
        // Fake call api
        yield delay(1000);
        localStorage.setItem('user_name', 'Nguyen Ngoc Thach');
        yield put(
            authActions.loginSuccess({
                id: 1,
                name: 'Nguyen Ngoc Thach',
            }),
        );

        // history.push('/admin')
        yield call(history.push, '/admin');
    } catch (error: any) {
        yield put(authActions.loginFailed(error.message));
    }
}

function* handleLogout() {
    yield delay(500);
    localStorage.removeItem('user_name');
    // history.push("login")
    yield call(history.push, '/login');
}

function* watchLoginflow() {
    while (true) {
        const isLoggedIn = !!localStorage.getItem('user_name');

        if (isLoggedIn) {
            yield take(authActions.logout.type);
            yield call(handleLogout);
        } else {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }
    }
}

export function* authSaga() {
    yield fork(watchLoginflow);
}
