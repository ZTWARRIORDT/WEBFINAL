
import './App.css'
import Home from "./assets/pages/Home/Home"
import Cart from "./assets/pages/Cart/Cart" 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './assets/components/AllProducts/AllProducts'
import Login from './assets/pages/Login/Login'

function App() {
  
  return (
    <>
      <div>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/AllProducts" element={<AllProducts/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
