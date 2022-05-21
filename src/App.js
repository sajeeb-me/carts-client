import './App.css';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
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
=======
import { ToastContainer, toast } from 'react-toastify';
>>>>>>> be1d90b35d8c24813c2de23f4f4e5cdbe7bb34b2

function App() {
  const notify = () => toast.success("Wow so easy!");
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <h1>Hello from Carts</h1>
      <button onClick={notify} className="btn btn-primary">Button</button>
>>>>>>> be1d90b35d8c24813c2de23f4f4e5cdbe7bb34b2
      <ToastContainer />
    </div>
  );
}

export default App;
