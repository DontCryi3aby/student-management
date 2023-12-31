import { ListParams, ListResponse, Student } from 'models';
import axiosClient from './axiosClient';

const studentApi = {
    getAll(params?: Partial<ListParams>): Promise<ListResponse<Student>> {
        const url = '/students';
        return axiosClient.get(url, {
            params,
        });
    },

    getDetail(id: string): Promise<Student> {
        const url = `/students/${id}`;
        return axiosClient.get(url);
    },

    add(data: Student): Promise<Student> {
        const url = '/students';
        return axiosClient.post(url, data);
    },

    update(id: string, data: Partial<Student>): Promise<Student> {
        const url = `/students/${id}`;
        return axiosClient.patch(url, data);
    },

    remove(id: string): Promise<any> {
        const url = `/students/${id}`;
        return axiosClient.delete(url);
    },
};

export default studentApi;
