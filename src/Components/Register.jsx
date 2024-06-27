import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='w-[1200px] m-auto flex justify-center items-center'>
    <div className='p-30 shadow-md ring-offset-2 ring-red-500 ring-opacity-50 p-4 w-[300px] mt-32 py-10 px-5' >
        <h1 className='font-bold text-3xl text-center '>Register</h1>
        <div className='flex flex-col'>
        <label htmlFor="email">UserName</label>
  <input className='rounded-md' type="text" id="email" style={{ padding: '5px', border: '1px solid #ccc' }} />
</div>
        <div className='flex flex-col'>
        <label htmlFor="email">Email</label>
  <input className='rounded-md' type="text" id="email" style={{ padding: '5px', border: '1px solid #ccc' }} />
</div>
        
<div className='flex flex-col'>
        <label htmlFor="Password">Password</label>
  <input className='rounded-md' type="password" id="password" style={{  padding: '5px', border: '1px solid #ccc' }} />
</div>
<div className='flex flex-col gap-2 mt-3'>

<button className='bg-indigo-600 p-2 rounded-md text-white'>Register</button>
</div>
<div className='flex list-none justify-center gap-2 text-sm mt-4'>
    <p className='opacity-80'>Already a member? </p>
    <li className='text-blue-400 cursor-pointer'>
            <Link to='/login'>Login</Link>
          </li>
    
</div>

    </div>
    </div>
  )
}

export default Register
