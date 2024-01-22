import React from "react";
import Navbar from "../components/Navbar";
import blogHead from '../assets/blogHead.png'
import Image from "next/image";
import blogImg from '../assets/blogimg.png'

const blogs = () => {
    return (
        <div>
            <div className="bg-[#FCF7EF] h-fit pt-20 pb-10 flex justify-center items-center flex-col gap-3">
                <div className="flex flex-col text-center gap-4">
                    <span className="text-5xl font-inika">
                        Our Blogs
                    </span>
                    <span className="md:px-64 px-5 md:text-sm text-xs text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae maiores cumque sit asperiores, repellendus, quos perferendis totam voluptate voluptas mollitia
                    </span>
                </div>

                <div>
                    <Image className="rounded-xl" src={blogHead} alt="err" />
                </div>

                <div className="text-start w-full md:px-32 px-5">
                    <div className="font-medium text-xl">
                        Collaboration to Develop Coffee and Beverage Industry Expertise in Indonesia
                    </div>

                    <div className="md:text-base text-sm">
                        4 Min &#8226; August 19, 2022
                    </div>
                </div>

            </div>

            <div className="py-10 flex flex-col gap-10 ">
                <div className="flex md:px-40 px-5 gap-4 ">
                    <div>
                        <Image src={blogImg} alt="err" />
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="md:text-4xl font-medium">
                            Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java
                        </div>
                        <div className="text-sm md:text-base">
                            4 Min &#8226; August 19, 2022
                        </div>
                    </div>
                </div>

                <div className="flex md:px-40 px-5 gap-4">
                    <div>
                        <Image src={blogImg} alt="err" />
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="md:text-4xl font-medium">
                            Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java
                        </div>
                        <div className="text-sm md:text-base">
                            4 Min &#8226; August 19, 2022
                        </div>
                    </div>
                </div>

                <div className="flex md:px-40 px-5 gap-4">
                    <div>
                        <Image src={blogImg} alt="err" />
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="md:text-4xl font-medium">
                            Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java
                        </div>
                        <div className="text-sm md:text-base">
                            4 Min &#8226; August 19, 2022
                        </div>
                    </div>
                </div>

                <div className="flex md:px-40 px-5 gap-4">
                    <div>
                        <Image src={blogImg} alt="err" />
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="md:text-4xl font-medium">
                            Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java
                        </div>
                        <div className="text-sm md:text-base">
                            4 Min &#8226; August 19, 2022
                        </div>
                    </div>
                </div>

                <div className="flex md:px-40 px-5 gap-4">
                    <div>
                        <Image src={blogImg} alt="err" />
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="md:text-4xl font-medium">
                            Visited Doesoen Sirap Coffee, The Producer of Robusta in Central Java
                        </div>
                        <div className="text-sm md:text-base">
                            4 Min &#8226; August 19, 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default blogs;
