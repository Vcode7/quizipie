
import React, { useState, useEffect } from 'react'
import { Question } from './question'
import Send from './Send'
import Image from 'next/image'

const Answer = ({ name , setSpin}) => {
  useEffect(() => {
    setSpin(false)
  }, [])
  const [quenum, setQuenum] = useState(0)
  const [ans, setAns] = useState([])
  const [id, setId] = useState(false)

  useEffect(() => {
    if (!Question[quenum] && !id) {
      Create();
    };
  });
  const Create = async () => {
    
    let data = {
      "name": name,
      "answer": ans
    }

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    let response = await res.json();
    if (response.qusetionadded) {
      console.log(response)
      setId(response.id)
    }
    else {
      console.log('failed')
    }


  }
  const handleClick = (num) => {
    setSpin(true)
    setTimeout(() => {
      
      setAns(ans => [...ans, num]);
      setQuenum(quenum + 1)
      setSpin(false)
    }, 200);
    }


  return (
    <div>
      {Question[quenum] ? <section className="text-gray-300 body-font bg-gray-900">
        <div className="container px-5 py-2 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="p-4 md:w-1/3 mx-auto mb-7">
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div className="flex items-center mb-3 my-2">
                  <h2 className="text-white mx-10 text-lg title-font font-medium">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                      <span>{quenum + 1}</span>
                    </div>
                    You {Question[quenum].question}
                  </h2>
                </div>
              </div>
            </div>
            <hr className='bg-gray-200' />
            <div className="container px-5 py-24 md:py-4 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 md:mt-10 -m-4 ml-1 w-full text-center">
                {Question[quenum].options.map((op) => {
                  return (<div key={op.no} onClick={() => { handleClick(op.no) }} className=" mx-auto ">
                    <div className="flex flex-col items-center m-3 ">
                      <Image width={200} height={180} className='hover:outline rounded-2xl  hover:border hover:shadow-sm hover:shadow-green-400 hover:border-green-400 ' src={op.link} alt="" />
                    </div>
                  </div>)
                })}
              </div>
            </div>
          </div>
        </div>

      </section>
        :
        <Send id={id} setSpin={setSpin} name={name} />
      }
    </div>
  )
}

export default Answer