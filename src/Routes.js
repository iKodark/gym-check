import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import App from './App';
import { Layout } from './Components';
import { Dashboard, Auth, Subscribe } from './Pages';

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />}>
            <Route path="" element={<Auth />} />

            <Route path="/dashboard" element={<PrivateOutlet />}>
              <Route path="" element={<Layout />}>
                <Route path="" element={<Dashboard />} />
              </Route>
            </Route>
            <Route path="/gym" element={<PrivateOutlet />}>
              <Route path="" element={<Layout />}>
                <Route path=":id/subscribe" element={<Subscribe />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const PrivateOutlet = () => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to={'/'} />;
};
