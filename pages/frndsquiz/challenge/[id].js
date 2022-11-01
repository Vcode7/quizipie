import React, { useState , useEffect } from 'react'
import {Question} from '../question'
import FriendQuiz from '../../../models/Friends'
import mongoose from 'mongoose'
import Image from 'next/image'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Result from '../Result'

const Answer = ({ Ans ,username, id }) => {
    const [quenum, setQuenum] = useState(0)
    const [PlayerName, setPlayerName] = useState("")
    const [iPlayerName, setiPlayerName] = useState("")
    const [score, setscore] = useState(0)
    const handlechange = (e)=>{
      setiPlayerName(e.target.value)
    }
    const handleclick = () =>{
       setPlayerName(iPlayerName)
    }
    const update = async ()=>{
      let data = {
        "id": id,
        "name":PlayerName,
        "score": score
      }
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/scoreupdate`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })
    
            let response = await res.json();
            if(response){
              console.log(response)
            }


    }

    useEffect(() => {
      if(!Question[quenum]){
        console.log('send answer')
        update();       
    };
  });

    const handleClick = (num)=>{
        if(Ans[quenum]==num){
          setscore(score+1)
            toast.success(`right answer`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
        }
        else{
          toast.error(`wrong answer`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setQuenum(quenum+1)
    }
  return (
      <div>
        {
        PlayerName ?
        <div> 
         <ToastContainer
                position="top-center"
                autoClose={500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />

            {Ans && 
            <>
    {Question[quenum] ?
               
             <section className="text-gray-300 body-font bg-gray-900">
             <div className="container px-5 py-2 mx-auto flex flex-wrap">
               <div className="flex flex-col text-center w-full mb-20">
                 <div className="p-4 md:w-1/3 mx-auto mb-7">
                 <div className=" px-10 py-2 inline-flex items-center justify-center  bg-red-500 text-white flex-shrink-0">
                          Score : <span>{score}</span>
                        </div>
                        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                     <div className="flex items-center mb-3 my-2">
                       <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                         <span>{quenum}</span>
                       </div>
                       <h2 className="text-white mx-10 text-lg title-font font-medium">
                         You Friend {Question[quenum].question}
                       </h2>
                     </div>
                   </div>
                 </div>
                 <hr className='bg-gray-200'/>
                 <div className="container px-5 py-24 md:py-4 mx-auto">
                   <div className="grid grid-cols-2 md:grid-cols-4 md:mt-10 -m-4 w-full text-center ml-1">
                    {Question[quenum].options.map((op)=>{
                     return (<div key={op.no} onClick={()=>{handleClick(op.no)}} className=" mx-auto">
                       <div className="flex flex-col items-center m-2">
                         <Image className='hover:outline rounded-2xl ' width={200} height={180} src={op.link} alt="" />
                       </div>
                     </div>)
                   })} 
                   </div>
                 </div>
               </div>
             </div>

           </section>
           :

           <div>hh</div>
    }
    </>}
        </div>
        : 
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Friends Quiz Challenge</h1>
            <p className="mb-8 leading-relaxed">join your friendship dare quiz from {username}</p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">Enter The name</label>
                <input value={iPlayerName} onChange={handlechange} type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-red-900 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
      
              <button onClick={handleclick} className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Next</button>
            </div>
      
          </div>
        </div>
      </section>
    }
    </div>
  )
}

export default Answer

export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
    }
    let Quizs = await FriendQuiz.findOne({ "_id": context.query.id })

    return { props:  {
   
      Ans : JSON.parse(JSON.stringify(Quizs.Answer)) ,
      username : JSON.parse(JSON.stringify(Quizs.UserName)),
      id : context.query.id
    
    }  }
}