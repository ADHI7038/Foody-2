import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from '../src/components/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FoodTemplates from './components/FoodTemplates';
import SearchPage from './components/SearchPage';
import Briyani from './components/Briyani';
import Offers from './components/Offers';
import Help from './components/Help';
import SignIN from './components/SignIN';
import Cart from './components/Cart'
import Home from './components/Home';
import Pizza from './components/Pizza';
import IceCream from './components/IceCream';
import Burger from './components/Burger'
import Idli from './components/Idli'
import Parotta from './components/Parotta'
import Momos from './components/Momos'
import Dosa from './components/Dosa';
import Chinese from './components/Chinese'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />
  },
  {
    path: "about",
    element: <SearchPage />
  },
  {
    path: "briyani",
    element: <Briyani />
  },
  {
    path: "offers",
    element: <Offers />
  },
  {
    path: "help",
    element: <Help />
  },
  {
    path: "cart/:id",
    element: <Cart />
  },
  {
    path: "signin",
    element: <SignIN />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "pizza",
    element: <Pizza />
  },
  {
    path: "icecream",
    element: <IceCream />
  },
  {
    path: "burger",
    element: <Burger />
  },
  {
    path: "idli",
    element: <Idli />
  },
  {
    path: "parotta",
    element: <Parotta />
  },
  {
    path: "momos",
    element: <Momos />
  },
  {
    path: "dosa",
    element: <Dosa />
  },
  {
    path: "chinese",
    element: <Chinese />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    {/* <FoodTemplates /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

