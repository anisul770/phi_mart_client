import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Product from '../pages/Product/Product';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<Home/>}></Route>
      <Route path='about' index element={<About/>}></Route> */}

      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='products' element={<Product/>} />
        <Route path='about' element={<About/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;