import React from 'react'

const Form = () => {
  return (
    <div id='destination' className='max-w-[1140px] m-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label className='font-semibold'>Destination</label>
                <select className='lg:w-[300px] md:w-full border rounded-md p-2 appearance-none'>
                    <option>Lancashire</option>
                    <option>Cumbria</option>
                    <option>Lake District</option>
                    <option>Peak District</option>
                </select>
            </div>
          
            <div className='flex flex-col my-2 p-2  w-full rounded-lg'>
                <button>Confirm</button>
            </div>
        
        </form>
    </div>
  )
}

export default Form