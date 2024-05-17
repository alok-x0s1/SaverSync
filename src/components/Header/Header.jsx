import React from 'react'
import LogoutBtn from './LogoutBtn'

const Header = () => {
  return (
    <div className='text-xl bg-pink-400 p-4 flex items-center justify-between'>
      <div className='flex w-full justify-between items-center'>
        <button className='bg-white px-4 py-2 rounded-md mr-2'>1. Home</button>
        <button className='bg-white px-4 py-2 rounded-md'>2. About</button>
        <LogoutBtn />
      </div>
    </div>
  )
}

export default Header