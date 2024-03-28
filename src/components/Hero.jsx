import React from 'react'
import img from '/Users/esthersaul/Downloads/reactproject/src/image/1.png'

const Hero = () => {
  return (
    <div className='w-full h(90vh)'>
        <img src={img} alt='/' className='w-full h-full object-cover'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[70%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-pink-300 p-4'>
                <h1 className='font-bold text-4xl'>Brombil Reservoir</h1>
                <h2 className='text-4xl py-4 italic'>Margam</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, iusto nihil fugiat eum velit dolorum voluptas officiis enim distinctio ex excepturi molestias, minus, quaerat nam dolor. Sapiente voluptatibus labore accusantium!</p>
            </div>
        </div>
    </div>
  )
}

export default Hero