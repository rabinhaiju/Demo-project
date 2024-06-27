import React from 'react'
import { FaMoon } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-slate-200 py-2 '>
    <div className='w-[1200px] m-auto flex items-center justify-between'>
        <div>
        <button className='py-2 px-3 rounded-md text-white bg-blue-700'>C</button>
        </div>
        <ul className='list-none flex gap-6' >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
      <div className='flex gap-4 '>
      <FaMoon className='text-2xl' />
      <FaCartPlus className='text-2xl' />


      </div>
    </div>
    </div>
  )
}

export default Header
