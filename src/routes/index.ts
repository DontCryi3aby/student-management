import LoginPage from 'features/auth/pages/LoginPage';
import DashBoard from 'features/dashboard';
import AddStudentPage from 'features/student/pages/AddStudent';
import EditStudentPage from 'features/student/pages/EditStudent';
import ListStudentPage from 'features/student/pages/ListStudent';
import { RouteProps } from 'models';
const ROUTES: Array<RouteProps> = [
    { path: '/login', component: LoginPage, layout: null },
    { path: '/admin/', component: DashBoard, private: true },
    { path: '/admin/dashboard', component: DashBoard, private: true },
    { path: '/admin/students', component: ListStudentPage, private: true },
    { path: '/admin/students/add', component: AddStudentPage, private: true },
    { path: '/admin/students/:studentId', component: EditStudentPage, private: true },
];

export default ROUTES;
