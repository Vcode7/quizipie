import React from 'react'
import { useRouter } from 'next/router'

export default function Quiz() {
  const router = useRouter()
  const { type } = router.query

  return (
    <div>
  
    <p>Post: {type}</p>
      <section className="text-gray-300 body-font bg-gray-900">
        <div class="container px-5 py-24 mb:py-4 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="p-4 md:w-1/3 mx-auto">
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div className="flex items-center mb-3 my-2">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <span>1</span>
                  </div>
                  <h2 className="text-white mx-10 text-lg title-font font-medium">
                    Whats your name
                  </h2>
                </div>
              </div>
            </div>
            <section class="text-gray-400 bg-gray-900 body-font">
              <div class="container px-5 py-24 mb:py-4 mx-auto">

                <div class="flex flex-wrap -m-4 text-center">
                  <div class="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">
                    <div class="border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3 my-2">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                          <span>A</span>
                        </div>
                        <h2 className="title-font font-medium">
                          Whats your name
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">
                    <div class="border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                          <span>B</span>
                        </div>
                        <h2 className="title-font font-medium">
                          Whats your name
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">
                    <div class="border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3 my-2">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                          <span>C</span>
                        </div>
                        <h2 className="title-font font-medium">
                          Whats your name
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="p-2 md:w-1/4 mx-auto sm:w-1/2 w-75">
                    <div class="border-2 border-gray-800 px-8 py-2 hover:text-lg text-gray-400 hover:text-gray-200 hover:outline hover:outline-1 rounded-lg">
                      <div className="flex items-center mb-3 my-2">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                          <span>D</span>
                        </div>
                        <h2 className="title-font font-medium">
                          Whats your name
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
