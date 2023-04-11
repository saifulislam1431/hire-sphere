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
        element: <LoadJobDetails></LoadJobDetails>,
        loader: ()=> fetch('/allJobs.json')
      },
      {
        path: "applied",
        element:<Applied></Applied>,
        loader: appiledJobLoader
      },
      {
        path: "applied/appliedDetails/:jobId",
        element: <AppliedJobDetails></AppliedJobDetails>,
        loader: ()=> fetch('/allJobs.json')

      },{
        path:"blog",
        element: <Blog></Blog>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
