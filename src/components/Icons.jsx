import React from 'react'
import img2 from '/Users/esthersaul/Downloads/reactproject/src/image/2.jpeg'
import img3 from '/Users/esthersaul/Downloads/reactproject/src/image/3.jpeg'
import img4 from '/Users/esthersaul/Downloads/reactproject/src/image/4.jpeg'

const Icons = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-pink-300 text-2xl font-bold'>Ingleton</h3>
            <img className='w-full h-full object-cover relative border-4 border-yellow-200 shadow-lg' src={img2} alt='/' />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-pink-300 text-2xl font-bold'>Lytham</h3>
            <img className='w-full h-full object-cover relative border-4 border-yellow-200 shadow-lg' src={img3} alt='/' />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-pink-300 text-2xl font-bold'>Beacon Fell</h3>
            <img className='w-full h-full object-cover relative border-4 border-yellow-200 shadow-lg' src={img4} alt='/' />
        </div>
    </div>
  )
}

export default Icons