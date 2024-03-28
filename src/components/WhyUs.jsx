import React from 'react'

const WhyUs = () => {
  return (
    <div className='mt-20 text-center' id='lets_talk'>
    <div className=' mb-6'>
      <span className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
        Why us !
      </span>

      <div className='grid grid-cols-4 justify-center mt-12 gap-6'>

<div className='flex flex-col items-center justify-center'>
    <img src="assets/pie-and-charts.svg" alt="" className="filter brightness-100 hover:brightness-75"/>
    <h1 className='text-xl font-semibold my-4'>Future Proof Execution</h1>
    <p>
    We build with the latest advancements in mind, ensuring your product scales, stays secure, and thrives for years to come.
    </p>
</div>

<div className='flex flex-col items-center justify-center'>
    <img src="assets/smart-people.svg" alt="" className="filter brightness-100 hover:brightness-75"/>
    <h1 className='text-xl font-semibold my-4'>Streamlined Efficiency</h1>
    <p>
    Our refined processes guarantee transparency and keep your project on track and within budget.    </p>
</div>

<div className='flex flex-col items-center justify-center'>
    <img src="assets/designer-working.svg" alt="" className="filter brightness-100 hover:brightness-75"/>
    <h1 className='text-xl font-semibold my-4'>Design that Captivates</h1>
    <p>
    We create beautiful and user-friendly interfaces that not only look amazing but also deliver an intuitive experience.    </p>
</div>

<div className='flex flex-col items-center justify-center'>
    <img src="assets/business-deal.svg" alt="" className="filter brightness-100 hover:brightness-75"/>
    <h1 className='text-xl font-semibold my-4'>End-to-End Partnership</h1>
    <p>
    We're here for the long haul, supporting you from brainstorming to launch and beyond.    </p>
</div>

</div>



    </div>
    </div>
  )
}

export default WhyUs