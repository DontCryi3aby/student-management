import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import {
    dashboardActions,
    selectDasboardLoading,
    selectDasboardStatistics,
    selectHighestStudentList,
    selectLowestStudentList,
    selectRankingByCityList,
} from './dashboardSlice';

export default function DashBoard() {
    const dispatch = useAppDispatch();

    const loading = useAppSelector(selectDasboardLoading);
    const statistics = useAppSelector(selectDasboardStatistics);
    const highestStudentList = useAppSelector(selectHighestStudentList);
    const lowestStudentList = useAppSelector(selectLowestStudentList);
    const rankingByCityList = useAppSelector(selectRankingByCityList);

    console.log({ loading, statistics, highestStudentList, lowestStudentList, rankingByCityList });

    useEffect(() => {
        dispatch(dashboardActions.fetchData());
    }, [dispatch]);
    return <div>DASHBOARD</div>;
}
