import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadusers = useLoaderData()
  const [users, setusers] = useState(loadusers)
  const handleDelete = (id) => {
    console.log(id)

    fetch(`http://localhost:5000/users/${id}`,{
     
       method:'DELETE' 
      
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      if(data.deletedCount > 0){
        alert('user delete suksessfull')
        const remaning = users.filter(user => user._id != id)
        setusers(remaning)
      }
    })
  }
  return (
    <div>
      users:{users.length}
      <div>
        {
          users.map(user => <p>{user.name}, {user.email}, {user._id}
          <Link to={`/update/${user._id}`}>
          <button>update</button>
          </Link>
           <button
            onClick={() => handleDelete(user._id)}
          >X</button></p>)
        }
      </div>
    </div>
  )
}

export default Users;