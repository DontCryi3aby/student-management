import { Box, Button, Typography, LinearProgress, Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Student } from 'models';
import { useEffect } from 'react';
import {
    selectStudentFilter,
    selectStudentList,
    selectStudentLoading,
    selectStudentPagination,
    studentActions,
} from '../studentSlice';
import StudentTable from '../components/StudentTable';

export interface ListStudentPageProps {
    studentList: Student[];
}

export default function ListStudentPage(props: ListStudentPageProps) {
    const dispatch = useAppDispatch();

    const loading = useAppSelector(selectStudentLoading);
    const studentList = useAppSelector(selectStudentList);
    const filter = useAppSelector(selectStudentFilter);
    const pagination = useAppSelector(selectStudentPagination);

    useEffect(() => {
        dispatch(studentActions.fetchStudentList(filter));
    }, [dispatch, filter]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(
            studentActions.setFilter({
                ...filter,
                _page: value,
            }),
        );
    };

    return (
        <Box mt={2}>
            {/* Loading */}
            {loading && (
                <LinearProgress
                    sx={{ position: 'absolute', top: '10px', width: 'calc(100% - 48px)' }}
                />
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h5">All students</Typography>
                <Button variant="contained" color="primary">
                    Add new student
                </Button>
            </Box>

            {/* StudentTable */}
            <Box mt={2}>
                <StudentTable studentList={studentList} />
            </Box>

            {/* Pagination */}
            <Box mt={3} display="flex" justifyContent="center">
                <Pagination
                    color="primary"
                    count={Math.ceil(pagination?._totalRows / pagination?._limit)}
                    page={pagination?._page}
                    onChange={handlePageChange}
                />
            </Box>
        </Box>
    );
}
