import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
export default function Product(){
    return(
        <div>
            <div className="bg-gray-100 min-h-screen">

    
      <section className="container mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
        
          <div>
             <Image
                src="/Pictures/Image-32.png"
                alt="Dandy Chair"
                className="w-full rounded-lg mb-4"
                width={300}
                height={300}
              />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-black">Library Stool Chair</h2>
            <p className="text-xl text-green-600 font-semibold">$20.00 USD</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <a href="/Cart">
            <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-blue-600" >
              Add To Cart
            </button></a>
          </div>
        </div>
        
        <section className="py-10 px-10">
        <h2 className="text-2xl font-bold text-center mb-8 text-black">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center">
            <Image
               src="/Pictures/Image-29.png"
               alt="Dandy Chair"
               className="w-full rounded-lg mb-4"
               width={300}
               height={300}
             />
            <h3 className="font-bold text-black">Library Stood Chair</h3>
            <p className="text-black">$99.00</p>
          </div>
          <div className="text-center">
            <Image
               src="/Pictures/Image-31.png"
               alt="Dandy Chair"
               className="w-full rounded-lg mb-4"
               width={300}
               height={300}
             />
            <h3 className="font-bold text-black">The Wooden Chair</h3>
            <p className="text-black">$99.00</p>
          </div>
          <div className="text-center">
             <Image
                src="/Pictures/Image-30.png"
                alt="Dandy Chair"
                className="w-full rounded-lg mb-4"
                width={300}
                height={300}
              />
            <h3 className="font-bold text-black">Library Stood Chair</h3>
            <p className="text-black">$99.00</p>
          </div>
          <div className="text-center">
             <Image
                src="/Pictures/Image-28.png"
                alt="Dandy Chair"
                className="w-full rounded-lg mb-4"
                width={300}
                height={300}
              />
            <h3 className="font-bold text-black">The Wooden Chair</h3>
            <p className="text-black">$99.00</p>
          </div>
        </div>
      </section>
      </section>

      <Footer/>
    </div>
        </div>
    )
}