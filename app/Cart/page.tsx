import Footer from '@/components/Footer';
import React from 'react';
import Image from 'next/image';

export default function ShoppingCart(){
    return(
        <div className="bg-gray-100 min-h-screen">
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold mb-4 text-black">Bag</h1>
          <div className="space-y-6">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src="/Pictures/Image-32.png"
                  alt="Library Stool Chair"
                  className="w-20 h-20 object-cover rounded-md"
                  width={500}
                  height={500}
                />
                <div>
                  <h2 className="font-medium text-lg text-black ">Library Stool Chair</h2>
                  <p className="text-sm text-gray-500">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-sm text-gray-500">Size: L</p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-700">$99</p>
            </div>

            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src="/Pictures/Image-34.png"
                  alt="Library Stool Chair"
                  className="w-20 h-20 object-cover rounded-md"
                  width={500}
                  height={500}
                />
                <div>
                  <h2 className="font-medium text-lg text-black">Library Stool Chair</h2>
                  <p className="text-sm text-gray-500">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-sm text-gray-500">Size: L</p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-700">$99</p>
            </div>
          </div>

          <div className="border-t mt-6 pt-4">
            <div className="flex justify-between text-lg text-black">
              <span>Subtotal</span>
              <span>$198.00</span>
            </div>
            <div className="flex justify-between text-lg text-black">
              <span>Estimated Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-xl font-bold mt-4 text-black">
              <span>Total</span>
              <span>$198.00</span>
            </div>
            <button className="w-full bg-teal-600 text-white font-medium py-3 mt-4 rounded-md">
              Member Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
    )
}
 


