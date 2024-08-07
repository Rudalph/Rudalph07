import React from 'react'
import Image from 'next/image'

const All_Certifications = () => {
    return (
        <div className='mt-10'>
            <div className="flex items-center lg:px-14 px-5">
                <div className="text-sm lg:text-2xl text-white font-bold ">CERTIFICATES</div>
                <div className="flex-grow border-t border-white mr-4 ml-4"></div>
            </div>
            <div className='mt-5 px-5 lg:p-5 lg:px-10 flex justify-center align-middle items-center'>
                <div className="carousel w-full ">
                    <div id="slide1" className="carousel-item relative w-full flex justify-center align-middle items-center">
                        <Image
                            src="/JPMC-Certificate.jpg"
                            className=""
                            height={500}
                            width={700} 
                        />
                       
                    </div>
                    <div id="slide2" className="carousel-item relative w-full flex justify-center align-middle items-center">
                    <Image
                            src="/vpn-certificate.jpg"
                            className=""
                            height={500}
                            width={700} 
                        />
                    </div>
                    <div id="slide2" className="carousel-item relative w-full flex justify-center align-middle items-center">
                    <Image
                            src="/flask-certificate.jpg"
                            className=""
                            height={500}
                            width={700} 
                        />
                    </div>
                    <div id="slide2" className="carousel-item relative w-full flex justify-center align-middle items-center">
                    <Image
                            src="/flutter-certificate.jpg"
                            className=""
                            height={500}
                            width={700} 
                        />
                    </div>
                    <div id="slide2" className="carousel-item relative w-full flex justify-center align-middle items-center">
                    <Image
                            src="/devtown-certificate.jpg"
                            className=""
                            height={500}
                            width={700} 
                        />
                    </div>
                    <div id="slide2" className="carousel-item relative w-full flex justify-center align-middle items-center">
                    <Image
                            src="/gdsc-associate-certificate.jpg"
                            className=""
                            height={500}
                            width={700} 
                        />
                    </div>
                    <div id="slide2" className="carousel-item relative w-full flex justify-center align-middle items-center">
                    <Image
                            src="/az-lead-certificate.jpg"
                            className=""
                            height={500}
                            width={700} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default All_Certifications