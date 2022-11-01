import React, { useState , useEffect } from 'react'

import Link from 'next/link'

const Result = ({id , score}) => {
    const [fs, setFs] = useState([])
    
    const getscore = async ()=>{
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getscore`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ "id": id }),
        })
            let respo = await res.json();
            if(respo.response){
                setFs(respo.score)
            }
        }
        useEffect(() => {
          setTimeout(() => {
            getscore()    
          }, 1000);
        });
   
  return ( 
    <div>  <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
     
      <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">You Have Completed</h1>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Your Score : {score}</h1>
        <p className="leading-relaxed mb-8">
          Create Your Own quiz and send to all your friends n know who knows you better 
        </p>
        <div className="flex justify-center">
          <Link href="/frndsquiz/create"><a><button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">create Quiz</button></a></Link>
        </div>
  
  
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
  
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Friends Score</h1>
  
        <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full border text-center">
            <thead className="border-b">
              <tr>
                <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r">
                  Name
                </th>
                <th scope="col" className="text-lg font-medium text-white px-6 py-4 border-r">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              
        {fs.map((f)=>{
                       return (
                        <tr key={f._id} className="border-b">
                        <td className="text-lg text-gray-100 font-light px-6 py-4 whitespace-nowrap border-r">
                          {f.FriendName}
                        </td>
                        <td className="text-lg text-gray-100 font-light px-6 py-4 whitespace-nowrap border-r">
                          {f.FriendScore}
                        </td>
                        </tr>
                       )
                     })}
              
            </tbody>
          </table>
        </div>
      </div>
      <p className="leading-relaxed my-8">
        Thank you to play the quiz on our platform , you may like to attend more different quiz , please click the below button 
      </p>
      <div className="flex justify-center">
        <Link href="/#newquiz"><a><button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">New Quiz</button></a></Link>
      </div>
    </div>
  </div>
  
  
  
  
    </div>
  </section>
  
  
  
      </div>
    </div>
  </section></div>
  )
}

export default Result


export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
    }
    let score = await Score.find({ "Userid": context.query.id })
  
    return { props:  {

      fs : JSON.parse(JSON.stringify(score)),

    }  }
}