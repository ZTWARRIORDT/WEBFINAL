
import './App.css'
import Home from "./assets/pages/Home/Home"
import Cart from "./assets/pages/Cart/Cart" 
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
