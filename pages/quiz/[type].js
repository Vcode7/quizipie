import React,{ useState } from 'react'
import Quizdata from '../../models/Quiz'
import mongoose from 'mongoose'
import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Quiz({Quizs , setSpin}) {
  const [number, setNumber] = useState(0)
  const [score, setScore] = useState(0)
  const [wronganswer, setWronganswer] = useState(0)
  const handleClick=(op)=>{
    setSpin(true)
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
    setSpin(false)


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
           
        <div className="container px-5 py-10 mb:py-4 mx-auto flex flex-wrap">
        {Quizs[number] && wronganswer < 3 ? <div key={Quizs[number]._id} className="flex flex-col text-center border w-full mb-20">
                <div className=" px-5 py-2 inline-flex items-center justify-center  bg-red-500 text-white flex-shrink-0">
                          Score : <span>{score}</span>
                        </div>
            <div className="p-4 mt-8 md:min-w-fit mx-auto">
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div className="flex items-center mb-3 my-2">
                  <h2 className="text-white mx-10 text-lg title-font font-medium">
                  <div className="w-8 h-8 mx-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <span>{number+1}</span>
                  </div>
                    {Quizs[number].Question}
                  </h2>
                </div>
              </div>
            </div>
            <section className="text-gray-400 bg-gray-900 body-font">
              <div className="container px-5 pt-10 pb-24 mb:py-4 mx-auto">

                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">
                 
                    <div onClick={()=>{handleClick(Quizs[number].Options[0].correct)}} className="border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3 my-2">
                        <div className="w-8 h-8 mx-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
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
                        <div className="w-8 h-8 mx-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
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
                        <div className="w-8 h-8 mx-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
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
                        <div className="w-8 h-8 mx-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
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
          </div> : 

<div>
      
<section className="text-gray-400 bg-gray-900 body-font">
<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

<div className="text-center lg:w-2/3 w-full">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{wronganswer < 3 ? <p> Congratulation you have completed the Quiz</p> : <p>You have lose</p>}</h1>
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Your Score : {score}</h1>
<p className="leading-relaxed mb-8">
  Thank you to play the quiz on our platform , you may like to attend more different quiz , please click the below button 
</p>
<div className="flex justify-center">
  <Link href="/#newquiz"><a onClick={()=>{setSpin(true)}}><button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" >New Quiz    </button></a></Link>
</div>
</div>
<p className="leading-relaxed my-8">
    Create Your Own quiz and send to all your friends n know who knows you better 
  </p>
  <div className="flex justify-center">
    <Link  href="/frndsquiz/create"><a onClick={()=>{setSpin(true)}}><button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">create Quiz</button></a></Link>
  </div>

</div>
</section>
<section className="text-gray-400 bg-gray-900 body-font">
<div className="container px-5 py-24 mx-auto">
<div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
</svg>
<p className="leading-relaxed text-lg">Knowledge becomes power only when we put it into some use.....so lets honour our knowledge by answering some simple GK questions......... Knowledge has a beginning but no end.......so lets keep ourselves going.</p>
<span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
</div>
</div>
</section>
</div>
          }
      </div> 
         
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
