import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const loc = useLocation()
  useEffect(()=>{
    if(loc.pathname === '/'){
      document.title = "HireSphere | Home"
    }else{
      document.title = `HireSphere ${loc.pathname.replace("/" , "| ")}`
    }
  },[loc.pathname])


  return (
    <div>

      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      
    </div>
  )
}

export default App
