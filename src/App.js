import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import lazy loader
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import { lazy, Suspense } from 'react';

// dashboard pages
import Dashboard from './pages/dashboardpages/Dashboard';
import DashboardEcommerce from './pages/dashboardpages/DashboardEcommerce';
import Dashboardcrypto from './pages/dashboardpages/Dashboardcrypto';
import DashboardSales from './pages/dashboardpages/DashboardSales';
import Customer from './pages/addcustomer/Customer';
import Bootstarpcard from './pages/cards/cardbootstrap'
import Error404 from './pages/errors/Error404'
import Error500 from './pages/errors/Error500';
const SimpleLogin = lazy(() => import('./pages/auth/simplelogin'));
const SimpleRegister = lazy(() => import('./pages/auth/simpleregister'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const AddProduct = lazy(() => import('./pages/addproduct/AddProduct'));
const Order = lazy(() => import('./pages/addorder/Order'));
const AddCategory = lazy(() => import('./pages/addcategory/AddCategory'));
const AddCoupen = lazy(() => import('./pages/addcoupen/AddCoupen'));
const ForgetPassword = lazy(() => import('./pages/auth/ForgetPassword'));
function App() {
  return (
    <Suspense fallback={<Loader fullPage loading />} >
      <div>
        <Router>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<SimpleLogin />} />
            <Route path='/register' element={<SimpleRegister />} />
            <Route path='/addcustomer' element={<Customer />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/orders' element={<Order />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/addcategory' element={<AddCategory />} />
            <Route path='/addcoupen' element={<AddCoupen />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
