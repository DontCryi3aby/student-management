import LoginPage from 'features/auth/pages/LoginPage';
import DashBoard from 'features/dashboard';
import StudentFeature from 'features/student';
import { RouteProps } from 'models';
const ROUTES: Array<RouteProps> = [
    { path: '/login', component: LoginPage, layout: null },
    { path: '/admin/', component: DashBoard, private: true },
    { path: '/admin/dashboard', component: DashBoard, private: true },
    { path: '/admin/students', component: StudentFeature, private: true },
];

export default ROUTES;
