import React, { useState } from 'react'
import FeatherIcon from "feather-icons-react";

const Logout = ({setuser , username }) => {
  const [showprofile, setShowprofile] = useState(false)
  const handleClick = ()=>{
    localStorage.removeItem('token')
    setuser(false)
  }
  const toggel =()=>{
      setShowprofile(!showprofile)
  }
  return (
    <div>
      <div onMouseEnter={()=>{toggel()}} onClick={()=>toggel()} className='border-2 rounded-full p-2 '>
      <FeatherIcon icon="user" color="red" strokeWidth="3px" />
      </div>
      <div style={{
                    display: showprofile ? "block" : "none"
                }}
                 className='absolute right-10 mt-4 p-5 bg-gray-100 border text-red-700 rounded-2xl '>
      <h1 className='m-1 text-lg flex' > Name  : <p className=' ml-1 uppercase'> {username}</p> </h1>   

      <button onClick={handleClick} className="m-1 block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
          logout
      </button>


      </div>
    </div>
  )
}

export default Logout