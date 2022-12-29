import React from 'react'

const All = () => {
  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3>All User</h3>
        </div>
        <div className="card-body">
          <div className="table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jacket</td>
                  <td>2</td>
                  <td>$100</td>
                  <button className='btn btn-outline-danger me-2'>Delete</button>
                  <button className='btn btn-outline-warning'>Edit</button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All