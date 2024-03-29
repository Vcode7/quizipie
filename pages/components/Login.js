import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = ({ setuser , setSpin }) => {
    const [showlogin, setShowlogin] = useState(false);
    const [showsingin, setshowsingin] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleClick(btn) {
        if (btn == "Login") {
            setShowlogin(!showlogin);
            setshowsingin(false)
        }
        else {
            setShowlogin(false);
            setshowsingin(!showsingin)
        }
    }

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    }
    const handleSingin = async (e) => {
        setSpin(true)
        e.preventDefault();
        const data = { name, email, password }
        console.log(data)

            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/autentication`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })

            let response = await res.json();
            setName('')
            setEmail('')
            setPassword('')

            if (response.login) {
                setSpin(false)
                toast.success('successfully logedin!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
              
                localStorage.setItem('token', response.token);
                setTimeout(() => {
                    setuser(response.token)
                }, 1000);
                setShowlogin(false);
                setshowsingin(false);

            }
            else {
                setSpin(false)
                toast.error(response.error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

    
    }
    const handlelogin = async (e) => {

        setSpin(true)
        e.preventDefault();
        let data = { email, password }
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        let response = await res.json();
        console.log(response)
        setEmail('')
        setPassword('')
        if (response.login) {
            setSpin(false)
            toast.success('successfully logedin!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem('token', response.token);
            setTimeout(() => {

                setuser(response.token)
            }, 3000);

            setShowlogin(false);
            setshowsingin(false);
        }
        else {
            setSpin(false)
            toast.error( response.error , {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }




    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='flex flex-col md:flex-row justify-between'>
                <button onClick={() => { handleClick('Login') }} className="m-1 block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                    login
                </button>
                <button onClick={() => { handleClick('Singin') }} className="m-1 block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                    SingIn
                </button>
            </div>

            <div className='z-10'
                style={{
                    display: showlogin ? "block" : "none"
                }}
            >
                <div className="absolute -translate-x-3/4 top-0 md:top-20 p-4 ml-5 w-full max-w-md h-full md:h-auto">
                    <div className="relative  bg-gray-600 rounded-lg shadow">
                        <button onClick={() => { handleClick('Login') }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-white">Login in to our platform</h3>
                            <form onSubmit={handlelogin} className="space-y-6" >



                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                                <input value={email} onChange={handleChange} type="email" name="email" id="email" className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your password</label>
                                    <input value={password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                                </div>
                                
                                <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Login to your account</button>
                                <div className="text-sm font-medium text-white dark:text-gray-300">
                                    Not registered? <p onClick={() => { handleClick('Signin') }} className=" hover:underline dark:text-red-500">Create account</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='z-10'
                style={{
                    display: showsingin ? "block" : "none"
                }}
            >
                <div className="absolute -translate-x-3/4 md:top-20 top-0 p-4 w-full ml-5 max-w-md h-full md:h-auto">
                    <div className="relative  bg-gray-600 rounded-lg shadow">
                        <button onClick={() => { handleClick('Singin') }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-white">SingIn in to our platform</h3>
                            <form onSubmit={handleSingin} className="space-y-6" method='POST'>
                                <div>
                                    <label htmlFor="sname" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your Name</label>
                                    <input value={name} onChange={handleChange} type="name" name="name" id="sname" className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="semail" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your Email</label>
                                    <input value={email} onChange={handleChange} type="email" name="email" id="semail" className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="spassword" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your Password</label>
                                    <input value={password} onChange={handleChange} type="password" name="password" id="spassword" className="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                                </div>
                                <div className="flex justify-between">
                                </div>
                                <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">SingIn to your account</button>
                                <div className="text-sm font-medium text-white dark:text-gray-300">
                                    already registered? <p href="#" onClick={() => { handleClick('Login') }} className=" hover:underline dark:text-red-500">login</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login