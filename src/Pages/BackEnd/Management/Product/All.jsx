import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getproducts } from '../../../../Features/Auth/productSlice';

const All = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch])

  const handleDelete = async (id) => {
    if (window.confirm("Confirm Delete")) {
      await dispatch(deleteProduct(id));
      dispatch(getproducts());
    }
  };

  
  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3>All Product</h3>
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
                      <td>
                        <button onClick={() => handleDelete(product._id)} className='btn btn-outline-danger me-2'>Delete</button>
                        <Link to={`/dashboard/product/edit/${product._id}`} className='btn btn-outline-success'>Edit</Link>
                      </td>
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