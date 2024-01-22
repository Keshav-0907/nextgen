import React from 'react'
import Card from './Card'

const Speakrs = () => {
    return (
        <div>
            <div className='w-full flex text-center flex-col pt-10 font-inika'>
                <div className='text-5xl font-medium'>
                    Still Not Convenced ??


                </div>
                <div className='text-2xl text-gray-600'>
                    Checkout our speakers
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Speakrs