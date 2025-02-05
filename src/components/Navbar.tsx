"use client";
import React, { useState } from "react";
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 shadow-md">
      {/* Top Navbar Section */}
      <div className="flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="/Logo Icon.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-lg font-bold">Comforty</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Clerk Sign In Button for Mobile */}
          <SignedOut>
            <SignInButton />
          </SignedOut>

          {/* Cart Icon */}
          <Link href="/cart" className="text-2xl text-green-400 hover:text-green-500 transition-all duration-300">
            <AiOutlineShoppingCart />
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="text-2xl md:hidden" onClick={() => setIsMobileMenuOpen((prev) => !prev)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Clerk UserButton for Desktop */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:flex flex-col md:flex-row justify-between items-center py-4 px-4 bg-gray-200`}>
        <div className="flex flex-col md:flex-row md:gap-8 w-full">
          <Link href="/" className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">Home</Link>
          <Link href="/AboutUs" className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">About</Link>
          <Link href="/Producte" className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">Product</Link>
          <Link href="/Contact" className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// "use client";
// import React, { useState } from "react";
// import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import { AiOutlineShoppingCart } from "react-icons/ai";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-gray-100 shadow-md">
//       {/* Top Navbar Section */}
//       <div className="flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Logo" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Cart Icon */}
//           <Link href="/cart" className="text-2xl text-green-400 hover:text-green-500 transition-all duration-300 md:hidden">
//             <AiOutlineShoppingCart />
//           </Link>

//           {/* Mobile Menu Toggle */}
//           <button className="text-2xl md:hidden" onClick={() => setIsMobileMenuOpen((prev) => !prev)} aria-label="Toggle Menu">
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>

//           {/* Clerk Sign In Button for Mobile */}
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>

//           {/* Clerk UserButton for Desktop */}
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:flex flex-col md:flex-row justify-between items-center py-4 px-4 bg-gray-200`}>
//         <div className="flex flex-col md:flex-row md:gap-8 w-full">
//           <Link href="/" className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">Home</Link>
//           <Link href="/AboutUs" className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">About</Link>
//           <Link href="/Producte" className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">Product</Link>
//           <Link href="/Contact" className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">Contact</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import { AiOutlineShoppingCart } from "react-icons/ai"; 

// // Login Page Modal Component
// const LoginPage = ({ onClose }: { onClose: () => void }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-auto relative"
//     >
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h2>
//       <p className="text-gray-600 mb-6">Please enter your details to log in.</p>
//       <form className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email address"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <div className="flex justify-between items-center">
//           <label className="flex items-center">
//             <input type="checkbox" className="mr-2" />
//             <span className="text-gray-600">Remember me</span>
//           </label>
//           <button type="button" className="text-teal-500 hover:underline">
//             Forgot password?
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-all"
//         >
//           Sign In
//         </button>
//       </form>
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
//       >
//         ✕
//       </button>
//     </motion.div>
//   );
// };

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

//   return (
//     <div className="bg-gray-100 shadow-md">
//       {/* Top Navbar Section */}
//       <div className="flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Logo" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Login Button for Mobile */}
//           <button
//             onClick={() => setIsLoginModalOpen(true)}
//             className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 md:hidden"
//           >
//             Login
//           </button>

//           {/* Cart Icon for Mobile */}
//           <Link
//             href="/cart"
//             className="text-2xl text-green-400 hover:text-green-500 transition-all duration-300 md:hidden"
//           >
//             <AiOutlineShoppingCart />
//           </Link>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="text-2xl md:hidden"
//             onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>

//         {/* Right Section for Desktop */}
//         <div className="hidden md:flex items-center gap-4">
//           <button
//             onClick={() => setIsLoginModalOpen(true)}
//             className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300"
//           >
//             Login
//           </button>

//           {/* Cart Link for Desktop */}
//           <Link href="/cart" className="text-2xl text-green-400 hover:text-green-500 transition-all duration-300">
//             <AiOutlineShoppingCart />
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           isMobileMenuOpen ? "block" : "hidden"
//         } md:flex flex-col md:flex-row justify-between items-center py-4 px-4 bg-gray-200`}
//       >
//         <div className="flex flex-col md:flex-row md:gap-8 w-full">
//           <Link
//             href="/"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             href="/AboutUs"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             About
//           </Link>
//           <Link
//             href="/Producte"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Product
//           </Link>
//           <Link
//             href="/Contact"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Contact
//           </Link>

//           {/* Cart Link for Mobile (Inside Navigation Menu) */}
//           <Link
//             href="/cart"
//             className="text-2xl text-green-600 hover:text-green-900 transition-all duration-300 md:hidden flex justify-end mt-2"
//           >
//             <AiOutlineShoppingCart />
//           </Link>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {isLoginModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <LoginPage onClose={() => setIsLoginModalOpen(false)} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FiMenu, FiX, FiShoppingBag } from "react-icons/fi";

// // Login Page Modal Component
// const LoginPage = ({ onClose }: { onClose: () => void }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-auto relative"
//     >
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h2>
//       <p className="text-gray-600 mb-6">Please enter your details to log in.</p>
//       <form className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email address"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <div className="flex justify-between items-center">
//           <label className="flex items-center">
//             <input type="checkbox" className="mr-2" />
//             <span className="text-gray-600">Remember me</span>
//           </label>
//           <button type="button" className="text-teal-500 hover:underline">
//             Forgot password?
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-all"
//         >
//           Sign In
//         </button>
//       </form>
//       <div className="mt-6">
//         <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
//           <img src="/google.png" alt="Google" className="w-5 h-5" />
//           Sign in with Google
//         </button>
//         <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg mt-2 hover:bg-gray-100">
//           <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
//           Sign in with Facebook
//         </button>
//       </div>
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
//       >
//         ✕
//       </button>
//     </motion.div>
//   );
// };

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

//   return (
//     <div className="bg-gray-100 shadow-md">
//       {/* Top Navbar Section */}
//       <div className="flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Logo" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Login Button for Mobile */}
//           <button
//             onClick={() => setIsLoginModalOpen(true)}
//             className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 md:hidden"
//           >
//             Login
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="text-2xl md:hidden"
//             onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>

//         {/* Right Section for Desktop */}
//         <div className="hidden md:flex items-center gap-4">
//           <button
//             onClick={() => setIsLoginModalOpen(true)}
//             className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300"
//           >
//             Login
//           </button>
//           <Link href="/Bag" className="text-2xl text-gray-700 hover:text-blue-500 transition-all duration-300">
//             <FiShoppingBag />
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           isMobileMenuOpen ? "block" : "hidden"
//         } md:flex flex-col md:flex-row justify-between items-center py-4 px-4 bg-gray-200`}
//       >
//         <div className="flex flex-col md:flex-row md:gap-8 w-full">
//           <Link
//             href="/"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             href="/AboutUs"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             About
//           </Link>
//           <Link
//             href="/Producte"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Product
//           </Link>
//           <Link
//             href="/Contact"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {isLoginModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <LoginPage onClose={() => setIsLoginModalOpen(false)} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;

















































// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FiMenu, FiX, FiShoppingBag } from "react-icons/fi";

// // Login Page Modal Component
// const LoginPage = ({ onClose }: { onClose: () => void }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-auto relative"
//     >
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h2>
//       <p className="text-gray-600 mb-6">Please enter your details to log in.</p>
//       <form className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email address"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <div className="flex justify-between items-center">
//           <label className="flex items-center">
//             <input type="checkbox" className="mr-2" />
//             <span className="text-gray-600">Remember me</span>
//           </label>
//           <button type="button" className="text-teal-500 hover:underline">
//             Forgot password?
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-all"
//         >
//           Sign In
//         </button>
//       </form>
//       <div className="mt-6">
//         <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
//           <img src="/google.png" alt="Google" className="w-5 h-5" />
//           Sign in with Google
//         </button>
//         <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg mt-2 hover:bg-gray-100">
//           <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
//           Sign in with Facebook
//         </button>
//       </div>
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
//       >
//         ✕
//       </button>
//     </motion.div>
//   );
// };

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal

//   return (
//     <div className="bg-gray-100 shadow-md">
//       {/* Top Navbar Section */}
//       <div className="flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Logo" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="text-2xl md:hidden"
//           onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//           aria-label="Toggle Menu"
//         >
//           {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Right Section */}
//         <div className="hidden md:flex items-center gap-4">
//           {/* Login Button */}
//           <button
//             onClick={() => setIsLoginModalOpen(true)}
//             className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300"
//           >
//             Login
//           </button>

//           {/* Bag Icon */}
//           <Link href="/Bag" className="text-2xl text-gray-700 hover:text-blue-500 transition-all duration-300">
//             <FiShoppingBag />
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           isMobileMenuOpen ? "block" : "hidden"
//         } md:flex flex-col md:flex-row justify-between items-center py-4 px-4 bg-gray-200`}
//       >
//         <div className="flex flex-col md:flex-row md:gap-8 w-full">
//           <Link
//             href="/"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             href="/AboutUs"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             About
//           </Link>
//           {/* Product Link with Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <button className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">
//             <Link
//             href="/Producte"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Product
//           </Link>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
//                 <ul className="py-2">
//                   <li>
//                     <Link
//                       href="/Producte/sofas"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Sofas
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/chairs"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Chairs
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/tables"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Tables
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/beds"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Beds
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <Link
//             href="/Contact"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {isLoginModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <LoginPage onClose={() => setIsLoginModalOpen(false)} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX, FiShoppingBag } from "react-icons/fi"; // Icons for responsiveness and interactivity

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-gray-100 shadow-md">
//       {/* Top Navbar Section */}
//       <div className="flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="text-2xl md:hidden"
//           onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//           aria-label="Toggle Menu"
//         >
//           {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Right Section */}
//         <div className="hidden md:flex items-center gap-4">
//           {/* Sign In Button */}
//           <Link
//             href="/AboutUs"
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
//           >
//             Sign In
//           </Link>

//           {/* Bag Icon */}
//           <Link href="/Bag" className="text-2xl text-gray-700 hover:text-blue-500 transition-all duration-300">
//             <FiShoppingBag />
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           isMobileMenuOpen ? "block" : "hidden"
//         } md:flex flex-col md:flex-row justify-between items-center py-4 px-4 bg-gray-200`}
//       >
//         <div className="flex flex-col md:flex-row md:gap-8 w-full">
//           <Link
//             href="/"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             href="/AboutUs"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             About
//           </Link>
//           {/* Product Link with Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <button className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300">
//               Product
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
//                 <ul className="py-2">
//                   <li>
//                     <Link
//                       href="/Producte/sofas"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Sofas
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/chairs"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Chairs
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/tables"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Tables
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/beds"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Beds
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <Link
//             href="/Contact"
//             className="py-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { FiSun, FiMoon } from "react-icons/fi"; // Icons for theme toggle

// function Navbar() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Load theme from localStorage
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "dark") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   // Toggle Theme Functionality
//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//     const newTheme = isDarkMode ? "light" : "dark";
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <div className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
//       <div className="flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="text-2xl"
//             aria-label="Toggle Theme"
//           >
//             {isDarkMode ? <FiSun /> : <FiMoon />}
//           </button>

//           {/* Sign In Button */}
//           <Link
//             href="/AboutUs"
//             className="px-4 py-2 bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-all duration-300"
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className="flex flex-wrap justify-between items-center py-4 px-4 text-gray-700 bg-gray-200 dark:bg-gray-800"
//       >
//         <div className="flex flex-wrap gap-8">
//           <Link
//             href="/"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Home
//           </Link>
//           <Link
//             href="/AboutUs"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             About
//           </Link>
//           {/* Product Link with Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <Link
//               href="/Producte"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//             >
//               Product
//             </Link>
//             {isDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
//                 <ul className="py-2">
//                   <li>
//                     <Link
//                       href="/Producte/sofas"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//                     >
//                       Sofas
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/chairs"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//                     >
//                       Chairs
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/tables"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//                     >
//                       Tables
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/Producte/beds"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
//                     >
//                       Beds
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <Link
//             href="/Contact"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Contact
//           </Link>
//           <Link
//             href="/Bag"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Bag
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



















// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { FiSun, FiMoon } from "react-icons/fi"; // Icons for theme toggle

// function Navbar() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Load theme from localStorage
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "dark") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   // Toggle Theme Functionality
//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//     const newTheme = isDarkMode ? "light" : "dark";
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <div className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
//       <div className="flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="text-2xl"
//             aria-label="Toggle Theme"
//           >
//             {isDarkMode ? <FiSun /> : <FiMoon />}
//           </button>

//           {/* Sign In Button */}
//           <Link
//             href="/AboutUs  "
//             className="px-4 py-2 bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-all duration-300"
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div
//         id="BC"
//         className="flex flex-wrap justify-between items-center py-4 px-4 text-gray-700 bg-gray-200 dark:bg-gray-800"
//       >
//         <div id="BD" className="flex flex-wrap gap-8">
//           <Link
//             href="/"
//             id="BE"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Home
//           </Link>
//           <Link
//             href="/AboutUs"
//             id="BF"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             About
//           </Link>
//           <Link
//             href="/Producte"
//             id="BG"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Product
//           </Link>
//           <Link
//             href="/Contact"
//             id="BH"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Contact
//           </Link>
//           <Link
//             href="/Bag"
//             id="BI"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Bag
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { FiSun, FiMoon } from "react-icons/fi"; // Icons for theme toggle

// function Navbar() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Load theme from localStorage
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme === "dark") {
//       setIsDarkMode(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   // Toggle Theme Functionality
//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//     const newTheme = isDarkMode ? "light" : "dark";
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
//     <div className={`bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
//       <div className="flex justify-between items-center p-4">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             className="text-2xl"
//             aria-label="Toggle Theme"
//           >
//             {isDarkMode ? <FiSun /> : <FiMoon />}
//           </button>

//           {/* Sign In Button */}
//           <Link
//             href="/signin"
//             className="px-4 py-2 bg-blue-500 text-white dark:bg-blue-700 dark:text-gray-100 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-800 transition-all duration-300"
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div
//         id="BC"
//         className="flex flex-wrap justify-between items-center py-4 px-4 text-gray-700 bg-gray-200 dark:bg-gray-800"
//       >
//         <div id="BD" className="flex flex-wrap gap-8">
//           <Link
//             href="/Home"
//             id="BE"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Home
//           </Link>
//           <Link
//             href="/AboutUs"
//             id="BF"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             About
//           </Link>
//           <Link
//             href="/Products"
//             id="BG"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Product
//           </Link>
//           <Link
//             href="/Contact"
//             id="BH"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Contact
//           </Link>
//           <Link
//             href="/Bag"
//             id="BI"
//             className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
//           >
//             Bag
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;





// "use client"; // Ensure client-side rendering

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";

// export interface Product {
//   _id: string; // Unique identifier for each product
//   title: string; // Product title
//   description?: string; // Optional field for product description
//   price: number; // Product price
//   image: {
//     asset: {
//       _ref: string; // Reference to the image asset in Sanity
//     };
//   };
//   slug?: {
//     current?: string; // The current slug for dynamic routing
//   };
// }

// function Navbar() {
//   const [products, setProducts] = useState<Product[]>([]); // Holds all products
//   const [searchQuery, setSearchQuery] = useState<string>(""); // Search input
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Holds filtered products
//   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//         setFilteredProducts(fetchedProducts); // Initialize filteredProducts
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products when search query changes
//   useEffect(() => {
//     const results = products.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(results);
//   }, [searchQuery, products]);

//   // Handle Dark/Light Mode Toggle
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       setIsDarkMode(storedTheme === "dark");
//       document.documentElement.classList.toggle("dark", storedTheme === "dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDarkMode ? "light" : "dark";
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <div className={`${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
//       {/* Navbar Container */}
//       <div className="flex justify-between items-center p-4 border-b border-gray-300">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold">Comforty</h1>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 px-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
//               isDarkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white border-gray-300"
//             }`}
//           />
//         </div>

//         {/* Dark/Light Mode Toggle */}
//         <div className="flex items-center">
//           <button
//             onClick={toggleTheme}
//             className={`px-4 py-2 rounded-md font-medium transition ${
//               isDarkMode
//                 ? "bg-gray-700 text-white hover:bg-gray-600"
//                 : "bg-gray-200 text-black hover:bg-gray-300"
//             }`}
//           >
//             {isDarkMode ? "Light Mode" : "Dark Mode"}
//           </button>
//         </div>
//       </div>

//       {/* Filtered Products (Optional Display) */}
//       <div className="container mx-auto py-4">
//         {searchQuery && filteredProducts.length > 0 ? (
//           <ul className="bg-white shadow-md rounded-md p-4">
//             {filteredProducts.map((product, index) => (
//               <li
//                 key={product._id || product.slug?.current || `index-${index}`} // Safely access slug.current
//                 className="p-2 border-b last:border-b-0"
//               >
//                 {product.title}
//               </li>
//             ))}
//           </ul>
//         ) : searchQuery ? (
//           <p className="text-gray-500 text-center">No products found.</p>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Navbar;



// "use client"; // Ensure client-side rendering

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";

// export interface Product {
//   _id: string; // Unique identifier for each product
//   title: string; // Product title
//   description?: string; // Optional field for product description
//   price: number; // Product price
//   image: {
//     asset: {
//       _ref: string; // Reference to the image asset in Sanity
//     };
//   };
//   slug?: {
//     current?: string; // The current slug for dynamic routing
//   };
// }

// function Navbar() {
//   const [products, setProducts] = useState<Product[]>([]); // Holds all products
//   const [searchQuery, setSearchQuery] = useState<string>(""); // Search input
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Holds filtered products

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//         setFilteredProducts(fetchedProducts); // Initialize filteredProducts
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Filter products when search query changes
//   useEffect(() => {
//     const results = products.filter((product) =>
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(results);
//   }, [searchQuery, products]);

//   return (
//     <div>
//       {/* Navbar Container */}
//       <div className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold text-blue-900">Comforty</h1>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 px-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-teal-500"
//           />
//         </div>

//         {/* Cart Section */}
//         <div className="relative">
//           <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 hover:border-blue-900">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//               alt="Cart"
//               className="w-5 h-5"
//             />
//             <span className="text-sm">Cart</span>
//             <span className="absolute bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1 -top-2 -right-3">
//               2
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Filtered Products (Optional Display) */}
//       <div className="container mx-auto py-4">
//         {searchQuery && filteredProducts.length > 0 ? (
//           <ul className="bg-white shadow-md rounded-md p-4">
//             {filteredProducts.map((product, index) => (
//               <li
//                 key={product._id || product.slug?.current || `index-${index}`} // Safely access slug.current
//                 className="p-2 border-b last:border-b-0"
//               >
//                 {product.title}
//               </li>
//             ))}
//           </ul>
//         ) : searchQuery ? (
//           <p className="text-gray-500 text-center">No products found.</p>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// type Product = {
//   id: string;
//   title: string;
// };

// type NavbarProps = {
//   products?: Product[]; // Allow products to be optional
// };

// function Navbar({ products = [] }: NavbarProps) {
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   // Ensure products is an array before filtering
//   const filteredProducts = Array.isArray(products)
//     ? products.filter((item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : [];

//   return (
//     <div>
//       {/* Navbar Container */}
//       <div className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold text-blue-900">Comforty</h1>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 px-4">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={handleSearch}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-teal-500"
//           />
//         </div>

//         {/* Cart Section */}
//         <div className="relative">
//           <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 hover:border-blue-900">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//               alt="Cart"
//               className="w-5 h-5"
//             />
//             <span className="text-sm">Cart</span>
//             <span className="absolute bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1 -top-2 -right-3">
//               2
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Filtered Products (Optional Display) */}
//       <div className="container mx-auto py-4">
//         {searchQuery && filteredProducts.length > 0 ? (
//           <ul className="bg-white shadow-md rounded-md p-4">
//             {filteredProducts.map((product) => (
//               <li key={product.id} className="p-2 border-b last:border-b-0">
//                 {product.title}
//               </li>
//             ))}
//           </ul>
//         ) : searchQuery ? (
//           <p className="text-gray-500 text-center">No products found.</p>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// import React from "react";
// import Link from "next/link";

// function Navbar() {
//   return (
//     <div>
//       {/* Navbar Container */}
//       <div id="AZ" className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
//         {/* Logo Section */}
//         <div id="BA" className="flex items-center gap-3">
//           <img src="/Logo Icon.png" alt="Sofa" className="w-8 h-8" />
//           <h1 className="text-lg font-bold text-blue-900">Comforty</h1>
//         </div>

//         {/* Cart Section */}
//         <div id="BB" className="relative">
//           <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-1 hover:border-blue-900">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//               alt="Cart"
//               className="w-5 h-5"
//             />
//             <span className="text-sm">Cart</span>
//             <span className="absolute bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1 -top-2 -right-3">
//               2
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Links and Contact Section */}
//       <div id="BC" className="flex flex-wrap justify-between items-center py-4 px-4 text-gray-700">
//         {/* Navigation Links */}
//         <div id="BD" className="flex flex-wrap gap-8">
//           {/* Existing Links */}
//           <Link
//             href="/Home"
//             id="BE"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             Home
//           </Link>

//           {/* New Links */}
//           <Link
//             href="/AboutUs"
//             id="BF"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             About
//           </Link>
//           <Link
//             href="/Products"
//             id="BG"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             Product
//           </Link>
//           <Link
//             href="/Contact"
//             id="BH"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             Contact
//           </Link>
//           <Link
//             href="/Bag"
//             id="BI"
//             className="text-gray-700 hover:text-blue-900 transition-all duration-300 ease-in-out"
//           >
//             Bag
//           </Link>
//         </div>

//         {/* Contact Information */}
//         <div id="BK" className="mt-2 sm:mt-0">
//           <p>
//             Contact: <strong className="text-blue-900">(808) 555-0111</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;