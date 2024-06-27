import React from 'react'
import { useState } from 'react'
import { furnitureData } from './Data'


const Home = () => {
  const [data,setData] = useState(furnitureData)
  return (
    <>
    <div className='w-[1200px] m-auto my-20' >
        <div className='flex'>
        <div className='flex w-[600px]'>
            <div className=''>
            <h1 className='text-6xl font-bold text-sky-900	'>We are changing <br /> the way people <br /> shop</h1>
            <p className='text-sky-900 my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Tempore repellat explicabo enim soluta temporibus asperiores <br /> aut obcaecati perferendis porro nobis.</p>
            <button className='p-2 bg-blue-700 text-white rounded-md'>Our Products</button>
            </div>

        </div>
        <div className='flex shadow-md bg-blue-400'>
        <img className='h-[400px] w-[300px]' src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" alt="" />
        <img className='h-[400px] w-[300px] object-cover' src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp" alt="" />
        </div>
      
    </div>
    <div  className='w-[1200px] m-auto'>
            <h1 className='border-b text-2xl py-3 text-sky-900'>Featured Products</h1>
            <div className='flex justify-between ' >
             {data.slice(0,3).map((item,index)=>(
                  <div className='mt-4 leadig-10 flex flex-col justify-center items-center p-4 shadow-2xl my-10 rounded-xl ' key={index}>
                  <img className='w-[300px] h-[150px] object-cover rounded-xl' src={item.image} alt="" />
                  <h2 className='py-3'>{item.title}</h2>
                  <p>{item.price}</p>
              </div>
             ))}
          
           

           
            </div>

        </div>
      
    </div>
    
    </>
  )
}

export default Home
