import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getproducts } from '../../../../Features/Auth/productSlice';

const All = () => {
  const { products } = useSelector((state) => state.products);
  // console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch])
  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3>All User</h3>
        </div>
        <div className="card-body">
          <div className="table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Model</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map(product => (
                    < tr key={product._id}>
                      <td> {product._id}</td>
                      <td>{product.model}</td>
                      <td>{product.price}</td>
                      <button className='btn btn-outline-danger me-2'>Delete</button>
                      <button className='btn btn-outline-success me-2'>Edit</button>
                      {/* <button className='btn btn-outline-warning me-2'>Edit</button>
                      <button className='btn btn-outline-warning me-2'>Edit</button> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div >
  )
}

export default All