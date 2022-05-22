import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/publicRoutes';
import PrivateRoute from './authentication/PrivateRoute';
import Purchase from './pages/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }
          <Route element={<PrivateRoute />}>
            <Route path='/purchase' element={<Purchase />} />
            <Route path='/dashboard' element={<Dashboard />} >
              <Route path='my-orders' element={<MyOrders />} />
              <Route path='add-review' element={<AddReview />} />
              <Route path='my-profile' element={<MyProfile />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
