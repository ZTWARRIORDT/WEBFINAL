import React from 'react'
import { FaFacebook, FaInstagram,FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer class="bg-black text-white">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

            <div class="w-64 md:mx-0 mx-auto text-center md:text-left">
                <h3 class="font-bold text-2xl">
                    Tech<span class="text-red-500">Shop</span> 
                </h3>
            </div>

            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium tracking-widest text-lg mb-3">MENU</h2>
                    <ul class="list-none mb-10">
                        <li>Features</li>
                        <li className='mt-1'>Info Center</li>
                        <li className='mt-1'>News Blog</li>
                        <li className='mt-1'>Login</li>
                    </ul>
                </div>

                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium tracking-widest text-lg mb-3">COMPANY</h2>
                    <ul class="list-none mb-10">
                        <li className='mt-1'>About Us</li>
                        <li className='mt-1'>Privacy Policy</li>
                        <li className='mt-1'>Term & Condition</li>
                        <li className='mt-1'>Login</li>
                    </ul>
                </div>

                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium tracking-widest text-lg mb-3">CONTACT</h2>
                    <ul class="list-none mb-10">
                        <li className='mt-1'>Contact Sales</li>
                        <li className='mt-1'>+123456789</li>
                        <li className='mt-1'>News Blog</li>
                        <li className='mt-1'>+515155115</li>
                    </ul>
                </div>

                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium tracking-widest text-lg mb-3">TECH SUPORT</h2>
                    <ul class="list-none mb-10">
                        <li className='mt-1'>Contact Suport</li>
                        <li className='mt-1'>Info Center</li>
                        <li className='mt-1'>Active</li>   
                    </ul>

                </div>
            </div>
        </div>

        <div class="bg-red-500 text-white">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p class="text-sm text-center sm:text-left">
                    2024 TechShop -<span>@copyright</span>
                </p>
                <p class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <span class="mr-2">
                        <FaFacebook size={30}/>
                    </span>
                    <span class="mr-2">
                        <FaInstagram size={30}/>
                    </span>
                    <span class="mr-2">
                        <FaTwitter size={30}/>
                    </span>
                </p>

            </div>
        
        </div>
    </footer>

    
  )
}

export default Footer