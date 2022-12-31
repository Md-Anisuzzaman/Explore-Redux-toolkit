import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, removeUser } from '../../../../Features/Auth/userslice';

const All = () => {
  const { users } = useSelector((state) => state.users);
  console.log(users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch])

  const deleteuser = () => {
    dispatch(removeUser());
  }
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
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>${user.email}</td>
                      <td>
                        <button onClick={deleteuser} className='btn btn-outline-danger me-2'>Delete</button>
                        <button className='btn btn-outline-warning'>Edit</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <h2>Hello</h2>
      {users.map((user) => {
        return <div> {user.name} </div>
      })} */}
    </div>
  )
}

export default All