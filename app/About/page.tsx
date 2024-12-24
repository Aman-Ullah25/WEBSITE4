import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";


export default function About() {
  return (
    
      <div className="bg-gray-100 min-h-screen">
     
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-16">
        <div className="bg-teal-600 text-white p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">About Us - Comforty</h1>
          <p className="text-lg mb-6">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <a href="/ProductPage">
          <button className="bg-white text-teal-600 px-4 py-2 rounded hover:bg-gray-100">
            View collection
          </button></a>
        </div>
        <div>
          <Image
           src="/Pictures/Image-32.png"
           alt="Dandy Chair"
           className="w-full rounded-lg mb-4"
           width={300}
           height={300}
          />
        </div>
      </section>

     
      <section className="text-center py-10 border-black">
        <h2 className="text-2xl font-bold mb-8 text-black">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10">
          <div className="p-6 border rounded-lg hover:shadow-lg border-black">
            <h3 className="text-lg font-bold mb-2 text-black">Next day as standard</h3>
            <p className="text-black">Order before 2pm and get your order the next day as standard</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg border-black">
            <h3 className="text-lg font-bold mb-2 text-black">Made by true artisans</h3>
            <p className="text-black">Handmade crafted goods made with real passion and craftsmanship</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg border-black">
            <h3 className="text-lg font-bold mb-2 text-black">Unbeatable prices</h3>
            <p className="text-black">For our materials and quality you won't find better prices</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg border-black">
            <h3 className="text-lg font-bold mb-2 text-black">Recycled packaging</h3>
            <p className="text-black">We use 100% recycled to ensure our footprint is manageable</p>
          </div>
        </div>
      </section>

      
      <section className="py-10 px-10">
        <h2 className="text-2xl font-bold text-center mb-8 text-black">Our Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
        <div>
          <Image
            src="/Pictures/Image-32.png"
            alt="Dandy Chair"
            className="w-full rounded-lg mb-4"
            width={300}
            height={300}
          />
        </div>
            
            <h3 className="font-bold text-black">The Dandy Chair 2</h3>
            <p className="text-black">$99.00</p>
          </div>
          <div className="text-center">
          <div>
          <Image
            src="/Pictures/Image-32.png"
            alt="Dandy Chair"
            className="w-full rounded-lg mb-4"
            width={300}
            height={300}
          />
        </div>
            <h3 className="font-bold text-black">The Poplar Suede Sofa</h3>
            <p className="text-black">$99.00</p>
          </div>
          <div className="text-center">
          <div>
          <Image
           src="/Pictures/Image-32.png"
           alt="Dandy Chair"
           className="w-full rounded-lg mb-4"
           width={300}
           height={300}
          />
        </div>
            <h3 className="font-bold text-black">The Wooden Chair</h3>
            <p className="text-black">$99.00</p>
          </div>
        </div>
      </section>

      <Footer/>
     <div>
    </div>
    </div>

  );
}
