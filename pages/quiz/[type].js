import React,{ useState } from 'react'
import Quizdata from '../../models/Quiz'
import mongoose from 'mongoose'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Result from '../components/result';


export default function Quiz({Quizs}) {

  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [wronganswer, setWronganswer] = useState(0)
  const handleClick=(op)=>{
      if(op == 1){
        setNumber(number+1)
        console.log('hello')
        setScore(score+10)
        toast.success("Right answer", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });

      }
      else{
        setNumber(number+1)
        setWronganswer(wronganswer+1)
        if(wronganswer < 2){
          toast.error(`wrong answer , ${2-wronganswer} chance left `, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }

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

      <section className="text-gray-300 body-font bg-gray-900">
          { wronganswer < 3 ? 
        <div className="container px-5 py-24 mb:py-4 mx-auto flex flex-wrap">
        {Quizs[number] ? <div key={Quizs[number]._id} className="flex flex-col text-center border w-full mb-20">
                <div className=" px-10 py-2 inline-flex items-center justify-center  bg-red-500 text-white flex-shrink-0">
                          Score : <span>{score}</span>
                        </div>
            <div className="p-4 mt-8 md:min-w-fit mx-auto">
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div className="flex items-center mb-3 my-2">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <span>{number+1}</span>
                  </div>
                  <h2 className="text-white mx-10 text-lg title-font font-medium">
                    {Quizs[number].Question}
                  </h2>
                </div>
              </div>
            </div>
            <section className="text-gray-400 bg-gray-900 body-font">
              <div className="container px-10 pt-10 pb-24 mb:py-4 mx-auto">

                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">
                 
                    <div onClick={()=>{handleClick(Quizs[number].Options[0].correct)}} className="border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3 my-2">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                          <span>A</span>
                        </div>
                        <h2 className="title-font font-medium">
                          {Quizs[number].Options[0].op}
                        </h2>
                      </div>
                  </div>
                  </div>
                  <div className="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">
                  
                    <div onClick={()=>{handleClick(Quizs[number].Options[1].correct)}} className="border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                          <span>B</span>
                        </div>
                        <h2 className="title-font font-medium">
                          {Quizs[number].Options[1].op}
                        </h2>
                      </div>
                    
                    </div>
                  </div>
                  <div className="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">

                    
                    <div onClick={()=>{handleClick(Quizs[number].Options[2].correct)}} className="border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3 my-2">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                          <span>C</span>
                        </div>
                        <h2 className="title-font font-medium">
                          {Quizs[number].Options[2].op}
                        </h2>
                      </div>
                 
                     </div>
                  </div>
                  <div className="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">
                  
                    <div onClick={()=>{handleClick(Quizs[number].Options[3].correct)}} className=" border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3 my-2">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                          <span>D</span>
                        </div>
                        <h2 className="title-font font-medium">
                          {Quizs[number].Options[3].op}

                        </h2>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div> : <Result score={score} winner="true"/> }
      </div> 
          : <Result score={score} winner="false"/> }
      </section>
    </div>
  )
}
 export async function getServerSideProps(context) {
    if(!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
    }
    let Quizs = await Quizdata.find({ "Catagrey": context.query.type })
    return { props:  {Quizs : JSON.parse(JSON.stringify(Quizs))}  }
}
