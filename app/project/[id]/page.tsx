"use client"

import React from 'react'


const iconLists = ["/re.svg", "/tail.svg", "/re.svg", "/tail.svg", "/re.svg", "/tail.svg"]

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <div className='w-screen'>
            <div className='w-screen h-screen bg-white bg-dot-black/[0.2] flex flex-col  px-20 space-y-4 items-start'>
                <div className='w-full h-1/2'>

                    <img
                        src='/img-2.jpg'
                        alt='project image'
                        className="w-screen h-[34rem] object-cover rounded-b-xl"
                    />
                </div>
                <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 absolute right-24 top-[29.5rem] active:shadow-none active:translate-x-1 active:translate-y-1">
VIEW CODE
</button>
                <div className='flex justify-between items-center w-full'> <h1 className='text-8xl text-neutral-700 font-light'>PROJECT NAME</h1>
                    <div className='flex items-center justify-center '>
                        {iconLists.map((icon, index) => (
                            <div
                                key={index}
                                className="border border-white/[.1] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"

                            >
                                <img src={icon} alt={`icon${index}`} />
                            </div>
                        ))}
                    </div></div>

                     {/* <div className='flex flex-col  w-full'>         <p className='text-base text-neutral-500'>2020</p>
                    <p className='text-base text-neutral-500'>Backend Engineer</p></div> */}

            </div>

        </div>
    )
}

export default Page
