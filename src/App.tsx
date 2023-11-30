import cityApi from 'api/cityApi';
import studentApi from 'api/studentApi';
import MainLayout from 'components/Layouts/MainLayout';
import { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from 'routes';
import './App.css';
import { NotFound, PrivateRoute } from 'components/Common';

function App() {
    useEffect(() => {
        (async () => {
            const cities = await cityApi.getAll();
            const students = await studentApi.getAll();
            console.log({ cities, students });
        })();
    }, []);

    return (
        <Routes>
            {ROUTES.map((route, index) => {
                const Page = route.component;

                let Layout: any = MainLayout;
                if (route?.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }

                const PrivateRouteCheck = route?.private ? PrivateRoute : Fragment;

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <PrivateRouteCheck>
                                <Layout>
                                    <Page />
                                </Layout>
                            </PrivateRouteCheck>
                        }
                    />
                );
            })}
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    );
}

export default App;
