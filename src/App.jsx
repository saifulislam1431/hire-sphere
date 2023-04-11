import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react"

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
      
    </div>
  )
}

export default App
