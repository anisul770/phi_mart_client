import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import Shop from '../pages/Shop';

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<Home/>}></Route>
      <Route path='about' index element={<About/>}></Route> */}

      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='shop' element={<Shop/>}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;