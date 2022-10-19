import React, { useState } from 'react'
import question from '../question'
import FriendQuiz from '../../../models/Friends'
import mongoose from 'mongoose'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = ({Ans}) => {
    const [quenum, setQuenum] = useState(0)

    if(!question[quenum]){
        console.log('send answer')
        create();
    }

    const handleClick = (num)=>{
        if(Ans[quenum]==num){
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
        setQuenum(quenum+1)
    }
  return (
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
    {question[quenum] && 
             <section className="text-gray-300 body-font bg-gray-900">
             <div className="container px-5 py-2 mx-auto flex flex-wrap">
               <div className="flex flex-col text-center w-full mb-20">
                 <div className="p-4 md:w-1/3 mx-auto mb-7">
                   <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                     <div className="flex items-center mb-3 my-2">
                       <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                         <span>{quenum}</span>
                       </div>
                       <h2 className="text-white mx-10 text-lg title-font font-medium">
                         {question[quenum].question}
                       </h2>
                     </div>
                   </div>
                 </div>
                 <hr className='bg-gray-200'/>
                 <div className="container px-5 py-24 md:py-4 mx-auto">
                   <div className="grid grid-cols-2 md:grid-cols-4 md:mt-10 -m-4 w-full text-center">
                    {question[quenum].options.map((op)=>{
                     return (<div key={op.no} onClick={()=>{handleClick(op.no)}} className=" mx-auto">
                       <div className="flex flex-col items-center m-2">
                         <img className='hover:outline rounded-2xl ' src={op.link} alt="" />
                       </div>
                     </div>)
                   })} 
                   </div>
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
    let Quizs = await FriendQuiz.find({ "_id": context.query.id })
    return { props:  {Ans : JSON.parse(JSON.stringify(Quizs))}  }
}