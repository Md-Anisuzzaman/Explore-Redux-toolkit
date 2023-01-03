import React from 'react'

const Create = () => {
  return (
    <>
      <form className='w-50 mx-auto'>
        <div className="form-group">
          <label htmlFor="user-name">User Name</label>
          <input type="text" name='username' className="form-control" placeholder="Username" />
        </div>
        <div className="form-group">
          <label htmlFor="user-email">User Email</label>
          <input type="email" className="form-control" name='email' placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="product-price">User Password</label>
          <input type="password" className="form-control" name='password' placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
    </>
  )
}

export default Create