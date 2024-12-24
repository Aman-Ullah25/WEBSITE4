import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
export default function Contact(){
    return(
     <div className="bg-gray-100 min-h-screen">
    
     <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-black">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-12">
          For more information about our products & services, feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
            <Image src="/Pictures/loc.png" alt="" height={50} width={50}/>
              <span className="text-blue-500 text-xl"></span>
              <p className="text-gray-700">
                Address: 236 5th St. Avenue, New York NY10000, United States
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Image src="/Pictures/phone.png" alt="" height={50} width={50}/>
              <span className="text-blue-500 text-xl"></span>
              <p className="text-gray-700">
                Phone: Mobile: (+84) 546-6789 <br /> Hotline: (+84) 456-6789
              </p>
            </div>

            <div className="flex items-center gap-4">
            <Image src="/Pictures/home.png" alt="" height={50} width={50}/>
              <span className="text-blue-500 text-xl"></span>
              <p className="text-gray-700">
              Working Time: <br /> Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded shadow-md border border-teal-500 " >
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Abc"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Abc@def.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="This is optional"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
        </div>
    )
}