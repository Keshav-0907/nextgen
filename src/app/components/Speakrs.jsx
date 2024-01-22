import React from 'react'
import Card from './Card'

const Speakrs = () => {
    return (
        <div>
            <div className='w-full flex text-center flex-col pt-10'>
                <div className='text-5xl font-medium'>
                    Still Not Convenced ??


                </div>
                <div className='text-2xl text-gray-600'>
                    Checkout our speakers
                </div>
            </div>
            <div className='grid grid-cols-3'>
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