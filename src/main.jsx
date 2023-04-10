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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('allJobs.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>

      },
      {
        path: "jobDetails/:jobId",
        element: <LoadJobDetails></LoadJobDetails>,
        loader: ()=> fetch('allJobs.json')
      },
      // {
      //   path: "blog",
      //   element: <LoaderSpinner></LoaderSpinner>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
