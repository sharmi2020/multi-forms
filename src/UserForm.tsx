//   import React from 'react'

const  UserForm = ()=>{
  return (
    <>
    <label>First Name</label>
    <input  autoFocus required type="text"/>
    <label>Last Name</label>
    <input title="text"required type="text"/>
    <label>Age</label>
    <input title="number"
    required min={1} type="number"/>
  </>
  )
}

 export default UserForm