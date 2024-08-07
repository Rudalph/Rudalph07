import React from 'react'
import Image from 'next/image'

const Bento = () => {
    return (
        <div className='mt-10'>
            <div className="flex items-center lg:px-14 px-5">
                <div className="text-sm lg:text-2xl text-white font-bold ">ACHIVEMENTS</div>
                <div className="flex-grow border-t border-white mr-4 ml-4"></div>
            </div>
            <div className="flex h-full w-full items-center justify-center p-10">
                <div className="grid h-full w-full gap-4  p-2 grid-cols-10 grid-rows-10 rounded-lg shadow-md">

                    <div
                        className="col-span-5 row-span-5 rounded-lg shadow-md flex items-center justify-center"
                    >
                        <Image
                          className='rounded-xl'
                          src="/achivements-img-1.jpg"
                          height={200}
                          width={500}
                        />
                    </div>

                    <div
                        className="col-span-5 row-span-5 rounded-lg shadow-md flex items-center justify-center"
                    >
                       <Image
                          className='rounded-xl'
                          src="/achivements-img-5.jpg"
                          height={300}
                          width={500}
                        />
                    </div>

                    <div
                        className="col-span-5 row-span-5 rounded-lg shadow-md flex items-center justify-center"
                    >
                        <Image
                          className='rounded-xl'
                          src="/achivements-img-4.jpg"
                          height={300}
                          width={500}
                        />
                    </div>

                    <div
                        className="col-span-5 row-span-5 rounded-lg shadow-md flex items-center justify-center"
                    >
                        <Image
                          className='rounded-xl'
                          src="/achivements-img-2.jpg"
                          height={300}
                          width={500}
                        />
                    </div>

                    <div
                        className="col-span-5 row-span-5 rounded-lg shadow-md flex items-center justify-center"
                    >
                         <Image
                          className='rounded-xl'
                          src="/achivements-img-6.jpg"
                          height={300}
                          width={500}
                        />
                    </div>

                    <div
                        className="col-span-5 row-span-5 rounded-lg shadow-md flex items-center justify-center"
                    >
                        <Image
                          className='rounded-xl'
                          src="/achivements-img-7.jpg"
                          height={300}
                          width={500}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Bento