import React,{ useEffect} from 'react'
import { useRouter  } from 'next/router'

import Image from 'next/image'
import FeatherIcon from "feather-icons-react";
import Link from 'next/link';

const Stater = ({setSpin}) => {
  useEffect(() => {
    setSpin(false)
  }, [])
  const router = useRouter()

  const catagrey = [
    
    {
      "type":"science",
      "desc":"Test your knowledge of science facts and applications of scientific principles by taking our quiz,"
    },
    {
      "type":"general",
      "desc":"Test your trivia knowledge by answering our best online general knowledge quiz questions and answers"
    },
    {
      "type":"history",
      "desc":"Test your trivia knowledge by answering our best online quiz questions related to indian history "
    },

  ]

  return (
    <div>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 text-center py-10 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg mb:h-64 overflow-hidden">
        <Image width={900} height={400} objectPosition="absolute" layout="responsive"  alt="content" className="object-cover -z-2 object-center h-full w-full" src="/quiz.jfif"/>
      </div>
      <div className="flex flex-col lg:w-2/3 w-full mx-auto mt-10 sm:flex-row">
        
      <div className="text-center ">
      <h1 className="title-font sm:text-2xl text-xl mb-8 text-red-300 font-medium ">Answer tricky questions and test your worldly knowledge in one of our many free, online quiz games! Pick One of Our Free Quiz Games, and Have Fun.</h1>
      <p className="leading-relaxed mb-8">quiz, a contest in which participants test what they know by answering questions on one or more topics . The quiz provides a more-focused review of class topics; it provides a sharper focus in terms of assessing cognitive learning. It also provides a better incentive setup; it is able to elicit a more sustained serious response-effort from you. so dowm here u get different tupes of Quiz , choose the quiz you wanna play and have fun !!</p>
  
    </div>
    
    </div>  
    </div>
  </div>
</section>
<hr className='bg-white'/>
<section id="newquiz" className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="sm:text-2xl text-xl text-red-400 tracking-widest font-medium title-font mb-1">Play Quiz </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Different Catagrey Available</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {catagrey.map((quiz)=>{return <div key={quiz.type} className="p-4 md:w-1/3">

        <div onClick={()=>{setSpin(true);router.push(`/quiz/${quiz.type}`)}} className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
            <FeatherIcon icon={quiz.type} color="red" strokeWidth="3px" />
            </div>
            <h2 className="text-white text-lg title-font font-medium">{quiz.type}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">{quiz.desc}</p>
            
          </div>
        </div>
      </div>

      })}
      
    </div>
  </div>
</section>
<hr className='bg-white'/>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 object-cover object-center rounded">
      <Image className="object-cover z-0 object-center rounded" alt="hero" 
      width={500} height={300} src="/friendquiz.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
      Have you ever wondered which friend knows you the best? Test your mates by creating your own trivia quiz.
      </h1>
      <div className="flex justify-center">
        <Link href='/frndsquiz/create'><a onClick={()=>{setSpin(true)}} >
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Click here</button>
        </a></Link>
</div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Stater