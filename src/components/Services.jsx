import React from 'react'

const Services = () => {
  return (
    <div className='mt-20 text-center' id='lets_talk'>
    <div className='text-6xl font-extrabold mb-6'>
      <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
        Services
      </span>
    </div>

    <div className='grid grid-cols-3'>
    <div className='text-4xl font-semibold'>
        <span className='text-blue-500'>Design</span>
        <ul className='my-4 text-3xl font-medium text-start ml-36'>
            <li className='my-4'>
            Brand Identity
            </li>
            <li className='my-4'>
            UI Design
            </li>
            <li className='my-4'>
            UX Design
            </li>
            <li className='my-4'>
            UX Consultancy
            </li>
            <li className='my-4'>
            Design System
            </li>
        </ul>   
        </div>

        <div className='text-4xl font-semibold'>
        <span className='text-purple-500'>Development</span>
        <ul className='my-4 text-3xl font-medium text-start ml-32 '>
            <li className='my-4'>
            Web Development
            </li>
            <li className='my-4'>
            Saas Development
            </li>
            <li className='my-4'>
            Mobile Apps
            </li>
            <li className='my-4'>
            Front-End
            </li>
            <li className='my-4'>
            Back-End
            </li>
        </ul>   
        </div>

        <div className='text-4xl font-semibold'>
        <span className='text-fuchsia-500'>Marketing</span>
        <ul className='my-4 text-3xl font-medium text-start ml-36'>
            <li className='my-4'>
            Branding
            </li>
            <li className='my-4'>
            Strategy
            </li>
            <li className='my-4'>
            SEO
            </li>
            <li className='my-4'>
            Digital Marketing
            </li>
            <li className='my-4'>
            Content Writing
            </li>
        </ul>   
        </div>

    </div>

    </div>
  )
}

export default Services