import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Card = () => {
    return (
        <div class="p-5 flex items-center justify-between flex-col">
            <div class="w-1/2">
                <img src="https://cdn.geekwire.com/wp-content/uploads/2021/11/leadership-nat.jpg" alt="err" class="w-full" />
                <div class="bg-[#20C788] w-full px-4 py-2 text-white">
                    <div className='text-xl font-medium'>
                        Charles Hoskinson
                    </div>
                    <div className='text-sm text-black'>
                        Founder of Cardano
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Card