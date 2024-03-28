import React from 'react'
import {GiPineTree} from "react-icons/gi"

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
            <GiPineTree size={50} className='mr-2'/>
            <h className='text-xl font-bold text-[#000000]'>NW</h>
        </div>
    </div>
  )
}

export default Footer