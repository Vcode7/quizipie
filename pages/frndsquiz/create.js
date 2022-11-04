import React, { useState , useEffect } from 'react'
import Answer from './answer'

const Create = ({setSpin}) => {

  useEffect(() => {
    setSpin(false)
  }, [])
  const [name, setName] = useState('')
  const [next, setNext] = useState(false)
  const handlechange = (e)=>{
    setName(e.target.value)
  }
  const handleclick = () =>{
     setNext(true)
  }
  return (
    <div>
    {next? <Answer name={name}/> :
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Friends Quiz Challenge</h1>
      <p className="mb-8 leading-relaxed">Create your friendship dare quiz and Share it with your friends on Facebook or Whatsapp. Get feedback from your friends</p>
      <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">Enter The name</label>
          <input value={name} onChange={handlechange} type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-red-900 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

        <button onClick={handleclick} className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Next</button>
      </div>

    </div>
  </div>
</section>}
    </div>
  )
}

export default Create