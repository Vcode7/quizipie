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
    <div> </div>
  )
}

export default Result
