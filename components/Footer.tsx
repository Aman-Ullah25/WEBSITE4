import Image from 'next/image';


export default function Footer(){
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 lg:px-20 flex flex-wrap justify-between">
        
        {/* Logo and About */}
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src='/Pictures/Logo Icon-6.png'
              alt="Logo"
              className="w-10 h-10"
              width={200}
              height={200}
            />
           <a href="/Home" className="ml-3 text-xl font-bold text-black">
           Comforty
          </a>
          </div>
        </div>
<br />
        {/* Category Links */}
        <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4 text-black">Category</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-teal-500 hover:underline">Sofa</li>
            <li className="hover:text-teal-500 hover:underline">Armchair</li>
            <li className="hover:text-teal-500 hover:underline">Wing Chair</li>
            <li className="hover:text-teal-500 hover:underline">Desk Chair</li>
            <li className="hover:text-teal-500 hover:underline">Wooden Chair</li>
            <li className="hover:text-teal-500 hover:underline">Park Bench</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="w-full lg:w-1/5 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4 text-black">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-teal-500 hover:underline">Help & Support</li>
            <li className="hover:text-teal-500 hover:underline">Terms & Conditions</li>
            <li className="hover:text-teal-500 hover:underline">Privacy Policy</li>
            <li className="hover:text-teal-500 hover:underline">Help</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full lg:w-1/4">
          <h4 className="text-lg font-semibold mb-4 text-black">Newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 border border-gray-300 rounded-l-md w-full"
              required
            />
            <button
              type="submit"
              className="bg-teal-500 text-white p-3 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-300 pt-6 mt-10">
        <p className="text-gray-500">
          @ 2024 - Blogy - Designed & Developed by <a href="https://github.com/Aman-Ullah25" className="text-teal-500 hover:underline">Aman Ullah Qureshi</a>
        </p>
      </div>
    </footer>
  );
}

