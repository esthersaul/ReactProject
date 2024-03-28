import React from 'react'

const ContactDetail = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700 font-semibold'>Contact</h2>
        <div className='grid md:grid-cols-2'>
            <form>
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type='text' placeholder='First Name' />
                    <input className='border m-2 p-2' type='text' placeholder='Last Name' />
                    <input className='border m-2 p-2' type='email' placeholder='Email' />
                    <input className='border m-2 p-2' type='text' placeholder='Telephone' />
                    <textarea className='border col-span-2 p-2 m-2' cols='30'  rows='10'></textarea>
                    <button className='col-span-2 m-2 rounded-md'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactDetail