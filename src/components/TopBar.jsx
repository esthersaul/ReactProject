import React from 'react'
import {MdAlternateEmail} from 'react-icons/md'
import {GiPineTree} from "react-icons/gi"


const TopBar = () => {
  return (
    <di className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
            <GiPineTree size={30} className='text-[#000000] mr-2'/>
            <h1 className='text-xl font-semibold text-[#000000]'>NW</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <MdAlternateEmail size={20} className='mr2 text-[#dda0dd]'/>
                <p className='text-sm text-grey-700'>info@google.com</p>
            </div>
            <button className='rounded-md'>Contact</button>
        </div>
    </di>
  )
}

export default TopBar