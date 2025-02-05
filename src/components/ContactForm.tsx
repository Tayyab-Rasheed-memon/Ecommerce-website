"use client";

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [darkMode, setDarkMode] = useState(false);
  const [showMessagePreview, setShowMessagePreview] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "message") {
      setCharacterCount(value.length); // Update character count for the message field
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email format.");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setCharacterCount(0); // Reset character count
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePreview = () => {
    setShowMessagePreview(!showMessagePreview);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen p-6 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-blue-500 to-purple-600 text-gray-800"
      }`}
    >
      <ToastContainer />
      <motion.div
        className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-8 max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <label
              htmlFor="name"
              className={`block font-medium mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
              }`}
              placeholder="Enter your name"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <label
              htmlFor="email"
              className={`block font-medium mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
              }`}
              placeholder="Enter your email"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <label
              htmlFor="message"
              className={`block font-medium mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
              }`}
              placeholder="Enter your message"
              rows={5}
              maxLength={500} // Limit characters to 500
            />
            <div className="text-right text-sm mt-1">
              <span
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {characterCount}/500 characters
              </span>
            </div>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
          <motion.button
            type="button"
            onClick={handlePreview}
            className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMessagePreview ? "Hide Preview" : "Show Preview"}
          </motion.button>
        </form>
        {showMessagePreview && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-100 dark:bg-gray-700">
            <h3 className="font-bold text-lg mb-2">Message Preview:</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;

// "use client";

// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       toast.error("Invalid email format.");
//       return;
//     }

//     toast.success("Message sent successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <ToastContainer />
//       <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//             Your Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border rounded w-full px-3 py-2"
//             placeholder="Enter your name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border rounded w-full px-3 py-2"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="border rounded w-full px-3 py-2"
//             placeholder="Enter your message"
//             rows={4}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


// "use client";

// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [newsletterEmail, setNewsletterEmail] = useState("");
//   const [newsletterMessage, setNewsletterMessage] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewsletterEmail(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     let valid = true;
//     const newErrors = { name: "", email: "", message: "" };

//     if (!formData.name) {
//       newErrors.name = "Name is required.";
//       valid = false;
//     }
//     if (!formData.email) {
//       newErrors.email = "Email is required.";
//       valid = false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format.";
//       valid = false;
//     }
//     if (!formData.message) {
//       newErrors.message = "Message is required.";
//       valid = false;
//     }

//     if (!valid) {
//       setErrors(newErrors);
//       return;
//     }

//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setErrors({ name: "", email: "", message: "" });
//   };

//   const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Newsletter subscription submitted:", newsletterEmail);
//     setNewsletterMessage("Thank you for subscribing!");
//     setNewsletterEmail(""); // Reset newsletter email
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold text-center mb-8">Get In Touch With Us</h2>
//       <p className="text-center mb-12 text-gray-600">
//         For more information about our products & services, please feel free to drop us
//         an email. Our staff is always here to help you out. Do not hesitate!
//       </p>

//       {/* Contact Form */}
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//         <div>
//           <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//             Your Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//               errors.name ? "border-red-500" : ""
//             }`}
//             aria-required="true"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//               errors.email ? "border-red-500" : ""
//             }`}
//             aria-required="true"
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>
//         <div>
//           <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
//             Subject
//           </label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             placeholder="Enter the subject"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="md:col-span-2">
//           <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Write your message"
//             className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 ${
//               errors.message ? "border-red-500" : ""
//             }`}
//             aria-required="true"
//           />
//           {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//         </div>
//         <div className="md:col-span-2">
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             aria-label="Send Message"
//           >
//             Send Message
//           </button>
//         </div>
//       </form>

//       {/* Newsletter Section */}
//       <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
//         <img
//           src="/Image (2).png" // Replace with your actual image path
//           alt="Newsletter"
//           className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-8"
//         />
//         <div className="flex-grow">
//           <h3 className="text-2xl font-bold text-center md:text-left mb-4">
//             Subscribe to Our Newsletter
//           </h3>
//           <p className="text-center md:text-left mb-6 text-gray-600">
//             Stay updated with the latest news and special offers from us.
//           </p>
//           {newsletterMessage && (
//             <p className="text-green-500 text-center mb-4">{newsletterMessage}</p>
//           )}
//           <form
//             onSubmit={handleNewsletterSubmit}
//             className="flex flex-col sm:flex-row justify-center items-center gap-4"
//           >
//             <input
//               type="email"
//               value={newsletterEmail}
//               onChange={handleNewsletterChange}
//               placeholder="Enter your email"
//               className="shadow appearance-none border rounded w-full sm:w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               aria-label="Subscribe to Newsletter"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



























// "use client";

// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [newsletterEmail, setNewsletterEmail] = useState("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleNewsletterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewsletterEmail(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
//   };

//   const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Newsletter subscription submitted:", newsletterEmail);
//     setNewsletterEmail(""); // Reset newsletter email
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold text-center mb-8">Get In Touch With Us</h2>
//       <p className="text-center mb-12 text-gray-600">
//         For more information about our products & services, please feel free to drop us
//         an email. Our staff is always here to help you out. Do not hesitate!
//       </p>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//         <div>
//           <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//             Your Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
//             Subject
//           </label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             placeholder="Enter the subject"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="md:col-span-2">
//           <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Write your message"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
//             required
//           />
//         </div>
//         <div className="md:col-span-2">
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             aria-label="Send Message"
//           >
//             Send Message
//           </button>
//         </div>
//       </form>

//       {/* Newsletter Section */}
//       <div className="bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
//         {/* Image Tag */}
//         <img
//           src="/Image (2).png" // Replace with your image path
//           alt="Newsletter"
//           className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-8"
//         />
//         <div className="flex-grow">
//           <h3 className="text-2xl font-bold text-center md:text-left mb-4">
//             Subscribe to Our Newsletter
//           </h3>
//           <p className="text-center md:text-left mb-6 text-gray-600">
//             Stay updated with the latest news and special offers from us.
//           </p>
//           <form
//             onSubmit={handleNewsletterSubmit}
//             className="flex flex-col sm:flex-row justify-center items-center gap-4"
//           >
//             <input
//               type="email"
//               value={newsletterEmail}
//               onChange={handleNewsletterChange}
//               placeholder="Enter your email"
//               className="shadow appearance-none border rounded w-full sm:w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               aria-label="Subscribe to Newsletter"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
