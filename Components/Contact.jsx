// 'use client'
// import React from 'react'
// import { ArrowRight } from 'lucide-react'

// const Contact = () => {
//     return (
//         <div className='mt-10'>
//             <div className="flex items-center lg:px-14 px-5">
//                 <div className="text-sm lg:text-2xl text-white font-bold">CONNECT WITH ME</div>
//                 <div className="flex-grow border-t border-white mr-4 ml-4"></div>
//             </div>
//             <div>
//                 <section>
//                     <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
//                         <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                           
//                             <h2 className="text-center text-2xl font-bold leading-tight text-white">
//                                 Let&apos;s Connect
//                             </h2>
//                             <form action="https://formspree.io/f/xblrydrw" method="POST" className="mt-8">
//                                 <div className="space-y-5">
//                                     <div>
//                                         <label htmlFor="" className="text-base font-medium text-white">
//                                             {' '}
//                                             Name{' '}
//                                         </label>
//                                         <div className="mt-2">
//                                             <input
//                                                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 text-white"
//                                                 type="text"
//                                                 placeholder="Name"
//                                                 name="name"
//                                                 required
//                                             ></input>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <label htmlFor="" className="text-base font-medium text-white">
//                                             {' '}
//                                             Email{' '}
//                                         </label>
//                                         <div className="mt-2">
//                                             <input
//                                                 className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                                                 type="email"
//                                                 placeholder="Email"
//                                                 name="email"
//                                                 required
//                                             ></input>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className="flex items-center justify-between">
//                                             <label htmlFor="" className="text-base font-medium text-white">
//                                                 {' '}
//                                                 Subject{' '}
//                                             </label>
//                                         </div>
//                                         <div className="mt-2">
//                                             <input
//                                                 className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                                                 type="text"
//                                                 placeholder="Subject"
//                                                 name="subject"
//                                                 required
//                                             ></input>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className="text-white flex items-center justify-between">
//                                             <label htmlFor="" className="text-base font-medium text-white">
//                                                 {' '}
//                                                 Message{' '}
//                                             </label>
//                                         </div>
//                                         <div className="mt-2">
//                                             <textarea
//                                                 className="text-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                                                 type="text area"
//                                                 placeholder="Message"
//                                                 name='message'
//                                                 required
//                                             ></textarea>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <button
//                                             type="submit"
//                                             className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black"
//                                         >
//                                             Submit <ArrowRight className="ml-2" size={16} />
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form>
                            
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     )
// }

// export default Contact


'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'

const accent = "#3B82F6"; // theme blue
const charcoal = "#21242B";

const Contact = () => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading line */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">Connect With Me</h2>
          <div className="flex-grow border-t border-[#e8ecf7]"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-md border border-[#e8ecf7] p-8 flex flex-col h-full">
            <h3 className="text-xl font-bold text-[#21242B] mb-6 text-center">Let's Connect</h3>
            <form action="https://formspree.io/f/xblrydrw" method="POST" className="space-y-5 flex-1">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-[#21242B] mb-1">
                  Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="block w-full rounded-md border border-[#e8ecf7] px-4 py-3 text-sm bg-white text-[#21242B] placeholder:text-[#7A89A1] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 shadow transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-medium text-[#21242B] mb-1">
                  Email
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="block w-full rounded-md border border-[#e8ecf7] px-4 py-3 text-sm bg-white text-[#21242B] placeholder:text-[#7A89A1] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 shadow transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-base font-medium text-[#21242B] mb-1">
                  Subject
                </label>
                <input
                  name="subject"
                  required
                  type="text"
                  className="block w-full rounded-md border border-[#e8ecf7] px-4 py-3 text-sm bg-white text-[#21242B] placeholder:text-[#7A89A1] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 shadow transition"
                  placeholder="Subject"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="message" className="block text-base font-medium text-[#21242B] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="block w-full rounded-md border border-[#e8ecf7] px-4 py-3 text-sm bg-white text-[#21242B] placeholder:text-[#7A89A1] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 shadow transition resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#3B82F6] px-3.5 py-3 font-semibold leading-7 text-white hover:bg-[#20418A] shadow transition"
              >
                Submit <ArrowRight className="ml-2" size={16} />
              </button>
            </form>
            {/* Optional: direct mail link */}
            <div className="text-center mt-4">
              <a href="mailto:gonsalvesrudalph@gmail.com" className="text-sm text-[#3B82F6] hover:underline">
                Or mail me directly
              </a>
            </div>
          </div>
          {/* Map section - Same height as form */}
          <div className="bg-white rounded-2xl shadow-md border border-[#e8ecf7] overflow-hidden h-full min-h-[600px]">
            {/* Dublin, Ireland map */}
            <iframe
              title="Dublin, Ireland Location"
              src="https://maps.google.com/maps?q=Dublin,%20Ireland&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
