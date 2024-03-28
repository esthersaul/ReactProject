import React from 'react'
import img5 from '/Users/esthersaul/Downloads/reactproject/src/image/5.jpeg'
import img6 from '/Users/esthersaul/Downloads/reactproject/src/image/6.jpeg'
import img7 from '/Users/esthersaul/Downloads/reactproject/src/image/7.jpeg'
import img8 from '/Users/esthersaul/Downloads/reactproject/src/image/8.jpeg'
import img9 from '/Users/esthersaul/Downloads/reactproject/src/image/9.jpeg'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-grey-700 p-4 font-semibold'>Gallery</h2>
        <div className='grid sm:giid-cols-5 gap-4'>
            <div  className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={img7} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={img6} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={img5} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={img8} alt="/" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={img9} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Gallery