import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { selectStudentList, studentActions } from '../studentSlice';

export interface ListStudentPageProps {}

export default function ListStudentPage(props: ListStudentPageProps) {
    const dispatch = useAppDispatch();

    const studentList = useAppSelector(selectStudentList);
    console.log(studentList);

    useEffect(() => {
        dispatch(
            studentActions.fetchStudentList({
                _page: 1,
                _limit: 15,
            }),
        );
    }, [dispatch]);

    return <div>LIST STUDENT PAGE</div>;
}
