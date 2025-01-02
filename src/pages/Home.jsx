import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import ProductTile from '../components/product-tile'

const Home = () => {
    const [products,setProducts]=useState([])
    const[loading,setLoading]=useState(false)

    async function fetchProduct(){
        try{
            setLoading(true)
            const res =await fetch(`https://fakestoreapi.com/products`);
            const data = await res.json()
            if(data){
            setProducts(data)
            setLoading(false)
        }
           


        }catch(e){
           console.log(e.massage)
           setLoading(false)
        }
    }
    useEffect(()=>{
        fetchProduct()
    },[])
    
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
        {
            loading ?
            <div className='min-h-screen w-full flex justify-center items-center'>
                <Circles 
                height={"120"}
                weight={"120"}
                color="rgb(127,29,29)"
                visible={true}
                />
            </div>
            :
            <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-auto p-3 max-w-6xl'>
                {
                    products && products.length ?
                    products.map(item => <ProductTile key={item.id} products={item}/>)
                    :null
                }
            </div>
        }
    </div>
  )
}

export default Home