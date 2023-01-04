import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { editProduct, getProduct } from '../../../../Features/Auth/productSlice'

const Update = () => {
  const { product } = useSelector((state) => state.products)
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(param.id);
    dispatch(getProduct(param.id));

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(new FormData(e.target)));
  }


  return (
    product._id === param.id ?
      <>
        <h3 className='mb-5'>Product Edit Update</h3>

        <form className='w-50 mx-auto' onSubmit={handleSubmit}>
          <input type="hidden" name='id' defaultValue={param.id} />
          <div className="form-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" name='model' defaultValue={product.model} className="form-control" id="product-name" placeholder="Enter product name" />
          </div>
          <div className="form-group">
            <label htmlFor="product-description">Product Description</label>
            <textarea className="form-control"  name='details' defaultValue={product.details} id="product-description" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="product-image">Product image Url</label>
            <input type="text" className="form-control"  name='img' defaultValue={product.img} id="product-image" placeholder="Product Image url" />
          </div>
          <div className="form-group">
            <label htmlFor="product-price">Product Price</label>
            <input type="number" className="form-control"  name='price' defaultValue={product.price} id="product-price" placeholder="Enter product price" />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>

      </>
      : <></>
  )
}

export default Update