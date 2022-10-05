import React from 'react'
import { useRouter } from 'next/router'

export const Stater = () => {
  const router = useRouter()
  return (
    <div>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-10 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src="data:image/jpeg;base64,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"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-white text-lg">Phoebe Caulfield</h2>
            <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
            <p className="text-base text-gray-400">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a className="text-red-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<hr className='bg-white'/>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-red-400 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Master Cleanse Reliac Heirloom</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div onClick={()=>{router.push('/quiz?type=science')}} className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">Shooting Stars</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-red-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">The Catalyzer</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-red-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">The Catalyzer</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-red-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">Neptune</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-red-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">The Catalyzer</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-red-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">Neptune</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-red-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-white text-lg title-font font-medium">Neptune</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a className="mt-3 text-red-400 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokewidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<hr className='bg-white'/>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out

      </h1>
      <div className="flex justify-center">
        <a href='/frndsquiz/base'>
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
        </a>
</div>
    </div>
  </div>
</section>
    </div>
  )
}
