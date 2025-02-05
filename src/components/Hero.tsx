





















// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";

// export interface HeroProps {
//   isDarkMode: boolean;
// }

// function Hero({ isDarkMode }: HeroProps) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setLoading(true);
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart));
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000);
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000);
//       return updatedCart;
//     });
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle loading and error states
//   if (loading) {
//     return <div className="text-center py-10">Loading products...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-10 text-red-500">{error}</div>;
//   }

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         <div className="md:w-1/2 text-center md:text-left">
//           <p
//             className={`uppercase text-sm tracking-wide mb-4 ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Welcome to Chairy
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <Link
//             href="/products"
//             className={`mt-6 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//               isDarkMode
//                 ? "bg-teal-600 text-white hover:bg-teal-500"
//                 : "bg-teal-500 text-white hover:bg-teal-600"
//             }`}
//           >
//             Shop Now →
//           </Link>
//         </div>
//         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="container mx-auto px-6 py-4">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
//             isDarkMode
//               ? "bg-gray-800 text-white border-gray-600 focus:ring-teal-500"
//               : "bg-white text-black border-gray-300 focus:ring-teal-500"
//           }`}
//         />
//       </div>

//       {/* Success Message */}
//       {successMessage && (
//         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
//           {successMessage}
//         </div>
//       )}

//       {/* Products Section */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
//         {filteredProducts.length === 0 ? (
//           <div
//             className={`text-center py-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             } col-span-full`}
//           >
//             No products match your search.
//           </div>
//         ) : (
//           filteredProducts.map((product, index) => (
//             <div
//               key={product._id || `${product.slug?.current || "unknown"}-${index}`}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//             >
//               <Link href={`/products/${product._id}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
//                   <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               <button
//                 onClick={() => addToCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode
//                     ? "bg-teal-600 hover:bg-teal-500"
//                     : "bg-teal-500 hover:bg-teal-600"
//                 }`}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => removeFromCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode
//                     ? "bg-red-600 hover:bg-red-500"
//                     : "bg-red-500 hover:bg-red-600"
//                 }`}
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Hero;

// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";

// export interface HeroProps {
//   isDarkMode: boolean;
// }

// function Hero({ isDarkMode }: HeroProps) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setLoading(true);
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart));
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000);
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000);
//       return updatedCart;
//     });
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle loading and error states
//   if (loading) {
//     return <div className="text-center py-10">Loading products...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-10 text-red-500">{error}</div>;
//   }

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         <div className="md:w-1/2 text-center md:text-left">
//           <p className={`uppercase text-sm tracking-wide mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//             Welcome to Chairy
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <Link
//             href="/products"
//             className={`mt-6 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//               isDarkMode ? "bg-teal-600 text-white hover:bg-teal-500" : "bg-teal-500 text-white hover:bg-teal-600"
//             }`}
//           >
//             Shop Now →
//           </Link>
//         </div>
//         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="container mx-auto px-6 py-4">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
//             isDarkMode
//               ? "bg-gray-800 text-white border-gray-600 focus:ring-teal-500"
//               : "bg-white text-black border-gray-300 focus:ring-teal-500"
//           }`}
//         />
//       </div>

//       {/* Success Message */}
//       {successMessage && (
//         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
//           {successMessage}
//         </div>
//       )}

//       {/* Products Section */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
//         {filteredProducts.length === 0 ? (
//           <div className={`text-center py-10 ${isDarkMode ? "text-gray-400" : "text-gray-700"} col-span-full`}>
//             No products match your search.
//           </div>
//         ) : (
//           filteredProducts.map((product, index) => (
//             <div
//               key={product._id || `${product.slug?.current || "unknown"}-${index}`}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//             >
//               <Link href={`/products/${product._id}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title }
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
//                   <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               <button
//                 onClick={() => addToCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode ? "bg-teal-600 hover:bg-teal-500" : "bg-teal-500 hover:bg-teal-600"
//                 }`}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => removeFromCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode ? "bg-red-600 hover:bg-red-500" : "bg-red-500 hover:bg-red-600"
//                 }`}
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Hero;



// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product"; // Ensure the path is correct
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";

// // Removed duplicate imports for `Product`

// export interface HeroProps {
//   isDarkMode: boolean;
// }

// function Hero({ isDarkMode }: HeroProps) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setLoading(true);
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//         setError("Failed to load products. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart));
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000);
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000);
//       return updatedCart;
//     });
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle loading and error states
//   if (loading) {
//     return <div className="text-center py-10">Loading products...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-10 text-red-500">{error}</div>;
//   }

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         <div className="md:w-1/2 text-center md:text-left">
//           <p
//             className={`uppercase text-sm tracking-wide mb-4 ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Welcome to Chairy
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <Link
//             href="/products"
//             className={`mt-6 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//               isDarkMode
//                 ? "bg-teal-600 text-white hover:bg-teal-500"
//                 : "bg-teal-500 text-white hover:bg-teal-600"
//             }`}
//           >
//             Shop Now →
//           </Link>
//         </div>
//         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-4">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
//             isDarkMode
//               ? "bg-gray-800 text-white border-gray-600 focus:ring-teal-500"
//               : "bg-white text-black border-gray-300 focus:ring-teal-500"
//           }`}
//         />
//       </div>

//       {successMessage && (
//         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
//           {successMessage}
//         </div>
//       )}

//       <div
//         className={`flex justify-between items-center px-6 py-2 ${
//           isDarkMode ? "bg-gray-800" : "bg-teal-500"
//         } text-white`}
//       >
//         <h2 className="text-lg font-semibold">Products Available</h2>
//         <div className="bg-teal-700 rounded-full px-4 py-2 text-sm font-semibold">
//           Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
//         </div>
//       </div>

//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
//         {filteredProducts.length === 0 ? (
//           <div
//             className={`text-center py-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             } col-span-full`}
//           >
//             No products match your search.
//           </div>
//         ) : (
//           filteredProducts.map((product, index) => (
//             <div
//               key={product._id || `${product.slug?.current || "" }-${index}`}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//             >


      

// {/* <Link href={`/components/products/${product.slug.current }`}>
//   <div className="block p-4 cursor-pointer">
//     {product.image ? (
//       <Image
//         src={urlFor(product.image).url()}
//         alt={product.title || "Untitled Product"}
//         width={300}
//         height={200}
//         className="w-full h-48 object-cover mb-4 rounded-md"
//       />
//     ) : (
//       <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//         No Image Available
//       </div>
//     )}
//     <h3 className="text-xl font-semibold">
//       {product.title || "Untitled Product"}
//     </h3>
//     <p className="mt-2">${product.price || "N/A"}</p>
//   </div>
//   <button
//     onClick={() => addToCart(product.title || "Untitled Product")}
//     className={`w-full py-2 rounded-b-md transition ${
//       isDarkMode ? "bg-teal-600 hover:bg-teal-500" : "bg-teal-500 hover:bg-teal-600"
//     }`}
//   >
//     Add to Cart
//   </button>
//   <button
//     onClick={() => removeFromCart(product.title || "Untitled Product")}
//     className={`w-full py-2 rounded-b-md transition ${
//       isDarkMode ? "bg-red-600 hover:bg-red-500" : "bg-red-500 hover:bg-red-600"
//     }`}
//   >
//     Remove from Cart
//   </button>
//   </Link> */}

// <Link href={`/product/${product.slug}`}>
//              <div className="block p-4 cursor-pointer">
//                  {product.image ? (
//                    <Image
//                        src={urlFor(product.image).url()}
//                        alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                        className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                  ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                        No Image Available
//                     </div>
//                   )}
//                  <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
//                    <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//             </div>
            
//           ))
//         )}
        
//       </div>
      
//     </div>
//   );
// }

// export default Hero;










// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import { Product } from "../../types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";

// // Added HeroProps type explicitly
// export interface HeroProps {
//   isDarkMode: boolean;
// }

// function Hero({ isDarkMode }: HeroProps) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart));
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000);
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000);
//       return updatedCart;
//     });
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         <div className="md:w-1/2 text-center md:text-left">
//           <p
//             className={`uppercase text-sm tracking-wide mb-4 ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Welcome to Chairy
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <Link
//             href="/products"
//             className={`mt-6 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//               isDarkMode
//                 ? "bg-teal-600 text-white hover:bg-teal-500"
//                 : "bg-teal-500 text-white hover:bg-teal-600"
//             }`}
//           >
//             Shop Now →
//           </Link>
//         </div>
//         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       <div className="container mx-auto px-6 py-4">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
//             isDarkMode
//               ? "bg-gray-800 text-white border-gray-600 focus:ring-teal-500"
//               : "bg-white text-black border-gray-300 focus:ring-teal-500"
//           }`}
//         />
//       </div>

//       {successMessage && (
//         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
//           {successMessage}
//         </div>
//       )}

//       <div className={`flex justify-between items-center px-6 py-2 ${isDarkMode ? "bg-gray-800" : "bg-teal-500"} text-white`}>
//         <h2 className="text-lg font-semibold">Products Available</h2>
//         <div className="bg-teal-700 rounded-full px-4 py-2 text-sm font-semibold">
//           Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
//         </div>
//       </div>

//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
//         {filteredProducts.length === 0 ? (
//           <div className={`text-center py-10 ${isDarkMode ? "text-gray-400" : "text-gray-700"} col-span-full`}>
//             No products match your search.
//           </div>
//         ) : (
//           filteredProducts.map((product, index) => (
//             <div
//               key={product._id || `${product.slug}-${index}`}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
//                   <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               <button
//                 onClick={() => addToCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode ? "bg-teal-600 hover:bg-teal-500" : "bg-teal-500 hover:bg-teal-600"
//                 }`}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={() => removeFromCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode ? "bg-red-600 hover:bg-red-500" : "bg-red-500 hover:bg-red-600"
//                 }`}
//               >
//                 Remove from Cart
//               </button>
//             </div>
// //           ))
// //         )}
// //       </div>
//     </div>
//   );
// }

// export default Hero;

//                                    Hero compunent<->
// "use client";

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const itemsPerPage = 8;

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts); // Update state only after data is fetched
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart)); // Update state inside useEffect
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Add product to cart
//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   // Remove product from cart
//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//       return updatedCart;
//     });
//   };

//   // Filtered and Sorted Products
//   const filteredProducts = products.filter((product) =>
//     (selectedCategory === "All" || product._id === selectedCategory) &&
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

//   // Animation variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//   };

//   const fadeIn = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//   };

//   const staggerContainer = {
//     initial: {},
//     animate: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <motion.div
//         className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
//         initial="initial"
//         animate="animate"
//         variants={fadeInUp}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="md:w-1/2 text-center md:text-left"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <p
//             className={`uppercase text-sm tracking-wide mb-4 ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Welcome to Chairy
//           </p>
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold leading-snug"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </motion.h1>
//           <Link
//             href="/producte"
//             className={`mt-6 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//               isDarkMode
//                 ? "bg-teal-600 text-white hover:bg-teal-500"
//                 : "bg-teal-500 text-white hover:bg-teal-600"
//             }`}
//           >
//             Shop Now →
//           </Link>
//         </motion.div>
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           initial="initial"
//           animate="animate"
//           variants={fadeIn}
//           transition={{ duration: 0.8 }}
//         >
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Products Available Component */}

//       {/* Other code like displaying products */}
//     </div>
//   );
// }

// export default Hero;

// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const itemsPerPage = 8;

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts); // Update state only after data is fetched
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart)); // Update state inside useEffect
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Add product to cart
//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   // Remove product from cart
//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//       return updatedCart;
//     });
//   };

//   // Filtered and Sorted Products
//   const filteredProducts = products.filter((product) =>
//     (selectedCategory === "All" || product._id === selectedCategory) &&
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

//   // Animation variants
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//   };

//   const fadeIn = {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//   };

//   const staggerContainer = {
//     initial: {},
//     animate: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <motion.div
//         className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
//         initial="initial"
//         animate="animate"
//         variants={fadeInUp}
//         transition={{ duration: 1 }}
//       >
//         <motion.div
//           className="md:w-1/2 text-center md:text-left"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <p
//             className={`uppercase text-sm tracking-wide mb-4 ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Welcome to Chairy
//           </p>
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold leading-snug"
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1.2 }}
//           >
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </motion.h1>
//           <Link
//             href="/products"
//             className={`mt-6 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//               isDarkMode
//                 ? "bg-teal-600 text-white hover:bg-teal-500"
//                 : "bg-teal-500 text-white hover:bg-teal-600"
//             }`}
//           >
//             Shop Now →
//           </Link>
//         </motion.div>
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           initial="initial"
//           animate="animate"
//           variants={fadeIn}
//           transition={{ duration: 0.8 }}
//         >
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </motion.div>
//       </motion.div>

//       Filter, Search, and Sort Controls
//       <motion.div
//         className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4"
//         initial="initial"
//         animate="animate"
//         variants={staggerContainer}
//       >
//         <motion.select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="px-4 py-2 border rounded"
//           variants={fadeInUp}
//         >
//           <option value="All">All Categories</option>
//           <option value="Chairs">Chairs</option>
//           <option value="Tables">Tables</option>
//           <option value="Sofas">Sofas</option>
//         </motion.select>
//         <motion.input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
//             isDarkMode
//               ? "bg-gray-800 text-white border-gray-600 focus:ring-teal-500"
//               : "bg-white text-black border-gray-300 focus:ring-teal-500"
//           }`}
//           variants={fadeInUp}
//         />
//         <motion.select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="px-4 py-2 border rounded"
//           variants={fadeInUp}
//         >
//           <option value="title">Sort by Title</option>
//           <option value="price">Sort by Price</option>
//         </motion.select>
//       </motion.div>

//       {/* Success Message */}
//       {successMessage && (
//         <motion.div
//           className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.3 }}
//         >
//           {successMessage}
//         </motion.div>
//       )}

//       {/* Cart Count Display */}
//       <motion.div
//         className={`flex justify-between items-center px-6 py-2 ${isDarkMode ? "bg-gray-800" : "bg-teal-500"} text-white`}
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <h2 className="text-lg font-semibold">Products Available</h2>
//         <div className="bg-teal-700 rounded-full px-4 py-2 text-sm font-semibold">
//           Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
//         </div>
//       </motion.div>

//       {/* Display Products */}
//       <motion.div
//         className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8"
//         initial="initial"
//         animate="animate"
//         variants={staggerContainer}
//       >
//         {paginatedProducts.length === 0 ? (
//           <motion.div
//             className={`text-center py-10 ${isDarkMode ? "text-gray-400" : "text-gray-700"} col-span-full`}
//             variants={fadeIn}
//           >
//             No products match your search.
//           </motion.div>
//         ) : (
//           paginatedProducts.map((product, index) => (
//             <motion.div
//               key={product._id || `${product.slug}-${index}`}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
//                   <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               <button
//                 aria-label={`Add ${product.title || "Untitled Product"} to cart`}
//                 onClick={() => addToCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode ? "bg-teal-600 hover:bg-teal-500" : "bg-teal-500 hover:bg-teal-600"
//                 }`}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 aria-label={`Remove ${product.title || "Untitled Product"} from cart`}
//                 onClick={() => removeFromCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode ? "bg-red-600 hover:bg-red-500" : "bg-red-500 hover:bg-red-600"
//                 }`}
//               >
//                 Remove from Cart
//               </button>
//             </motion.div>
//           ))
//         )}
//       </motion.div>

//       {/* Pagination Controls */}
//       <motion.div
//         className="flex justify-center gap-4 my-4"
//         initial="initial"
//         animate="animate"
//         variants={fadeInUp}
//       >
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           className="px-4 py-2 bg-gray-200 rounded"
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           className="px-4 py-2 bg-gray-200 rounded"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </motion.div>
//     </div>
//   );
// }

// export default Hero;















//                                        Ya ha main Hero 
                   
// "use client";

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const itemsPerPage = 8;

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     (selectedCategory === "All" || product._id === selectedCategory) &&
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       <motion.div
//         className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {paginatedProducts.length === 0 ? (
//           <div className={`text-center py-10 ${isDarkMode ? "text-gray-400" : "text-gray-700"} col-span-full`}>
//             No products match your search.
//           </div>
//         ) : (
//           paginatedProducts.map((product, index) => (
//             <motion.div
//               key={product._id || `${product.slug}-${index}`}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
//                   <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))
//         )}
//       </motion.div>

//       <div className="flex justify-center items-center py-6 space-x-4">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="p-2 bg-gray-300 rounded disabled:opacity-50 flex items-center"
//         >
//           <ChevronLeftIcon className="h-6 w-6" />
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="p-2 bg-gray-300 rounded disabled:opacity-50 flex items-center"
//         >
//           <ChevronRightIcon className="h-6 w-6" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;


















// "use client";

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const itemsPerPage = 8;

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     (selectedCategory === "All" || product._id === selectedCategory) &&
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <motion.div
//         className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="md:w-1/2 text-center md:text-left">
//           <p className={`uppercase text-sm tracking-wide mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//             Welcome to Comforty
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <div className="mt-12">
//             <Link href="/Producte">
//               <motion.button
//                 whileHover={{
//                   scale: 1.1,
//                   backgroundColor: ["#f87171", "#34d399", "#60a5fa", "#a78bfa"],
//                   transition: { duration: 1.5, repeat: Infinity },
//                 }}
//                 className="px-6 py-3 rounded-full text-sm font-semibold shadow-md transition bg-teal-500 text-white hover:bg-teal-600"
//               >
//                 Shop Now →
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src="/Product Image.png"
//               alt="Chair"
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Hero;































//                           Ya hai fetch hova hova daat  ka code 
 

// "use client";

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const itemsPerPage = 8;

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     (selectedCategory === "All" || product._id === selectedCategory) &&
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <motion.div
//         className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="md:w-1/2 text-center md:text-left">
//           <p className={`uppercase text-sm tracking-wide mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//             Welcome to Comforty
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <div className="mt-12">
//             <Link href="/Producte">
//               <motion.button
//                 whileHover={{
//                   scale: 1.1,
//                   backgroundColor: ["#f87171", "#34d399", "#60a5fa", "#a78bfa"],
//                   transition: { duration: 1.5, repeat: Infinity },
//                 }}
//                 className="px-6 py-3 rounded-full text-sm font-semibold shadow-md transition bg-teal-500 text-white hover:bg-teal-600"
//               >
//                 Shop Now →
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src="/Product Image.png"
//               alt="Chair"
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default Hero;

















"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/app/types/product";
import { client } from "@/sanity/lib/client";
import { allProduct } from "@/sanity/lib/qury";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

function Hero({ isDarkMode }: { isDarkMode: boolean }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("title");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // New loading state
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { addToCart: contextAddToCart } = useCart();

  const itemsPerPage = 8;

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProduct);
        setProducts(fetchedProducts);
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false); // Set loading to false in case of error
      }
    }
    fetchProducts();
  }, []);

  // Add to Cart with +1 increment
  const handleAddToCart = (product: Product) => {
    contextAddToCart(product);
    setSuccessMessage(`${product.title} added to cart!`);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  // Filter products by category and search term
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product._id === selectedCategory) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products based on the selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price") return a.price - b.price;
    if (sortOption === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  // Paginate products
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
      {/* Hero Section */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <p
            className={`uppercase text-sm tracking-wide mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Welcome to Comforty
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Best Furniture <br /> Collection For Your <br /> Interior.
          </h1>
          <div className="mt-12">
            <Link href="/Producte">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: ["#f87171", "#34d399", "#60a5fa", "#a78bfa"],
                  transition: { duration: 1.5, repeat: Infinity },
                }}
                className={`px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
                  isDarkMode
                    ? "bg-teal-600 text-white hover:bg-teal-500"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                }`}
              >
                Shop Now →
              </motion.button>
            </Link>
          </div>
        </div>
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/Product Image.png"
              alt="Chair"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center py-8">
          <div className="spinner"></div> {/* Replace with your spinner */}
        </div>
      )}

      {/* Display Products */}
      {!loading && (
        <motion.div
          className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {paginatedProducts.length === 0 ? (
            <div
              className={`text-center py-10 ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              } col-span-full`}
            >
              No products match your search.
            </div>
          ) : (
            paginatedProducts.map((product, index) => (
              <motion.div
                key={product._id || `${product.slug}-${index}`}
                className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                  isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/product/${product.slug}`}>
                  <div className="block p-4 cursor-pointer">
                    {product.image ? (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.title || "Untitled Product"}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover mb-4 rounded-md"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image Available
                      </div>
                    )}
                    <h3 className="text-xl font-semibold">
                      {product.title || "Untitled Product"}
                    </h3>
                    <p className="mt-2">${product.price || "N/A"}</p>
                  </div>
                </Link>
                {/* Add to Cart Button */}
                <div className="relative">
  <motion.button
    whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
    onClick={() => handleAddToCart(product)}
    className={`px-4 py-2 flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 ${
      isDarkMode
        ? "bg-teal-600 hover:bg-teal-500 text-white shadow-md"
        : "bg-teal-500 hover:bg-teal-600 text-white shadow-md"
    } rounded-full absolute bottom-4 right-4`} // Positions the button at the bottom-right corner
  >
    <ShoppingCart className="w-5 h-5" /> Add to Cart
  </motion.button>
</div>

              </motion.div>
            ))
          )}
        </motion.div>
      )}

      {/* Pagination Controls */}
      <motion.div
        className="flex justify-center gap-4 my-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-4 py-2 flex items-center gap-2 rounded ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
          }`}
          disabled={currentPage === 1}
        >
          <ArrowLeft className="w-5 h-5" /> Previous
        </motion.button>
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className={`px-4 py-2 flex items-center gap-2 rounded ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
          }`}
          disabled={currentPage === totalPages}
        >
          Next <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            className="fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hero;



















// "use client";

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShoppingCart, Trash, ArrowLeft, ArrowRight } from "lucide-react";

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const itemsPerPage = 8;

//   // Fetch products from API
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart));
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Add to Cart
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       if (!prevCart.some((item) => item._id === product._id)) {
//         const updatedCart = [...prevCart, product];
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         setSuccessMessage(`${product.title} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000);
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   // Remove from Cart
//   const removeFromCart = (productId: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item._id !== productId);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setSuccessMessage("Product removed from cart!");
//       setTimeout(() => setSuccessMessage(null), 3000);
//       return updatedCart;
//     });
//   };

//   // Filter products by category and search term
//   const filteredProducts = products.filter(
//     (product) =>
//       (selectedCategory === "All" || product._id === selectedCategory) &&
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Sort products based on the selected option
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   // Paginate products
//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <motion.div
//         className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="md:w-1/2 text-center md:text-left">
//           <p
//             className={`uppercase text-sm tracking-wide mb-4 ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Welcome to Comforty
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <div className="mt-12">
//             <Link href="/Producte">
//               <motion.button
//                 whileHover={{
//                   scale: 1.1,
//                   backgroundColor: ["#f87171", "#34d399", "#60a5fa", "#a78bfa"],
//                   transition: { duration: 1.5, repeat: Infinity },
//                 }}
//                 className={`px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//                   isDarkMode
//                     ? "bg-teal-600 text-white hover:bg-teal-500"
//                     : "bg-teal-500 text-white hover:bg-teal-600"
//                 }`}
//               >
//                 Shop Now →
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src="/Product Image.png"
//               alt="Chair"
//               width={400}
//               height={300}
//               className="rounded-lg shadow-md"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Display Products */}
//       <motion.div
//         className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {paginatedProducts.length === 0 ? (
//           <div
//             className={`text-center py-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             } col-span-full`}
//           >
//             No products match your search.
//           </div>
//         ) : (
//           paginatedProducts.map((product, index) => (
//             <motion.div
//               key={product._id || `${product.slug}-${index}`}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold">
//                     {product.title || "Untitled Product"}
//                   </h3>
//                   <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               {/* Add/Remove Button */}
//               {cart.some((item) => item._id === product._id) ? (
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
//                   onClick={() => removeFromCart(product._id)}
//                   className={`w-full py-2 flex items-center justify-center gap-2 rounded-b-md transition ${
//                     isDarkMode
//                       ? "bg-red-600 hover:bg-red-500"
//                       : "bg-red-500 hover:bg-red-600"
//                   }`}
//                 >
//                   <Trash className="w-5 h-5" /> Remove from Cart
//                 </motion.button>
//               ) : (
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
//                   onClick={() => addToCart(product)}
//                   className={`w-full py-2 flex items-center justify-center gap-2 rounded-b-md transition ${
//                     isDarkMode
//                       ? "bg-teal-600 hover:bg-teal-500"
//                       : "bg-teal-500 hover:bg-teal-600"
//                   }`}
//                 >
//                   <ShoppingCart className="w-5 h-5" /> Add to Cart
//                 </motion.button>
//               )}
//             </motion.div>
//           ))
//         )}
//       </motion.div>

//       {/* Pagination Controls */}
//       <motion.div
//         className="flex justify-center gap-4 my-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           className={`px-4 py-2 flex items-center gap-2 rounded ${
//             isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
//           }`}
//           disabled={currentPage === 1}
//         >
//           <ArrowLeft className="w-5 h-5" /> Previous
//         </motion.button>
//         <span className={`px-4 py-2 ${isDarkMode ? "text-white" : "text-black"}`}>
//           Page {currentPage} of {totalPages}
//         </span>
//         <motion.button
//           whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           className={`px-4 py-2 flex items-center gap-2 rounded ${
//             isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
//           }`}
//           disabled={currentPage === totalPages}
//         >
//           Next <ArrowRight className="w-5 h-5" />
//         </motion.button>
//       </motion.div>

//       {/* Success Message Animation */}
//       <AnimatePresence>
//         {successMessage && (
//           <motion.div
//             className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//           >
//             {successMessage}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default Hero;


















// "use client";

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShoppingCart, Trash, ArrowLeft, ArrowRight } from "lucide-react";

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const itemsPerPage = 8;

//   // Fetch products from API
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart));
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Add to Cart
//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000);
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   // Remove from Cart
//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000);
//       return updatedCart;
//     });
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       (selectedCategory === "All" || product._id === selectedCategory) &&
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

//   return (
//     <div
//       className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}
//     >
//       {/* Hero Section */}
//       <motion.div
//         className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="md:w-1/2 text-center md:text-left">
//           <p
//             className={`uppercase text-sm tracking-wide mb-4 ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Welcome to Comforty
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <div className="mt-12">
//             <Link href="/Producte">
//               <motion.button
//                 whileHover={{
//                   scale: 1.1,
//                   backgroundColor: ["#f87171", "#34d399", "#60a5fa", "#a78bfa"],
//                   transition: { duration: 1.5, repeat: Infinity },
//                 }}
//                 className={`px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//                   isDarkMode
//                     ? "bg-teal-600 text-white hover:bg-teal-500"
//                     : "bg-teal-500 text-white hover:bg-teal-600"
//                 }`}
//               >
//                 Shop Now →
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src="/Product Image.png"
//               alt="Chair"
//               width={400}
//               height={300}
//               className="rounded-lg shadow-md"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Display Products */}
//       <motion.div
//         className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {paginatedProducts.length === 0 ? (
//           <div
//             className={`text-center py-10 ${
//               isDarkMode ? "text-gray-400" : "text-gray-700"
//             } col-span-full`}
//           >
//             No products match your search.
//           </div>
//         ) : (
//           paginatedProducts.map((product, index) => (
//             <motion.div
//               key={product._id || `${product.slug}-${index}`}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold">
//                     {product.title || "Untitled Product"}
//                   </h3>
//                   <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               {/* Add/Remove Button */}
//               {cart.includes(product.title || "Untitled Product") ? (
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
//                   onClick={() =>
//                     removeFromCart(product.title || "Untitled Product")
//                   }
//                   className={`w-full py-2 flex items-center justify-center gap-2 rounded-b-md transition ${
//                     isDarkMode
//                       ? "bg-red-600 hover:bg-red-500"
//                       : "bg-red-500 hover:bg-red-600"
//                   }`}
//                 >
//                   <Trash className="w-5 h-5" /> Remove from Cart
//                 </motion.button>
//               ) : (
//                 <motion.button
//                   whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
//                   onClick={() => addToCart(product.title || "Untitled Product")}
//                   className={`w-full py-2 flex items-center justify-center gap-2 rounded-b-md transition ${
//                     isDarkMode
//                       ? "bg-teal-600 hover:bg-teal-500"
//                       : "bg-teal-500 hover:bg-teal-600"
//                   }`}
//                 >
//                   <ShoppingCart className="w-5 h-5" /> Add to Cart
//                 </motion.button>
//               )}
//             </motion.div>
//           ))
//         )}
//       </motion.div>

//       {/* Pagination Controls */}
//       <motion.div
//         className="flex justify-center gap-4 my-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//       >
//         <motion.button
//           whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           className={`px-4 py-2 flex items-center gap-2 rounded ${
//             isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
//           }`}
//           disabled={currentPage === 1}
//         >
//           <ArrowLeft className="w-5 h-5" /> Previous
//         </motion.button>
//         <span className={`px-4 py-2 ${isDarkMode ? "text-white" : "text-black"}`}>
//           Page {currentPage} of {totalPages}
//         </span>
//         <motion.button
//           whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           className={`px-4 py-2 flex items-center gap-2 rounded ${
//             isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
//           }`}
//           disabled={currentPage === totalPages}
//         >
//           Next <ArrowRight className="w-5 h-5" />
//         </motion.button>
//       </motion.div>

//       {/* Success Message Animation */}
//       <AnimatePresence>
//         {successMessage && (
//           <motion.div
//             className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//           >
//             {successMessage}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default Hero;












// "use client";

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "@/app/context/CartContext";  // Import Cart Context

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const { cart, addToCart, removeFromCart } = useCart(); // Use Cart Context
//   const [products, setProducts] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const itemsPerPage = 8;

//   // Fetch products from API
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter(
//     (product) =>
//       (selectedCategory === "All" || product._id === selectedCategory) &&
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <motion.div
//         className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="md:w-1/2 text-center md:text-left">
//           <p className={`uppercase text-sm tracking-wide mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
//             Welcome to Comforty
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <div className="mt-12">
//             <Link href="/Producte">
//               <motion.button
//                 whileHover={{
//                   scale: 1.1,
//                   backgroundColor: ["#f87171", "#34d399", "#60a5fa", "#a78bfa"],
//                   transition: { duration: 1.5, repeat: Infinity },
//                 }}
//                 className={`px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//                   isDarkMode
//                     ? "bg-teal-600 text-white hover:bg-teal-500"
//                     : "bg-teal-500 text-white hover:bg-teal-600"
//                 }`}
//               >
//                 Shop Now →
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src="/Product Image.png"
//               alt="Chair"
//               width={400}
//               height={300}
//               className="rounded-lg shadow-md"
//             />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//       {/* Display Products */}
//       <motion.div
//         className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {paginatedProducts.length === 0 ? (
//           <div className={`text-center py-10 ${isDarkMode ? "text-gray-400" : "text-gray-700"} col-span-full`}>
//             No products match your search.
//           </div>
//         ) : (
//           paginatedProducts.map((product) => (
//             <motion.div
//               key={product._id}
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//               whileHover={{ scale: 1.05 }}
//             >
              // <Link href={`/product/${product.slug}`}>
              //   <div className="block p-4 cursor-pointer">
              //     {product.image?.asset ? (
              //       <Image
              //         src={urlFor(product.image.asset).url()}
              //         alt={product.title || "Untitled Product"}
              //         width={300}
              //         height={200}
              //         className="w-full h-48 object-cover mb-4 rounded-md"
              //       />
              //     ) : (
              //       <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
              //         No Image Available
              //       </div>
              //     )}
              //     <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
              //     <p className="mt-2">${product.price || "N/A"}</p>
              //   </div>
              // </Link>

//               {/* Add/Remove Button */}
//               {cart.some((item) => item._id === product._id) ? (
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => removeFromCart(product._id)}
//                   className="w-full py-2 bg-red-500 text-white rounded-b-md hover:bg-red-600"
//                 >
//                   Remove from Cart
//                 </motion.button>
//               ) : (
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => addToCart(product)}
//                   className="w-full py-2 bg-teal-500 text-white rounded-b-md hover:bg-teal-600"
//                 >
//                   Add to Cart
//                 </motion.button>
//               )}
//             </motion.div>
//           ))
//         )}
//       </motion.div>

//       {/* Success Message Animation */}
//       <AnimatePresence>
//         {successMessage && (
//           <motion.div
//             className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//           >
//             {successMessage}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default Hero;
























































//   "use client"; // Ensure this is client-side rendering

//   import React, { useEffect, useState } from "react";
//   import { Product } from "@/app/types/product";
//   import { client } from "@/sanity/lib/client";
//   import { allProduct } from "@/sanity/lib/qury";
//   import { urlFor } from "@/sanity/lib/image";
//   import Link from "next/link";
//   import Image from "next/image";
//   import { motion } from "framer-motion";

//   function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [cart, setCart] = useState<string[]>([]);
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [searchTerm, setSearchTerm] = useState("");
//     const [sortOption, setSortOption] = useState("title");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [successMessage, setSuccessMessage] = useState<string | null>(null);

//     const itemsPerPage = 8;

//     // Fetch products on component mount
//     useEffect(() => {
//       async function fetchProducts() {
//         try {
//           const fetchedProducts: Product[] = await client.fetch(allProduct);
//           setProducts(fetchedProducts); // Update state only after data is fetched
//         } catch (error) {
//           console.error("Failed to fetch products:", error);
//         }
//       }
//       fetchProducts();
//     }, []);

//     // Load cart from localStorage on component mount
//     useEffect(() => {
//       const savedCart = localStorage.getItem("cart");
//       if (savedCart) {
//         try {
//           setCart(JSON.parse(savedCart)); // Update state inside useEffect
//         } catch (error) {
//           console.error("Error parsing cart from localStorage:", error);
//         }
//       }
//     }, []);

//     // Add product to cart
//     const addToCart = (productTitle: string) => {
//       setCart((prevCart) => {
//         if (!prevCart.includes(productTitle)) {
//           const updatedCart = [...prevCart, productTitle];
//           localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//           setSuccessMessage(`${productTitle} added to cart!`);
//           setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//           return updatedCart;
//         }
//         return prevCart;
//       });
//     };

//     // Remove product from cart
//     const removeFromCart = (productTitle: string) => {
//       setCart((prevCart) => {
//         const updatedCart = prevCart.filter((item) => item !== productTitle);
//         localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//         setSuccessMessage(`${productTitle} removed from cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//         return updatedCart;
//       });
//     };

//     // Filtered and Sorted Products
//     const filteredProducts = products.filter((product) =>
//       (selectedCategory === "All" || product._id === selectedCategory) &&
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//       if (sortOption === "price") return a.price - b.price;
//       if (sortOption === "title") return a.title.localeCompare(b.title);
//       return 0;
//     });

//     const paginatedProducts = sortedProducts.slice(
//       (currentPage - 1) * itemsPerPage,
//       currentPage * itemsPerPage
//     );

//     const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

//     return (
//       <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//         {/* Hero Section */}
//         <motion.div
//           className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="md:w-1/2 text-center md:text-left">
//             <p
//               className={`uppercase text-sm tracking-wide mb-4 ${
//                 isDarkMode ? "text-gray-400" : "text-gray-600"
//               }`}
//             >
//               Welcome to Chairy
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//   Best Furniture <br /> Collection For Your <br /> Interior.
// </h1>
// <div className="mt-12">
//   <Link
//     href="/Producte"
//     className={`px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//       isDarkMode
//         ? "bg-teal-600 text-white hover:bg-teal-500"
//         : "bg-teal-500 text-white hover:bg-teal-600"
//     }`}
//   >
//     Shop Now →
//   </Link>
// </div>
//           </div>
//           <motion.div
//             className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//          <motion.div
//   whileHover={{ scale: 1.05 }} // Scale up on hover
//   initial={{ opacity: 0, y: 20 }} // Initial animation
//   animate={{ opacity: 1, y: 0 }} // Fade in and slide up
//   transition={{ duration: 0.5 }} // Smooth transition
// >
//   <Image
//     src="/Product Image.png"
//     alt="Chair"
//     width={400}
//     height={300}
//     className="rounded-lg shadow-md"
//   />
// </motion.div>

//           </motion.div>
//         </motion.div>

//         {/* Filter, Search, and Sort Controls */}
//         <motion.div
//           className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <select
//             value={selectedCategory}
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="px-4 py-2 border rounded"
//           >
//             <option value="All">All Categories</option>
//             <option value="Chairs">Chairs</option>
//             <option value="Tables">Tables</option>
//             <option value="Sofas">Sofas</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
//               isDarkMode
//                 ? "bg-gray-800 text-white border-gray-600 focus:ring-teal-500"
//                 : "bg-white text-black border-gray-300 focus:ring-teal-500"
//             }`}
//           />
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//             className="px-4 py-2 border rounded"
//           >
//             <option value="title">Sort by Title</option>
//             <option value="price">Sort by Price</option>
//           </select>
//         </motion.div>

//         {/* Success Message */}
//         {successMessage && (
//           <motion.div
//             className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}
//           >
//             {successMessage}
//           </motion.div>
//         )}

//         {/* Cart Count Display */}
//         <motion.div
//           className={`flex justify-between items-center px-6 py-2 ${isDarkMode ? "bg-gray-800" : "bg-teal-500"} text-white`}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <h2 className="text-lg font-semibold">Products Available</h2>
//           <div className="bg-teal-700 rounded-full px-4 py-2 text-sm font-semibold">
//             Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
//           </div>
//         </motion.div>

//         {/* Display Products */}
//         <motion.div
//           className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           {paginatedProducts.length === 0 ? (
//             <div className={`text-center py-10 ${isDarkMode ? "text-gray-400" : "text-gray-700"} col-span-full`}>
//               No products match your search.
//             </div>
//           ) : (
//             paginatedProducts.map((product, index) => (
//               <motion.div
//                 key={product._id || `${product.slug}-${index}`}
//                 className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                   isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//                 }`}
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <Link href={`/product/${product.slug}`}>
//                   <div className="block p-4 cursor-pointer">
//                     {product.image ? (
//                       <Image
//                         src={urlFor(product.image).url()}
//                         alt={product.title || "Untitled Product"}
//                         width={300}
//                         height={200}
//                         className="w-full h-48 object-cover mb-4 rounded-md"
//                       />
//                     ) : (
//                       <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                         No Image Available
//                       </div>
//                     )}
//                     <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
//                     <p className="mt-2">${product.price || "N/A"}</p>
//                   </div>
//                 </Link>
//                 <button
//                   aria-label={`Add ${product.title || "Untitled Product"} to cart`}
//                   onClick={() => addToCart(product.title || "Untitled Product")}
//                   className={`w-full py-2 rounded-b-md transition ${
//                     isDarkMode ? "bg-teal-600 hover:bg-teal-500" : "bg-teal-500 hover:bg-teal-600"
//                   }`}
//                 >
//                   Add to Cart
//                 </button>
//                 <button
//                   aria-label={`Remove ${product.title || "Untitled Product"} from cart`}
//                   onClick={() => removeFromCart(product.title || "Untitled Product")}
//                   className={`w-full py-2 rounded-b-md transition ${
//                     isDarkMode ? "bg-red-600 hover:bg-red-500" : "bg-red-500 hover:bg-red-600"
//                   }`}
//                 >
//                   Remove from Cart
//                 </button>
//               </motion.div>
//             ))
//           )}
//         </motion.div>

//         {/* Pagination Controls */}
//         <motion.div
//           className="flex justify-center gap-4 my-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             className="px-4 py-2 bg-gray-200 rounded"
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//           <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
//           <button
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//             className="px-4 py-2 bg-gray-200 rounded"
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </motion.div>
//       </div>
//     );
//   }

//   export default Hero;


































// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";

// function Hero({ isDarkMode }: { isDarkMode: boolean }) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState<string>(""); // State for search input

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts); // Update state only after data is fetched
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart)); // Update state inside useEffect
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Add product to cart
//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   // Remove product from cart
//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//       return updatedCart;
//     });
//   };

//   // Filter products based on search query
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}>
//       {/* Hero Section */}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         <div className="md:w-1/2 text-center md:text-left">
//           <p
//             className={`uppercase text-sm tracking-wide mb-4 ${
//               isDarkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             Welcome to Chairy
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <Link
//             href="/products"
//             className={`mt-6 px-6 py-3 rounded-full text-sm font-semibold shadow-md transition ${
//               isDarkMode
//                 ? "bg-teal-600 text-white hover:bg-teal-500"
//                 : "bg-teal-500 text-white hover:bg-teal-600"
//             }`}
//           >
//             Shop Now →
//           </Link>
//         </div>
//         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="container mx-auto px-6 py-4">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
//             isDarkMode
//               ? "bg-gray-800 text-white border-gray-600 focus:ring-teal-500"
//               : "bg-white text-black border-gray-300 focus:ring-teal-500"
//           }`}
//         />
//       </div>

//       {/* Success Message */}
//       {successMessage && (
//         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
//           {successMessage}
//         </div>
//       )}

//       {/* Cart Count Display */}
//       <div className={`flex justify-between items-center px-6 py-2 ${isDarkMode ? "bg-gray-800" : "bg-teal-500"} text-white`}>
//         <h2 className="text-lg font-semibold">Products Available</h2>
//         <div className="bg-teal-700 rounded-full px-4 py-2 text-sm font-semibold">
//           Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
//         </div>
//       </div>

//       {/* Display Filtered Products */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
//         {filteredProducts.length === 0 ? (
//           <div className={`text-center py-10 ${isDarkMode ? "text-gray-400" : "text-gray-700"} col-span-full`}>
//             No products match your search.
//           </div>
//         ) : (
//           filteredProducts.map((product, index) => (
//             <div
//               key={product._id || `${product.slug}-${index}`} // Ensure a unique key for each product
//               className={`rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
//                 isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
//               }`}
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
//                   <p className="mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               <button
//                 aria-label={`Add ${product.title || "Untitled Product"} to cart`}
//                 onClick={() => addToCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode ? "bg-teal-600 hover:bg-teal-500" : "bg-teal-500 hover:bg-teal-600"
//                 }`}
//               >
//                 Add to Cart
//               </button>
//               <button
//                 aria-label={`Remove ${product.title || "Untitled Product"} from cart`}
//                 onClick={() => removeFromCart(product.title || "Untitled Product")}
//                 className={`w-full py-2 rounded-b-md transition ${
//                   isDarkMode ? "bg-red-600 hover:bg-red-500" : "bg-red-500 hover:bg-red-600"
//                 }`}
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Hero;

// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";

// function Hero() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts); // Update state only after data is fetched
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart)); // Update state inside useEffect
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Add product to cart
//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//         setSuccessMessage(`${productTitle} added to cart!`);
//         setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   // Remove product from cart
//   const removeFromCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((item) => item !== productTitle);
//       localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//       setSuccessMessage(`${productTitle} removed from cart!`);
//       setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
//       return updatedCart;
//     });
//   };

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         <div className="md:w-1/2 text-center md:text-left">
//           <p className="uppercase text-sm tracking-wide text-gray-600 mb-4">
//             Welcome to Chairy
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <Link
//             href="/products"
//             className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-teal-600 transition"
//           >
//             Shop Now →
//           </Link>
//         </div>
//         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Success Message */}
//       {successMessage && (
//         <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
//           {successMessage}
//         </div>
//       )}

//       {/* Cart Count Display */}
//       <div className="flex justify-between items-center px-6 py-2 bg-teal-500 text-white">
//         <h2 className="text-lg font-semibold">Products Available</h2>
//         <div className="bg-teal-700 rounded-full px-4 py-2 text-sm font-semibold">
//           Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
//         </div>
//       </div>

//       {/* Display Products */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
//         {products.length === 0 ? (
//           <div className="text-center py-10 text-gray-700 col-span-full">
//             Loading products...
//           </div>
//         ) : (
//           products.map((product, index) => (
//             <div
//               key={product._id || `${product.slug}-${index}`} // Ensure a unique key for each product
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {product.title || "Untitled Product"}
//                   </h3>
//                   <p className="text-gray-500 mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               <button
//                 aria-label={`Add ${product.title || "Untitled Product"} to cart`}
//                 onClick={() => addToCart(product.title || "Untitled Product")}
//                 className="w-full bg-teal-500 text-white py-2 rounded-b-md hover:bg-teal-600 transition mb-2"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 aria-label={`Remove ${product.title || "Untitled Product"} from cart`}
//                 onClick={() => removeFromCart(product.title || "Untitled Product")}
//                 className="w-full bg-red-500 text-white py-2 rounded-b-md hover:bg-red-600 transition"
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Hero;


// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";

// function Hero() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("title");
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 8;

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts); // Update state only after data is fetched
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart)); // Update state inside useEffect
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Add product to cart
//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   // Filtered and Sorted Products
//   const filteredProducts = products.filter((product) =>
//     selectedCategory === "All" || product._id === selectedCategory
//   );

//   const searchedProducts = filteredProducts.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const sortedProducts = [...searchedProducts].sort((a, b) => {
//     if (sortOption === "price") return a.price - b.price;
//     if (sortOption === "title") return a.title.localeCompare(b.title);
//     return 0;
//   });

//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         <div className="md:w-1/2 text-center md:text-left">
//           <p className="uppercase text-sm tracking-wide text-gray-600 mb-4">
//             Welcome to Chairy
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <Link
//             href="/products"
//             className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-teal-600 transition"
//           >
//             Shop Now →
//           </Link>
//         </div>
//         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Filter, Search, and Sort Controls */}
//       <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="px-4 py-2 border rounded"
//         >
//           <option value="All">All Categories</option>
//           <option value="Chairs">Chairs</option>
//           <option value="Tables">Tables</option>
//           <option value="Sofas">Sofas</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 border rounded w-1/2"
//         />
//         <select
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="px-4 py-2 border rounded"
//         >
//           <option value="title">Sort by Title</option>
//           <option value="price">Sort by Price</option>
//         </select>
//       </div>

//       {/* Cart Count Display */}
//       <div className="flex justify-between items-center px-6 py-2 bg-teal-500 text-white">
//         <h2 className="text-lg font-semibold">Products Available</h2>
//         <div className="bg-teal-700 rounded-full px-4 py-2 text-sm font-semibold">
//           Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
//         </div>
//       </div>

//       {/* Display Products */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
//         {paginatedProducts.length === 0 ? (
//           <div className="text-center py-10 text-gray-700 col-span-full">
//             No products found.
//           </div>
//         ) : (
//           paginatedProducts.map((product, index) => (
//             <div
//               key={product._id || `${product.slug}-${index}`}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt={product.title || "Untitled Product"}
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {product.title || "Untitled Product"}
//                   </h3>
//                   <p className="text-gray-500 mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               <button
//                 aria-label={`Add ${product.title || "Untitled Product"} to cart`}
//                 onClick={() => addToCart(product.title || "Untitled Product")}
//                 className="w-full bg-teal-500 text-white py-2 rounded-b-md hover:bg-teal-600 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center gap-4 my-4">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           className="px-4 py-2 bg-gray-200 rounded"
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           className="px-4 py-2 bg-gray-200 rounded"
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// "use client"; // Ensure this is client-side rendering

// import React, { useEffect, useState } from "react";
// import { Product } from "@/app/types/product";
// import { client } from "@/sanity/lib/client";
// import { allProduct } from "@/sanity/lib/qury";
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import Image from "next/image";

// function Hero() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);

//   // Fetch products on component mount
//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allProduct);
//         setProducts(fetchedProducts); // Update state only after data is fetched
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   // Load cart from localStorage on component mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       try {
//         setCart(JSON.parse(savedCart)); // Update state inside useEffect
//       } catch (error) {
//         console.error("Error parsing cart from localStorage:", error);
//       }
//     }
//   }, []);

//   // Add product to cart
//   const addToCart = (productTitle: string) => {
//     setCart((prevCart) => {
//       if (!prevCart.includes(productTitle)) {
//         const updatedCart = [...prevCart, productTitle];
//         localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//         return updatedCart;
//       }
//       return prevCart;
//     });
//   };

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16">
//         <div className="md:w-1/2 text-center md:text-left">
//           <p className="uppercase text-sm tracking-wide text-gray-600 mb-4">
//             Welcome to Chairy
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
//             Best Furniture <br /> Collection For Your <br /> Interior.
//           </h1>
//           <Link
//             href="/products"
//             className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-teal-600 transition"
//           >
//             Shop Now →
//           </Link>
//         </div>
//         <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
//           <Image
//             src="/Product Image.png"
//             alt="Chair"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Cart Count Display */}
//       <div className="flex justify-between items-center px-6 py-2 bg-teal-500 text-white">
//         <h2 className="text-lg font-semibold">Products Available</h2>
//         <div className="bg-teal-700 rounded-full px-4 py-2 text-sm font-semibold">
//           Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
//         </div>
//       </div>

//       {/* Display Products */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
//         {products.length === 0 ? (
//           <div className="text-center py-10 text-gray-700 col-span-full">
//             Loading products...
//           </div>
//         ) : (
//           products.map((product, index) => (
//             <div
//               key={product._id || `${product.slug}-${index}`} // Ensure _id or fallback to slug and index
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
//             >
//               <Link href={`/product/${product.slug}`}>
//                 <div className="block p-4 cursor-pointer">
//                   {product.image ? (
//                     <Image
//                       src={urlFor(product.image).url()} // Ensure the image URL is correctly resolved
//                       alt={product.title || "Untitled Product"} // Fallback title
//                       width={300}
//                       height={200}
//                       className="w-full h-48 object-cover mb-4 rounded-md"
//                     />
//                   ) : (
//                     <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
//                       No Image Available
//                     </div>
//                   )}
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {product.title || "Untitled Product"} {/* Fallback title */}
//                   </h3>
//                   <p className="text-gray-500 mt-2">${product.price || "N/A"}</p>
//                 </div>
//               </Link>
//               <button
//                 aria-label={`Add ${product.title || "Untitled Product"} to cart`}
//                 onClick={() => addToCart(product.title || "Untitled Product")}
//                 className="w-full bg-teal-500 text-white py-2 rounded-b-md hover:bg-teal-600 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default Hero;



       {/* <Link href={`/components/products/${product.slug?.current || product._id}`}>
  <div className="block p-4 cursor-pointer">
    {product.image ? (
      <Image
        src={urlFor(product.image).url()}
        alt={product.title || "Untitled Product"}
        width={300}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
    ) : (
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
        No Image Available
      </div>
    )}
    <h3 className="text-xl font-semibold">
      {product.title || "Untitled Product"}
    </h3>
    <p className="mt-2">${product.price || "N/A"}</p>
  </div>
</Link> */}

              {/* <Link href={`/components/products/${product._id  }`}>
  <div className="block p-4 cursor-pointer">
    {product.image ? (
      <Image
        src={urlFor(product.image).url()}
        alt={product.title || "Untitled Product"}
        width={300}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
    ) : (
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
        No Image Available
      </div>
    )}
    <h3 className="text-xl font-semibold">
      {product.title || "Untitled Product"}
    </h3>
    <p className="mt-2">${product.price || "N/A"}</p>
  </div>
</Link> */}


       {/* {product?.slug?.current ? (
  <Link href={`/product/${product.slug.current}`}>
    <div className="block p-4 cursor-pointer">
      {product.image ? (
        <Image
          src={urlFor(product.image).url()}
          alt={product.title || "Untitled Product"}
          width={300}
          height={200}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}
      <h3 className="text-xl font-semibold">{product.title || "Untitled Product"}</h3>
      <p className="mt-2">${product.price || "N/A"}</p>
    </div>
  </Link>
) : (
  <div className="text-gray-500">Invalid product link</div>
)} */}


{/*      
  <Link href={`/product/${product.slug.current}`}>


  <div className="block p-4 cursor-pointer">
    {product.image ? (
      <Image
        src={urlFor(product.image).url()}
        alt={product.title || "Untitled Product"}
        width={300}
        height={200}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
    ) : (
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
        No Image Available
      </div>
    )}
    <h3 className="text-xl font-semibold">
      {product.title || "Untitled Product"}
    </h3>
    <p className="mt-2">${product.price || "N/A"}</p>
  </div>
  <button
    onClick={() => addToCart(product.title || "Untitled Product")}
    className={`w-full py-2 rounded-b-md transition ${
      isDarkMode ? "bg-teal-600 hover:bg-teal-500" : "bg-teal-500 hover:bg-teal-600"
    }`}
  >
    Add to Cart
  </button>
  <button
    onClick={() => removeFromCart(product.title || "Untitled Product")}
    className={`w-full py-2 rounded-b-md transition ${
      isDarkMode ? "bg-red-600 hover:bg-red-500" : "bg-red-500 hover:bg-red-600"
    }`}
  >
    Remove from Cart
  </button>
</Link> */}
