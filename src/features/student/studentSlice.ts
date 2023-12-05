import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, PaginationParams, Student } from 'models';

export interface StudentState {
    loading: boolean;
    list: Student[];
    pagination: PaginationParams;
    filter: Partial<ListParams>;
}

const initialState: StudentState = {
    loading: false,
    list: [],
    pagination: {
        _limit: 15,
        _page: 1,
        _totalRows: 15,
    },
    filter: {
        _page: 1,
        _limit: 15,
    },
};

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        fetchStudentList: (state, action: PayloadAction<Partial<ListParams>>) => {
            state.loading = true;
        },
        fetchStudentListSuccess: (state, action: PayloadAction<ListResponse<Student>>) => {
            state.loading = false;
            state.list = action.payload.data;
            state.pagination = action.payload.pagination;
        },
        fetchStudentListFailed: (state) => {
            state.loading = false;
        },
        setFilter: (state, action: PayloadAction<Partial<ListParams>>) => {
            state.filter = action.payload;
        },
    },
});

// Actions
export const studentActions = studentSlice.actions;

// Selectors
export const selectStudentLoading = (state: RootState) => state.student.loading;
export const selectStudentList = (state: RootState) => state.student.list;
export const selectStudentFilter = (state: RootState) => state.student.filter;
export const selectStudentPagination = (state: RootState) => state.student.pagination;

// Reducer
const studentReducer = studentSlice.reducer;
export default studentReducer;
