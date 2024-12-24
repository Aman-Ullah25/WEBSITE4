// pages/index.js
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    
    <div className="bg-gray-100">
   
   <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Best Furniture Collection For Your Interior.
          </h2>
          <p className="mt-4 text-gray-600">
            Welcome to Chairy! Find the perfect furniture to enhance your home.
          </p>
          <a href="/ProductPage">
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-md shadow-lg hover:bg-teal-600">
          Shop Now
          </button></a>
        </div>

      
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
         <Image
             src="/Pictures/Product Image.png"
             alt="Dandy Chair"
             width={500}
             height={500}
             className="w-full rounded-lg mb-4"
           />
        </div>
      </div>
    </div>
 
<section><h1 className="text-2xl font-bold mb-4 text-center text-black">FEATURED PRODUCT</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-4 rounded-lg shadow flex flex-col items-center " >
        <div className="text-center relative">
          
  <Image
      src="/Pictures/Image-32.png"
      alt="Dandy Chair"
      width={500}
      height={500}
      className="w-full rounded-lg mb-4"
    />
  <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
    {"20% off"}
  </span>
  <h3 className="font-bold text-black">Library Stood Chair</h3>
  <p className="text-black">$99.00</p>
      </div>
        <div className="text-center relative">
   <Image
       src="/Pictures/Image-30.png"
       alt="Dandy Chair"
       width={500}
       height={500}
       className="w-full rounded-lg mb-4"
     />
  <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
    {"20% off"}
  </span>
  <h3 className="font-bold text-black">Library Stood Chair</h3>
  <p className="text-black">$99.00</p>
      </div>
        <div className="text-center relative">
  <Image
      src="/Pictures/Image-34.png"
      alt="Dandy Chair"
      width={500}
      height={500}
      className="w-full rounded-lg mb-4"
    />
  <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
    {"20% off"}
  </span>
  <h3 className="font-bold text-black">Library Stood Chair</h3>
  <p className="text-black">$99.00</p>
      </div>
        <div className="text-center relative">
   <Image
       src="/Pictures/Image-33.png"
       alt="Dandy Chair"
       width={500}
       height={500}
       className="w-full rounded-lg mb-4"
     />
  <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
    {"20% off"}
  </span>
  <h3 className="font-bold text-black">Library Stood Chair</h3>
  <p className="text-black">$99.00</p>
      
      </div>
      
      </div>
</section>

  
      <section className="container mx-auto py-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-black">TOP CATOGRIES</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-4 rounded-lg shadow flex flex-col items-center">
        <div className="text-center relative">
   <Image
       src="/Pictures/Image-26.png"
       alt="Dandy Chair"
       width={500}
       height={500}
       className="w-full rounded-lg mb-4"
     />
  <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
    {"20% off"}
  </span>
  <h3 className="font-bold text-black">Library Stood Chair</h3>
  <p className="text-black">$99.00</p>
      </div>
        <div className="text-center relative">
  <Image
      src="/Pictures/Image-27.png"
      alt="Dandy Chair"
      width={500}
      height={500}
      className="w-full rounded-lg mb-4"
    />
  <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
    {"20% off"}
  </span>
  <h3 className="font-bold text-black">Library Stood Chair</h3>
  <p className="text-black">$99.00</p>
      </div>
        <div className="text-center relative">
   <Image
       src="/Pictures/Image-29.png"
       alt="Dandy Chair"
       width={500}
       height={500}
       className="w-full rounded-lg mb-4"
     />
  <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
    {"20% off"}
  </span>
  <h3 className="font-bold text-black">Library Stood Chair</h3>
  <p className="text-black">$99.00</p>
      </div>
        <div className="text-center relative">
   <Image
       src="/Pictures/Image-31.png"
       alt="Dandy Chair"
       width={500}
       height={500}
       className="w-full rounded-lg mb-4"
     />
  <span className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs font-semibold rounded">
    {"20% off"}
  </span>
  <h3 className="font-bold text-black">Library Stood Chair</h3>
  <p className="text-black">$99.00</p>
      
      </div>
      
      </div>
      </section>
      <div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
