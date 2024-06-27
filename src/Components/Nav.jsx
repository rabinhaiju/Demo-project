import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='bg-indigo-950 text-white'>
      <div className="w-[1200px] m-auto">
        <ul className='flex gap-5 justify-end py-2'>
          <li className='hover:text-red-400'>
            <Link to="/login">Sign in / Guest</Link>
          </li>
          <li className='hover:text-red-400'>
            <Link to="/create-account">Create Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
