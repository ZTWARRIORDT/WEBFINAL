
import './App.css'
import Home from "./assets/pages/Home/Home"
import Cart from "./assets/pages/Cart/Cart" 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './assets/components/AllProducts/AllProducts'
import Login from './assets/pages/Login/Login'
import SignUp from './assets/pages/SignUp/SignUp'


function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/AllProducts" element={<AllProducts/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<SignUp/>}/>
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;;
