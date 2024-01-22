import React from 'react'

const Joinbutton = (props) => {
  return (
    <div className='bg-black text-white py-2 px-7 rounded-xl cursor-pointer hover:bg-gray-900 flex items-center gap-3 transition-transform transform hover:scale-105'>
      <span className='font-medium'>{props.text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
        <path d="M0.100006 18L0.100006 14.4L3.70001 14.4L3.70001 18L0.100006 18ZM3.70001 14.4L3.70001 10.8L7.30001 10.8L7.30001 14.4L3.70001 14.4ZM7.30001 10.8L7.30001 7.2L10.9 7.2L10.9 10.8L7.30001 10.8ZM3.70001 7.2L3.70001 3.6L7.30001 3.6L7.30001 7.2L3.70001 7.2ZM0.100005 3.6L0.100005 0L3.70001 -1.57361e-07L3.70001 3.6L0.100005 3.6Z" fill="white" />
      </svg>
    </div>

  )
}

export default Joinbutton