'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'

const Contact = () => {
    return (
        <div className='mt-10'>
            <div className="flex items-center lg:px-14 px-5">
                <div className="text-sm lg:text-2xl text-white font-bold">CONNECT WITH ME</div>
                <div className="flex-grow border-t border-white mr-4 ml-4"></div>
            </div>
            <div>
                <section>
                    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                           
                            <h2 className="text-center text-2xl font-bold leading-tight text-white">
                                Let&apos;s Connect
                            </h2>
                            <form action="https://formspree.io/f/xblrydrw" method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-white">
                                            {' '}
                                            Name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                required
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="" className="text-base font-medium text-white">
                                            {' '}
                                            Email{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                required
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="" className="text-base font-medium text-white">
                                                {' '}
                                                Subject{' '}
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Subject"
                                                name="subject"
                                                required
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white flex items-center justify-between">
                                            <label htmlFor="" className="text-base font-medium text-white">
                                                {' '}
                                                Message{' '}
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <textarea
                                                className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text area"
                                                placeholder="Message"
                                                name='message'
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black"
                                        >
                                            Submit <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact