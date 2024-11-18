import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import axios from 'axios'
import login from '../../login.jpg';

const AllProducts = () => {
    // 'https://dummyjson.com/products/categories'
    const [allProducts, setAllProducts] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectProducts, setSelectProducts] = useState("");

    const [showProduct, setShowProduct] = useState(false);



    useEffect(()=>{
        const AllProducts = async () => {
            const res = await axios("https://dummyjson.com/products")
            setAllProducts(res.data.products)
        }

        AllProducts();
    },[])

    
    useEffect(()=>{
        const getAllProductsCategory = async () =>{
            try{
                const res = await axios('https://dummyjson.com/products/categories');
                const categoryNames = res.data.map((category) => category.name); // Extrae solo los nombres
                console.log(categoryNames)
                setAllCategory(categoryNames);
            } catch (error){
                console.log(error)
            }      
        };
        getAllProductsCategory();
    }, []);

    const filterProducts = (allProducts) =>{
        setSelectProducts(allProducts);
        setShowProduct(true);
    }

    useEffect(()=>{

        const singleProducts = async () =>{
            try{
                if(selectProducts){
                    const res = await axios(`https://dummyjson.com/products/category/${selectProducts}`);
                    setProducts(res.data.products); 
                }
                
            } catch (error){
                console.log(error)
            }  
            
        }
        singleProducts();
    }, [selectProducts]);

  return (
    <Layout>
        <div className='relative'>
            <img src={login} alt='' className='object-cover w-full object-center h-[200px] mt-5'/>
            <div className=' w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]'></div>
            <h2 className=' absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl'>All Producst</h2>
        </div>
        

            {/* Products section */}
        <div className=' flex gap-3 flex-wrap'>

            <select onClick={(e)=> filterProducts(e.target.value)}>

                <option>Filter By Category</option>
                {allCategory.filter(filterItem => ["Beauty","Groceries", "Motorcycle","Laptops", "Tops", "Tablets","Vehicle", "Smartphones"].includes(filterItem))
                    .map((allProducts,index) =>(
                            <option value={allProducts}>{allProducts}</option>
                    ))
                }
            </select>
        </div>

        {
            showProduct?
            <section className=' text-gray-600 body-font'>
                <div className="container px-5 py-24 mx-auto">
                    <div className='flex flex-wrap -m-4 '>
                    {products.map((item) => (
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-4">
                            <a className="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cotain object-center w-full h-full block" src={item.thumbnail}/>
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> Title: {item.title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Rating: {item.rating}</h2>
                                <p className="mt-1">Price: {item.price}$</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>:
            <div className='flex gap-4 flex-wrap justify-center'>
                {
                    allProducts.map((AllItems, index)=>(
                        <div key={index} className=' border bg-red-400'>
                            <img src={AllItems.thumbnail} className="object-cover object-center block"/>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"> Title: {AllItems.title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Rating: {AllItems.rating}</h2>
                                <p className="mt-1">Price: {AllItems.price}$</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        }

        
        
        

        
    </Layout>
  )
}

export default AllProducts