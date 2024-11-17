import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { GiHamburgerMenu } from "react-icons/gi";


import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div>
        <header className='bg-white border-b border-gray-200'>
          <div class="container mx-auto flex justify-between p-5 items-center">
            <div>

              <Link to='/'>
                <h3 class="font-bold text-2xl">
                  Tech<span class="text-red-500">Shop</span>
                </h3>
              </Link>
              
            </div>
            <div class="hidden md:block">
              <ul class="flex items-center text-lg justify-center font-semibold">
                <Link to='/'>
                  <li class="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
                </Link>
                
                <li class="mr-5 hover:text-gray-900 cursor-pointer">All Products</li>
                <li class="mr-5 hover:text-gray-900 cursor-pointer">Mens</li>
                <li class="mr-5 hover:text-gray-900 cursor-pointer">Kids</li>
              </ul>
            </div>

            <div class="flex justify-center items-center gap-3">
              <button class=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-basefont-semibold">
                Login
              </button>

              <Link to='/cart'><button><FaCartShopping size={25}/></button></Link>
              <button><GiHamburgerMenu size={25}/></button>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Navbar