import { all, call, put, takeLatest } from 'redux-saga/effects';
import { RankingByCityList, dashboardActions } from './dashboardSlice';
import studentApi from 'api/studentApi';
import { City, ListResponse, Student } from 'models';
import cityApi from 'api/cityApi';

export function* fetchStatistics() {
    const responseList: Array<ListResponse<Student>> = yield all([
        call(studentApi.getAll, { _limit: 1, _page: 1, gender: 'male' }),
        call(studentApi.getAll, { _limit: 1, _page: 1, gender: 'female' }),
        call(studentApi.getAll, { _limit: 1, _page: 1, mark_gte: 8 }),
        call(studentApi.getAll, { _limit: 1, _page: 1, mark_lte: 5 }),
    ]);

    const statisticsList = responseList.map((x) => x.pagination._totalRows);
    const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticsList;
    yield put(
        dashboardActions.setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount }),
    );
}

export function* fetchHighestStudentList() {
    const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
        _limit: 5,
        _page: 1,
        _sort: 'mark',
        _order: 'desc',
    });

    yield put(dashboardActions.setHighestStudentList(data));
}

export function* fetchLowestStudentList() {
    const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
        _limit: 5,
        _page: 1,
        _sort: 'mark',
        _order: 'asc',
    });

    yield put(dashboardActions.setLowestStudentList(data));
}

export function* fetchRankingByCityList() {
    const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll);

    const callList = cityList.map((x) =>
        call(studentApi.getAll, {
            _limit: 5,
            _page: 1,
            _sort: 'mark',
            _order: 'desc',
            city: x.code,
        }),
    );

    const responseList: Array<ListResponse<Student>> = yield all(callList);
    const rankingByCityList: Array<RankingByCityList> = responseList.map((x, index) => ({
        cityId: cityList[index].code,
        cityName: cityList[index].name,
        rankingList: x.data,
    }));

    yield put(dashboardActions.setRankingByCityList(rankingByCityList));
}

export function* fetchDashboardData() {
    try {
        yield all([
            call(fetchStatistics),
            call(fetchHighestStudentList),
            call(fetchLowestStudentList),
            call(fetchRankingByCityList),
        ]);

        yield put(dashboardActions.fetchDataSuccess());
    } catch (error) {
        console.log('Failed to fetch Dashboard data, ', error);
        yield put(dashboardActions.fetchDataFailed());
    }
}

export default function* dashboardSaga() {
    yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData);
}
