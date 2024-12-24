import Image from 'next/image'
export default function NavBar() {
return(
<header className="bg-white shadow py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src='/Pictures/Logo Icon-6.png'
              alt="Logo"
              width={50}
              height={100}
            />
           <a href="/Home" className="ml-3 text-xl font-bold text-black">
           Comforty
          </a>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/Home" className="text-gray-600 hover:text-teal-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/ProductPage" className="text-gray-600 hover:text-teal-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="/SingleProduct" className="text-gray-600 hover:text-teal-500">
                  Product
                </a>
              </li>
              <li>
                <a href="/Contact" className="text-gray-600 hover:text-teal-500">
                  Contact
                </a>
              </li>
              <a href="/About" className="text-gray-600 hover:text-teal-500"> About</a>
            </ul>
          </nav>
          <a href="/Cart" className="bg-teal-500 text-white px-4 py-2 rounded">Cart</a>
        </div>
      </header>)}