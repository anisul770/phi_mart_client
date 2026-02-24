import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';
import ActivateAccount from '../components/Registration/ActivateAccount';
import DashboardLayout from '../layouts/DashboardLayout';
import Profile from '../pages/Profile';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';
import PaymentSuccess from '../pages/PaymentSuccess';

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<Home/>}></Route>
      <Route path='about' index element={<About/>}></Route> */}

      {/* Public Route */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='shop' element={<Shop />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='activate/:uid/:token' element={<ActivateAccount />}></Route>
        <Route path='shop/:productId' element={<ProductDetail />}></Route>
      </Route>
      {/* Private Route */}
      <Route path='dashboard' element={
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      }>
        <Route index element={<Dashboard />} />  {/* path="abc" */}
        <Route path='profile' element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path='orders' element={<Orders />} />
        <Route path='payment/success/' element={<PaymentSuccess/>}/>
      </Route>
    </Routes>
  ); 
};

export default AppRoutes;