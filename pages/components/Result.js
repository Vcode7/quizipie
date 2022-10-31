import Link from 'next/link'
import React from 'react'


const Result = ({score , winner}) => {
  let result;
  if(winner == "true"){
    result = "Congratulation you have completed the Quiz"
  }
  else{
    result = " You have lose " 
  }
  return (
    <div>
      
      <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
   
    <div className="text-center lg:w-2/3 w-full">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{result}</h1>
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Your Score : {score}</h1>
      <p className="leading-relaxed mb-8">
        Thank you to play the quiz on our platform , you may like to attend more different quiz , please click the below button 
      </p>
      <div className="flex justify-center">
        <Link href="/#newquiz"><a><button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" >New Quiz    </button></a></Link>
      </div>
    </div>
    <p className="leading-relaxed my-8">
          Create Your Own quiz and send to all your friends n know who knows you better 
        </p>
        <div className="flex justify-center">
          <Link href="/frndsquiz/create"><a><button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">create Quiz</button></a></Link>
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
  )
}

export default Result