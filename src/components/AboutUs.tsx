"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutUs = () => {
  const features = [
    {
      id: "quality-materials",
      title: "Quality Materials",
      description: "We use only the best materials for durability and comfort.",
      iconPath: "M12 4v16m8-8H4",
    },
    {
      id: "ergonomic-design",
      title: "Ergonomic Design",
      description: "Our chairs are designed to support your posture and comfort.",
      iconPath: "M12 4v16m8-8H4",
    },
    {
      id: "modern-aesthetics",
      title: "Modern Aesthetics",
      description: "Our designs are sleek and fit seamlessly into any space.",
      iconPath: "M12 4v16m8-8H4",
    },
    {
      id: "sustainability",
      title: "Sustainability",
      description: "We prioritize eco-friendly materials and processes.",
      iconPath: "M12 4v16m8-8H4",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16"
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-gradient-to-r from-teal-500 to-green-400 p-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            About Us - Comforty
          </h2>
          <p className="text-white text-lg mb-6 leading-relaxed">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
       
          <a href="/Producte">
  <motion.button
    whileHover={{
      scale: 1.1,
      backgroundColor: "#e0f2f1",
      color: "#007bff",
    }}
    whileTap={{ scale: 0.9 }}
    className="bg-white text-teal-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-teal-100 transition-all duration-300"
  >
    View Collection
  </motion.button>
</a>


        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/download.jpeg"
            alt="Comforty Chair"
            className="w-full h-auto rounded-md shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto mb-4 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={feature.iconPath}
                />
              </motion.svg>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const AboutUs = () => {
//   const features = [
//     {
//       id: "quality-materials",
//       title: "Quality Materials",
//       description: "We use only the best materials for durability and comfort.",
//       iconPath: "M12 4v16m8-8H4",
//     },
//     {
//       id: "ergonomic-design",
//       title: "Ergonomic Design",
//       description: "Our chairs are designed to support your posture and comfort.",
//       iconPath: "M12 4v16m8-8H4",
//     },
//     {
//       id: "modern-aesthetics",
//       title: "Modern Aesthetics",
//       description: "Our designs are sleek and fit seamlessly into any space.",
//       iconPath: "M12 4v16m8-8H4",
//     },
//     {
//       id: "sustainability",
//       title: "Sustainability",
//       description: "We prioritize eco-friendly materials and processes.",
//       iconPath: "M12 4v16m8-8H4",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="container mx-auto px-4 py-16"
//     >
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center gap-8">
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full md:w-1/2 bg-gradient-to-r from-teal-500 to-green-400 p-8 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
//         >
//           <h2 className="text-4xl font-bold text-white mb-4">
//             About Us - Comforty
//           </h2>
//           <p className="text-white text-lg mb-6">
//             At Comforty, we believe that the right chair can transform your
//             space and elevate your comfort. Specializing in ergonomic design,
//             premium materials, and modern aesthetics, we craft chairs that
//             seamlessly blend style with functionality.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.1, backgroundColor: "#e0f2f1" }}
//             whileTap={{ scale: 0.9 }}
//             className="bg-white text-teal-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-teal-100 transition-all duration-300"
//           >
//             View Collection
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.2, delay: 0.4 }}
//           className="w-full md:w-1/2"
//         >
//           <img
//             src="/download.jpeg"
//             alt="Chair"
//             className="w-full h-auto rounded-md shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
//           />
//         </motion.div>
//       </div>

//       {/* Features Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className="py-16"
//       >
//         <h2 className="text-3xl font-bold text-center mb-12">
//           What Makes Our Brand Different
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {features.map((feature) => (
//             <motion.div
//               key={feature.id}
//               whileHover={{ scale: 1.1, rotate: 2 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
//             >
//               <motion.svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-12 w-12 mx-auto mb-4 text-teal-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 initial={{ rotate: 0 }}
//                 animate={{ rotate: 360 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={feature.iconPath}
//                 />
//               </motion.svg>
//               <h3 className="text-lg font-semibold">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default AboutUs;
  
// import React from 'react';

// const AboutUs = () => {
//   const features = [
//     {
//       id: 'quality-materials',
//       title: 'Quality Materials',
//       description: 'We use only the best materials for durability and comfort.',
//       iconPath: 'M12 4v16m8-8H4',
//     },
//     {
//       id: 'ergonomic-design',
//       title: 'Ergonomic Design',
//       description:
//         'Our chairs are designed to support your posture and comfort.',
//       iconPath: 'M12 4v16m8-8H4',
//     },
//     {
//       id: 'modern-aesthetics',
//       title: 'Modern Aesthetics',
//       description:
//         'Our designs are sleek and fit seamlessly into any space.',
//       iconPath: 'M12 4v16m8-8H4',
//     },
//     {
//       id: 'sustainability',
//       title: 'Sustainability',
//       description:
//         'We prioritize eco-friendly materials and processes.',
//       iconPath: 'M12 4v16m8-8H4',
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col md:flex-row gap-8 py-16">
//         <div className="w-full md:w-1/2 bg-teal-500 p-8 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             About Us - Comforty
//           </h2>
//           <p className="text-white text-lg mb-6">
//             At Comforty, we believe that the right chair can transform your
//             space and elevate your comfort. Specializing in ergonomic design,
//             premium materials, and modern aesthetics, we craft chairs that
//             seamlessly blend style with functionality.
//           </p>
//           <button className="bg-white text-teal-500 px-4 py-2 rounded-md transition-transform transform hover:scale-105 hover:bg-teal-100 duration-300">
//             View collection
//           </button>
//         </div>
//         <div className="w-full md:w-1/2 transition-transform duration-300 hover:scale-105">
//           <img
//             src="/download.jpeg"
//             alt="chair"
//             className="w-full h-auto rounded-md"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col gap-8 py-16">
//         <h2 className="text-2xl font-bold text-center mb-8 transition-colors duration-300 hover:text-teal-500">
//           What Makes Our Brand Different
//         </h2>

//         <div className="flex flex-col md:flex-row gap-8">
//           {features.map((item) => (
//             <div
//               key={item.id}
//               className="w-full md:w-1/4 bg-gray-100 p-8 rounded-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-12 w-12 mx-auto mb-4 text-teal-500 transition-transform transform hover:scale-110 duration-300"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={item.iconPath}
//                 />
//               </svg>
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
