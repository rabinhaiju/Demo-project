import React, { useState } from 'react';
import { PiDiamondsFourFill } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { furnitureData } from './Data';
import { useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { Link, Routes, Route } from 'react-router-dom';

const Product = () => {
  const [productData,setProductData] = useState(furnitureData);
  const navigate = useNavigate();

  return (
    <>
      <div className='w-[1200px] m-auto mt-12 border-mb border-b border-black'>
        <div className='flex justify-between'>
          <p>22 products</p>
          <div className='flex gap-4'>
            <PiDiamondsFourFill />
            <FaBars />
          </div>
        </div>
      </div>
      <div className='w-[1200px] m-auto'>
        <div className='flex justify-between flex-wrap'>
          {productData.map((item,index)=>(
            <div className='mt-4 leading-10 flex flex-col justify-center items-center p-4 shadow-2xl my-10 rounded-xl' key={index}>
              <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img className='w-[300px] h-[150px] object-cover rounded-xl' src={item.image} alt='' />
                <h2 className='py-3'>{item.title}</h2>
                <p>{item.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
};

export default Product;
