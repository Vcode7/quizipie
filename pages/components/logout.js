import React, { useState } from 'react'
import FeatherIcon from "feather-icons-react";

const Logout = ({setuser}) => {
  const [showprofile, setShowprofile] = useState(false)
  const handleClick = ()=>{
    localStorage.removeItem('user')
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
                 className='absolute right-10 mt-4 p-5 bg-gray-200 border text-red-700 rounded-2xl '>
      <h1 className='m-1 bg-slate-600'> UserName  eurhvuihr </h1>   
      <h1 className='m-1'> Email  ehevrvgorvougvrhugh </h1>
      <h1 className='m-1'> Total Quiz played  44</h1>
      <h1 className='m-1'> HighScore  867</h1>

      <button onClick={handleClick} className="m-1 block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
          logout
      </button>


      </div>
    </div>
  )
}

export default Logout