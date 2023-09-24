import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import DonationList from './components/DonationList/DonationList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <DonationList></DonationList>,
      },
      {
        path: "/donate/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('../public/donationList.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
