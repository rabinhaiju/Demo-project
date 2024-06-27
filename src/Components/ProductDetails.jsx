import React from 'react'
import { furnitureData } from './Data';
import { useParams } from 'react-router-dom';




const ProductDetails = () => {
  const {id} = useParams();
  const product = furnitureData.find(item => item.id === parseInt(id))

  if(!product){
    return(
        <div> product not found</div>
    )
  }
    
    return(
    <div className='w-[1200px] m-auto mt-12 p-4'>
    <img className='h-[300px] object-cover rounded-xl h-[' src={product.image} alt={product.title} />
    <h2 className='py-3 text-3xl'>{product.title}</h2>
    <p className='text-xl'>${product.price}</p>
    <p className='mt-4'>{product.description}</p>
  </div>
);
}


export default ProductDetails
