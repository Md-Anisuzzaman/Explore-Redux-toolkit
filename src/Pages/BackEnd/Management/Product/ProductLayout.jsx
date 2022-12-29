import React from 'react'
import { Outlet } from 'react-router'

const ProductLayout = () => {
  return (
    <div>
        <h1 className='text-center p-2'>Product Management</h1>
        <Outlet></Outlet>
    </div>
  )
}

export default ProductLayout;