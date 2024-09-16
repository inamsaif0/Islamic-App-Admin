import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
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
// import AddSubCategory from './pages/addsubcategory/AddSubCategory';
// import Package from './pages/addpackage/AddPackage';
const SimpleLogin = lazy(() => import('./pages/auth/simplelogin'));
const SimpleRegister = lazy(() => import('./pages/auth/simpleregister'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const AddProduct = lazy(() => import('./pages/addproduct/AddProduct'));
const Order = lazy(() => import('./pages/addorder/Order'));
const AddCategory = lazy(() => import('./pages/addcategory/AddCategory'));
const AddSubCategory = lazy(() => import('./pages/addsubcategory/AddSubCategory'));
const AddCoupen = lazy(() => import('./pages/addcoupen/AddCoupen'));
const Package = lazy(() => import('./pages/addpackage/AddPackage'));
const ForgetPassword = lazy(() => import('./pages/auth/ForgetPassword'));

const isLoggedIn = () => {
  return localStorage.getItem('AdminToken') !== null;
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Suspense fallback={<Loader fullPage loading />} >
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<SimpleLogin />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
            <Route path='/register' element={<SimpleRegister />} />
            
               {/* Protected Routes */}
            <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='/addproduct' element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
            <Route path='/orders' element={<ProtectedRoute><Order /></ProtectedRoute>} />  
            <Route path='/addcategory' element={<ProtectedRoute><AddCategory /></ProtectedRoute>} />  
            <Route path='/addsubcategory' element={<ProtectedRoute><AddSubCategory /></ProtectedRoute>} />  
            <Route path='/addpackage' element={<ProtectedRoute><Package /></ProtectedRoute>} /> 


            {/* <Route path='/addcategory' element={<AddCategory />} />
            <Route path='/addpackage' element={<Package />} /> */}
            {/* <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/orders' element={<Order />} />
            <Route path='/addcategory' element={<AddCategory />} />
            <Route path='/addpackage' element={<Package />} /> */}

            {/* <Route path='/addcustomer' element={<Customer />} /> */}
            {/* <Route path='/addcoupen' element={<AddCoupen />} /> */}
            

            <Route path="*" element={<Navigate to={isLoggedIn() ? '/dashboard' : '/'} />} />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
