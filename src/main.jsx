import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Detail } from './main/Detail.jsx';
import { Cart } from './layout/Cart.jsx';
import { Coba } from './Coba.jsx';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
export const Appctx = createContext([{

}]);

const router = createBrowserRouter([
  {
    path: "/ecomerce.github.io/",
    element: <App/>,
    errorElement: <h1>halaman erorr</h1>,
  },
  {
     
    path: "/ecomerce.github.io/pesan",
    element:<Coba></Coba>,
  },
  // {
     
  //   path: "/ecomerce.github.io/:id",
  //   element: <Detail/>,
  // },
  {
     
    path: "/ecomerce.github.io/cart",
    element: <Cart/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Appctx.Provider value={{products,setProducts}}>

  <React.StrictMode>
    <RouterProvider router={router} />
      </React.StrictMode>,
  // </Appctx.Provider>
)
