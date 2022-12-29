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
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7</td>
                  <td>Kylian Mbappe</td>
                  <td>bpp@gmail.com</td>
                  <td>
                    <button className='btn btn-outline-danger me-2'>Delete</button>
                    <button className='btn btn-outline-warning'>Edit</button>
                  </td>
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