import React from 'react'
import { RiOpenSourceLine } from "react-icons/ri";


const WhatYouGet = () => {
    return (
        <div className='bg-gray-100 pb-10 font-inika'>
            <div className='flex flex-col text-center gap-1 '>
                <span className='md:text-6xl text-3xl font-medium mb-6'> What you will get ? </span>
                <span className='text-sm text-gray-600 px-10'> By witnessing this revolutionary event in Agra, you will gain exposure to WEB 3 domain </span>
            </div>

            <div className='flex justify-around mt-10 md:px-20 px-10'>

                <div className='max-w-60 h-fit p-1 text-center'>
                    <div className=' h-1/2 flex justify-center'>
                        <img className='w-1/2 h-1/2' src='https://ouch-cdn2.icons8.com/_qv0GZ-TvUNz7L6kTDY6jQTK0ZL8PBgeSRketqzOyB0/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png' alt='err' />
                        {/* <RiOpenSourceLine size={150}/> */}
                    </div>
                    <div className='flex flex-col md:gap-2'>
                        <div className='md:text-sm text-[10px] font-bold'>
                            Interact with open source gods
                        </div>
                        <div className='md:text-sm text-[8px] h-1/3 text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </div>
                    </div>
                </div>

                <div className='max-w-60 h-fit p-1 text-center'>
                    <div className=' h-1/2 flex justify-center'>
                        <img className='mix-blend-multiply w-1/2 h-1/2' src='https://img.freepik.com/premium-vector/3d-vector-plastic-flying-yellow-square-closed-present-gift-box-with-red-ribbon-bow-star-icon-design_624031-832.jpg' alt='err' />
                        {/* <RiOpenSourceLine size={150}/> */}
                    </div>
                    <div className='flex flex-col md:gap-2'>
                        <div className='md:text-sm text-[10px] font-bold'>
                            Free Swags
                        </div>
                        <div className='md:text-sm text-[8px] h-1/3 text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </div>
                    </div>
                </div>

                <div className='max-w-60 h-fit p-1 text-center'>
                    <div className=' h-1/2 flex justify-center'>
                        <img className='mix-blend-multiply w-1/2 h-1/2' src='data:image/jpeg;base64,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' alt='err' />
                        {/* <RiOpenSourceLine size={150}/> */}
                    </div>
                    <div className='flex flex-col md:gap-2'>
                        <div className='md:text-sm text-[10px] font-bold'>
                            Build your own brand
                        </div>
                        <div className='md:text-sm text-[8px] h-1/3 text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around px-20'>
            <div className='max-w-60 h-fit p-1 text-center'>
                    <div className=' h-1/2 flex justify-center'>
                        <img className='w-1/2 h-1/2' src='https://cdn3d.iconscout.com/3d/premium/thumb/collaboration-6902377-5660870.png?f=webp' alt='err' />
                        {/* <RiOpenSourceLine size={150}/> */}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-sm font-bold'>
                        Collaborate with other OSS enthusiasts
                        </div>
                        <div className='text-xs h-1/3 text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </div>
                    </div>
                </div>


                <div className='max-w-60 h-fit p-1 text-center'>
                    <div className=' h-1/2 flex justify-center'>
                        <img className='mix-blend-multiply w-1/2 h-1/2' src='https://img.freepik.com/premium-psd/laptop-3d-icon-freelance_431668-1455.jpg' alt='err' />
                        {/* <RiOpenSourceLine size={150}/> */}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-sm font-bold'>
                        Exclusive workshops
                        </div>
                        <div className='text-xs h-1/3 text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatYouGet