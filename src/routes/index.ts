import { AdminLayout } from 'components/Layouts';
import LoginPage from 'features/auth/pages/LoginPage';
import { RouteProps } from 'models';
const ROUTES: Array<RouteProps> = [
    { path: '/login', component: LoginPage, layout: null },
    { path: '/admin', component: AdminLayout, private: true },
];

export default ROUTES;
