import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'

const AllProducts = () => {

    //https://dummyjson.com/products/categories

    useEffect(()=>{
        const GetProductsData = async () =>{
            try{
                const res = await axios.get("https://dummyjson.com/products/categories")
                console.log(res)
            } catch(error){
                console.log(error)
            }
        }

        GetProductsData();
    },[])
    
  return (
    <>
        <Layout>AllProducts</Layout>
    </>
  )
}

export default AllProducts