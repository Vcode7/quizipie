import React,{useEffect ,useState} from 'react'
import Login from './Login'
import Logout from "./logout";

const jwt = require('jsonwebtoken');


export const Nav = () => {
    const [username, setUsername] = useState('')
    const [userstate, setuserstate] = useState(false);
    useEffect(() => {

        var token = localStorage.getItem("token"); 
        if(token){
            setuserstate(token );
            var decoded = jwt.verify(token, '7204968501');
            setUsername(decoded.user.username)
        }
    }, [])
    return (
        <>

            <header className="text-gray-400 bg-gray-900 sticky top-0 body-font">
                <div className="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Quizipie</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-white">First Link</a>
                    </nav>
                
                    {!userstate ? <Login  setuser={setuserstate} /> : <Logout username={username} setuser={setuserstate} />}
                    
                  
                    
                </div>
            </header>        </>
    )
}