import React from 'react'
import authService from '../../appwrite/auth'

const LogoutBtn = () => {
    const handleLogout = () => {
        authService.logout()
        console.log("Appwrite service :: Logout :: success!");
    }

    return (
        <button
        onClick={handleLogout}
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        >LogoutBtn</button>
    )
}

export default LogoutBtn