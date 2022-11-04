
import React, { useState } from 'react'

import {CopyToClipboard} from 'react-copy-to-clipboard';

import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";

import { FacebookIcon } from "react-share";
import { FacebookShareButton } from "react-share";


const Send = ({id,name}) => {

  
    const [copied, setCopied] = useState(false)
    const url = `${process.env.NEXT_PUBLIC_HOST}/frndsquiz/challenge/${id}`
    const message = ` ${name} as send friendship quiz challenge click the link and see how much u know about your friend`;
  return (
    <div className='text-gray-400 bg-gray-900 body-font'>

          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className='share '>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Share with your friends
        </h1>
      
        <h1
        style={{
          userSelect : "none",
          color : copied ? "red" : "rgb(17,24,39)"
      }} className="title-font sm:text-4xl text-xl mb-4 font-medium">
            copied
        </h1>
        
      {id?
        <p className="bg-gray-600 p-4 break-all rounded-lg leading-relaxed mb-8">
        {url}
        <CopyToClipboard text={url}
        onCopy={() => {
          setCopied(true)
          setTimeout(() => {
            setCopied(false)
          }, 1000);
        }}
        >
          <button className='inline-flex text-white bg-red-500 m-2 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded'>copy</button>
        </CopyToClipboard>

      </p>
: <p className="bg-gray-600 p-4 break-all rounded-lg leading-relaxed mb-8">generting link please wait...</p> }

      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            or share with
        </h1>
        <WhatsappShareButton url={url} title={message}>
            <WhatsappIcon className='rounded-full mx-2' size={30}></WhatsappIcon>
        </WhatsappShareButton>
        <FacebookShareButton url={url}>
            <FacebookIcon className='rounded-full mx-2' size={30}></FacebookIcon>
        </FacebookShareButton>

          </div>
        </div>
    </div>
  )
}

export default Send