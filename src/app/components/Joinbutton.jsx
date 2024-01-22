import React from 'react'

const Joinbutton = (props) => {
  return (
    <div className='bg-black text-white py-2 px-10 rounded-xl cursor-pointer hover:bg-gray-900 '>
        {props.text}
    </div>
  )
}

export default Joinbutton