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
import StatisticsItem from './components/StatisticsItem';
import PeopleAlt from '@mui/icons-material/PeopleAlt';
import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import Widget from './components/Widget';
import RankingList from './components/RankingList';

export default function DashBoard() {
    const dispatch = useAppDispatch();

    const loading = useAppSelector(selectDasboardLoading);
    const statistics = useAppSelector(selectDasboardStatistics);
    const highestStudentList = useAppSelector(selectHighestStudentList);
    const lowestStudentList = useAppSelector(selectLowestStudentList);
    const rankingByCityList = useAppSelector(selectRankingByCityList);

    useEffect(() => {
        dispatch(dashboardActions.fetchData());
    }, [dispatch]);

    return (
        <Box>
            {/* Loading */}
            {loading && (
                <LinearProgress
                    sx={{ position: 'absolute', top: '10px', width: 'calc(100% - 48px)' }}
                />
            )}

            {/* Statistic Section */}
            <Grid container spacing={2}>
                {Object.entries(statistics).map(([key, value], index) => (
                    <Grid item xs={12} md={6} lg={3} key={index}>
                        <StatisticsItem icon={<PeopleAlt />} label={key} value={value} />
                    </Grid>
                ))}
            </Grid>

            {/* All students ranking Section */}
            <Box mt={2}>
                <Typography variant="h5">All students ranking</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}>
                        <Widget title="Students with highest mark">
                            <RankingList studentList={highestStudentList} />
                        </Widget>
                    </Grid>

                    <Grid item xs={12} md={6} lg={3}>
                        <Widget title="Students with lowest mark">
                            <RankingList studentList={lowestStudentList} />
                        </Widget>
                    </Grid>
                </Grid>
            </Box>

            {/* City students ranking Section */}
            <Box mt={2}>
                <Typography variant="h5">Students ranking by City</Typography>

                <Grid container spacing={2}>
                    {rankingByCityList.map((item) => (
                        <Grid key={item.cityId} item xs={12} md={6} lg={3}>
                            <Widget title={`TP. ${item.cityName}`}>
                                <RankingList studentList={item.rankingList} />
                            </Widget>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
