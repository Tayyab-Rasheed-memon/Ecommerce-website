
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Truck, Package, MapPin } from "lucide-react";
import Link from "next/link"; // Importing Link from next.js

export default function ShipmentAnimation() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: <Package className="w-10 h-10 text-gray-500" />, text: "Order Placed" },
    { icon: <Truck className="w-10 h-10 text-gray-500" />, text: "Out for Delivery" },
    { icon: <MapPin className="w-10 h-10 text-gray-500" />, text: "Arriving Soon" },
    { icon: <CheckCircle className="w-10 h-10 text-green-500" />, text: "Delivered!" },
  ];

  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Your Order is on the Way!</h2>

        <div className="flex justify-between items-center relative py-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center ${index <= currentStep ? "text-green-500" : "text-gray-400"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <div className="p-3 bg-white shadow-md rounded-full">{step.icon}</div>
              <p className="text-sm mt-2">{step.text}</p>
            </motion.div>
          ))}

          {/* Progress Line */}
          <motion.div
            className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (currentStep + 1) / steps.length }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </motion.div>

      {currentStep === steps.length - 1 && (
        <motion.div
          className="mt-8 p-4 bg-green-100 border border-green-500 text-green-700 rounded-lg text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          🎉 Congratulations! Your order has been successfully delivered.
        </motion.div>
      )}

      {/* Back to Home Link */}
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-md shadow-md flex items-center gap-2 hover:bg-gray-900 transition"
      >
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        Back to Home
      </Link>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { CheckCircle, Truck, Package, MapPin } from "lucide-react";

// export default function ShipmentAnimation() {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = [
//     { icon: <Package className="w-10 h-10 text-gray-500" />, text: "Order Placed" },
//     { icon: <Truck className="w-10 h-10 text-gray-500" />, text: "Out for Delivery" },
//     { icon: <MapPin className="w-10 h-10 text-gray-500" />, text: "Arriving Soon" },
//     { icon: <CheckCircle className="w-10 h-10 text-green-500" />, text: "Delivered!" },
//   ];

//   useEffect(() => {
//     if (currentStep < steps.length - 1) {
//       const timer = setTimeout(() => {
//         setCurrentStep((prev) => prev + 1);
//       }, 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [currentStep]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center"
//       >
//         <h2 className="text-2xl font-semibold mb-4">Your Order is on the Way!</h2>

//         <div className="flex justify-between items-center relative py-6">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className={`flex flex-col items-center ${index <= currentStep ? "text-green-500" : "text-gray-400"}`}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.5 }}
//             >
//               <div className="p-3 bg-white shadow-md rounded-full">{step.icon}</div>
//               <p className="text-sm mt-2">{step.text}</p>
//             </motion.div>
//           ))}

//           {/* Progress Line */}
//           <motion.div
//             className="absolute top-1/2 left-0 w-full h-1 bg-gray-300"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: (currentStep + 1) / steps.length }}
//             transition={{ duration: 1 }}
//             style={{ transformOrigin: "left" }}
//           />
//         </div>
//       </motion.div>

//       {currentStep === steps.length - 1 && (
//         <motion.div
//           className="mt-8 p-4 bg-green-100 border border-green-500 text-green-700 rounded-lg text-center"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           🎉 Congratulations! Your order has been successfully delivered.
//         </motion.div>
//       )}
//     </div>
//   );
// }











// "use client";

// import { useEffect, useState } from "react";

// const DeliveryConfirmationPage = () => {
//   const [showConfetti, setShowConfetti] = useState(true);

//   // Stop confetti after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowConfetti(false);
//     }, 5000); // 5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
//       {/* Confetti Animation */}
//       {showConfetti && (
//         <div className="confetti-container">
//           {[...Array(100)].map((_, i) => (
//             <div key={i} className={`confetti confetti-${i % 10}`}></div>
//           ))}
//         </div>
//       )}

//       {/* Delivery Message */}
//       <div className="bg-white p-8 rounded-lg shadow-lg text-center z-10">
//         <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Order Delivered!</h1>
//         <p className="text-gray-700 text-lg mb-6">
//           Your order has been successfully delivered. Thank you for shopping with us!
//         </p>
//         <button
//           className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition-colors"
//           onClick={() => alert("Continue shopping!")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DeliveryConfirmationPage;
// "use client";

// import { useState } from "react";
// import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaBitcoin } from "react-icons/fa";
// import { SiCoinbase, SiKlarna } from "react-icons/si";

// const PaymentPage = () => {
//   const [selectedPayment, setSelectedPayment] = useState("");
//   const [billingAddress, setBillingAddress] = useState("");
//   const [shippingAddress, setShippingAddress] = useState("");

//   const handlePaymentChange = (method: string) => {
//     setSelectedPayment(method);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
//       <p className="text-gray-600 text-sm mb-4">All transactions are secure and encrypted.</p>

//       {/* Order Summary */}
//       <div className="border rounded-md p-4 mb-6">
//         <h2 className="text-xl font-semibold mb-3">Order Summary</h2>
//         <div className="flex justify-between text-gray-700">
//           <span>Product Name</span>
//           <span>$50.00</span>
//         </div>
//         <div className="flex justify-between text-gray-700">
//           <span>Shipping</span>
//           <span>$5.00</span>
//         </div>
//         <div className="flex justify-between text-lg font-semibold mt-2">
//           <span>Total</span>
//           <span>$55.00</span>
//         </div>
//       </div>

//       {/* Shipping Information */}
//       <div className="border rounded-md p-4 mb-6">
//         <h2 className="text-xl font-semibold mb-3">Shipping Address</h2>
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="w-full border p-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Street Address"
//           className="w-full border p-2 mb-2"
//           value={shippingAddress}
//           onChange={(e) => setShippingAddress(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="City"
//           className="w-full border p-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Postal Code"
//           className="w-full border p-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="w-full border p-2 mb-2"
//         />
//       </div>

//       {/* Billing Information */}
//       <div className="border rounded-md p-4 mb-6">
//         <h2 className="text-xl font-semibold mb-3">Billing Address</h2>
//         <label className="flex items-center space-x-2 mb-3">
//           <input
//             type="checkbox"
//             onChange={() => setBillingAddress(shippingAddress)}
//           />
//           <span>Same as Shipping Address</span>
//         </label>
//         <input
//           type="text"
//           placeholder="Street Address"
//           className="w-full border p-2 mb-2"
//           value={billingAddress}
//           onChange={(e) => setBillingAddress(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="City"
//           className="w-full border p-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Postal Code"
//           className="w-full border p-2 mb-2"
//         />
//       </div>

//       {/* Payment Options */}
//       <div className="border rounded-md p-4 space-y-3">
//         <h2 className="text-xl font-semibold mb-3">Payment Method</h2>

//         {/* Credit Card */}
//         <label className="flex items-center space-x-3 cursor-pointer">
//           <input
//             type="radio"
//             name="payment"
//             value="credit_card"
//             checked={selectedPayment === "credit_card"}
//             onChange={() => handlePaymentChange("credit_card")}
//             className="form-radio text-blue-500"
//           />
//           <span className="text-lg font-medium">Credit Card</span>
//           <div className="ml-auto flex space-x-2 text-gray-500">
//             <FaCcVisa size={30} />
//             <FaCcMastercard size={30} />
//             <FaCcAmex size={30} />
//           </div>
//         </label>

//         {/* PayPal */}
//         <label className="flex items-center space-x-3 cursor-pointer">
//           <input
//             type="radio"
//             name="payment"
//             value="paypal"
//             checked={selectedPayment === "paypal"}
//             onChange={() => handlePaymentChange("paypal")}
//             className="form-radio text-blue-500"
//           />
//           <FaPaypal size={30} className="text-blue-600" />
//           <span className="text-lg font-medium">PayPal</span>
//         </label>

//         {/* Klarna */}
//         <label className="flex items-center space-x-3 cursor-pointer">
//           <input
//             type="radio"
//             name="payment"
//             value="klarna"
//             checked={selectedPayment === "klarna"}
//             onChange={() => handlePaymentChange("klarna")}
//             className="form-radio text-blue-500"
//           />
//           <SiKlarna size={30} className="text-pink-500" />
//           <span className="text-lg font-medium">Buy now, pay later with Klarna</span>
//         </label>

//         {/* Coinbase Commerce */}
//         <label className="flex items-center space-x-3 cursor-pointer">
//           <input
//             type="radio"
//             name="payment"
//             value="coinbase"
//             checked={selectedPayment === "coinbase"}
//             onChange={() => handlePaymentChange("coinbase")}
//             className="form-radio text-blue-500"
//           />
//           <SiCoinbase size={30} className="text-blue-500" />
//           <span className="text-lg font-medium">Coinbase Commerce</span>
//           <div className="ml-auto flex space-x-2 text-gray-500">
//             <FaBitcoin size={30} />
//           </div>
//         </label>

//         {/* Coinbase Commerce Redirect Message */}
//         {selectedPayment === "coinbase" && (
//           <div className="p-3 bg-gray-100 rounded-md text-center text-sm text-gray-600">
//             After clicking <strong>"Complete Order"</strong>, you will be redirected to Coinbase Commerce to complete your purchase securely.
//           </div>
//         )}
//       </div>

//       {/* Complete Order Button */}
//       <button
//         className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium"
//         disabled={!selectedPayment}
//       >
//         Complete Order
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;
