import { useRouter } from 'next/router'
import React, { useState , useEffect} from 'react'
import question from './question'
import Send from './Send'

const Answer = ({name}) => {
    const [quenum, setQuenum] = useState(0)
    const [ans, setAns] = useState([])
    const [id, setId] = useState(false)

    useEffect(() => {
      if(!question[quenum] && !id){
        console.log('send answer')
        create();
    };
  });

    const router = useRouter();
    const create = async ()=>{
        let data = {
            "name": name,
            "answer": ans
        }
          console.log(data)
          try {
    
            let res = await fetch('http://localhost:3000/api/create', {
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
        } catch (error) {
            console.log(error)
        }
    }
    const handleClick = (num)=>{
        setAns(ans => [...ans, num]);
        setQuenum(quenum+1)
    }
    
    
  return (
      <div>
    {question[quenum] ?  <section className="text-gray-300 body-font bg-gray-900">
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
                         <img className='hover:outline rounded-2xl  hover:border hover:shadow-sm hover:shadow-green-400 hover:border-green-400 ' src={op.link} alt="" />
                       </div>
                     </div>)
                   })} 
                   </div>
                 </div>
               </div>
             </div>

           </section>
    :
    <Send id={id}/>
    }
    </div>
  )
}

export default Answer