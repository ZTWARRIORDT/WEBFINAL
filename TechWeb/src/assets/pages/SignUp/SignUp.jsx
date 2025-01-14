import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import login from '../../login.jpg';

const SignUp = () => {
  return (
    <Layout>

        <div className='relative'>
            <img src={login} alt='' className='object-cover w-full object-center h-[200px] mt-5'/>
            <div className=' w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
            <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>Sign Up</h2>
        </div>

        <div className="container px-5 py-14 mx-auto flex">
              <div className=" mx-auto bg-red-500 rounded-lg p-8 flex flex-col mt-8 md:mt-0  shadow-md text-white w-[500px]">
                <h2 className="text-white text-4xl mb-5 font-medium title-font">
                  Sign Up
                </h2>

                <div className="relative mb-4">
                  <label for="name" className="leading-7 text-sm">
                    Name
                  </label>
                  <input 
                  type="text"  
                  name="name" 
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

                <div className="relative mb-4">
                  <label for="email" className="leading-7 text-sm">Email</label>
                  <input type="email"  name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

                <div className="relative mb-4">
                  <label for="message" className="leading-7 text-sm ">
                    Password
                  </label>
                  <input 
                  type="password"  
                  name="password" 
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                <p class="text-xs  mt-5">
                  Do you have an account?  
                  <Link to='/Login'>
                      <button className='cursor-pointer hover:text-blue-300'> 
                        Login
                      </button>
                  </Link>
                </p>
              </div>
        </div>       
    </Layout>
  )
}

export default SignUp