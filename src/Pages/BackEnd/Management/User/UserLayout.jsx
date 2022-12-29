import React from 'react'
import { Outlet } from 'react-router'

const UserLayout = () => {
  return (
    <div>
      <h1 className='text-center' >User Management</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default UserLayout