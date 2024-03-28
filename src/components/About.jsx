import React from 'react'

const About = () => {
  return (
    <div className='mx-20' id='about'>
    <div className='text-6xl font-extrabold	mb-8'>
  <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
    About
  </span>
</div>

<div className='grid grid-cols-3  '>
    <div className='grid col-span-2'>

    <ul className="list-disc ml-8 text-lg">
  <li className="mb-4 font-light">
    <span className="text-purple-300 font-bold">Passionate Technologists:</span> We're a team that gets fired up about innovation and creating awesome tech.
  </li>
  <li className="mb-4 font-light">
    <span className="text-purple-300 font-bold">End-to-End Expertise:</span> We handle everything from design and development to launch, ensuring a seamless product journey.
  </li>
  <li className="mb-4 font-light">
    <span className="text-purple-300 font-bold">Affordable Solutions:</span> Our flat monthly subscription makes cutting-edge product creation accessible to businesses of all sizes.
  </li>
  <li className="mb-4 font-light">
    <span className="text-purple-300 font-bold">Growth Focused:</span> We believe in the power of technology to drive success and are dedicated to helping businesses achieve their goals.
  </li>
  <li className='font-light'>
    <span className="text-purple-300 font-bold">Agile & Collaborative:</span> We use agile development methodologies to ensure clear communication and a product tailored to your specific needs.
  </li>
</ul>

    </div>

    <div className='grid col-span-1 justify-center'>
    <img src="assets/about-our-team.png" className='h-72' alt="" />
    </div>

</div>




        <div>

        </div>
    </div>
  )
}

export default About