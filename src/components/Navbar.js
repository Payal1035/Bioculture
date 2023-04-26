import React, {useState} from 'react'
import logo from './images/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (

      
<nav className=" dark:bg-gray-900 w-full z-20 top-0 left-0 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-[1.8px] md:py-4">
  <a href="#" className="flex items-center">
      <img src={logo} className="md:h-16 mr-3 h-12" alt="" />
     
  </a>
  <div className="flex md:order-2">
      <button type="button" className="text-white hidden md:block bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</button>
      <button
         onClick={() => setIsOpen(!isOpen)}
         className="md:hidden flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
  </div>
  <div className= {`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${isOpen ? "hidden" : "block"}`} id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-white md:bg-transparent border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-green-500 md:bg-transparent rounded  md:px-2 md:text-lg" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 md:text-white text-gray-900 md:hover:bg-transparent hover:bg-green-500 hover:text-white rounded md:px-2 md:text-lg">Product</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 md:text-white text-gray-900 md:hover:bg-transparent hover:bg-green-500 hover:text-white rounded  md:px-2 md:text-lg">About Us</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 md:text-white text-gray-900 md:hover:bg-transparent hover:bg-green-500 hover:text-white rounded md:px-2 md:text-lg">Support</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 md:text-white text-gray-900 md:hover:bg-transparent hover:bg-green-500 hover:text-white rounded md:px-2 md:text-lg">Blog</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

    
  )
}

export default Navbar
