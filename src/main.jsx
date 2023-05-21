import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import LoadJobDetails from './components/LoadJobDetails/LoadJobDetails';
import LoaderSpinner from './components/LoaderSpinner/LoaderSpinner';

import appiledJobLoader from './jobApplied/jobApplied';
import AppliedJobDetails from './components/AppiledJobDetails/AppliedJobDetails';
import Applied from './components/Appiled/Applied';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Auth from './Auth/Auth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/allJobs.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>

      },
      {
        path: "jobDetails/:jobId",
        element: <PrivateRoute><LoadJobDetails></LoadJobDetails></PrivateRoute>,
        loader: ()=> fetch('/allJobs.json')
      },
      {
        path: "applied",
        element:<PrivateRoute><Applied></Applied></PrivateRoute>,
        loader: appiledJobLoader
      },
      {
        path: "applied/appliedDetails/:jobId",
        element: <PrivateRoute><AppliedJobDetails></AppliedJobDetails></PrivateRoute>,
        loader: ()=> fetch('/allJobs.json')

      },{
        path:"blog",
        element: <Blog></Blog>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth><RouterProvider router={router} /></Auth>
  </React.StrictMode>,
)
