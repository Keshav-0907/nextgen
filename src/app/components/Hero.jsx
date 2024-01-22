import React from 'react'
import Joinbutton from './Joinbutton'

const Hero = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='hero-main'>
        <div className='absolute w-80 md:top-[20%] md:left-[70%] text-lg'>
          Access <span className='font-bold md:text-lg'> job postings, mentorship, educational content, events, </span>  and more
        </div>

        <div className='flex gap-6 flex-col w-[500px]  absolute top-[70%] left-[5%]'>
          <div className='text-5xl font-bold font-inika flex flex-col'>
            <span> Where Chief of Staff </span>
            <span className='bg-gradient-to-r text-5xl font-bold from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'> come together </span>
          </div>
          <div>
            A Community designed for aspiring and current Chiefs of Staff to <span className='font-bold'> connect, learn , and  grow professionally </span>
          </div>
          <div className='w-fit'>
            <Joinbutton text={'Join Cohort'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero


{/* <div className='h-screen w-screen'>
      <div className='hero-main'>
        <div className='absolute top-[20%] left-1/4'>
          <img className='w-48 rounded-[50px]' src='https://framerusercontent.com/images/SU0rcmTV0nviQDJNvhs61ErsktY.jpg' alt='err'/>
        </div>
        <div className='absolute top-1/2 left-[40%]'>
          <img className='w-full h-72 rounded-[50px]' src='https://framerusercontent.com/images/JAGxMORRIpTQdxhx4ixii2NVVo.png' alt='err'/>
        </div>
      </div>
    </div> */}