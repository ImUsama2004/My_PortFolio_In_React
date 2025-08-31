import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export const Footer = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lmsa5mh',    // Replace with your Service ID from EmailJS
      'template_931yalq',   // Replace with your Template ID from EmailJS
      form.current,
      'YqLUNUIx7OgyzXx-c'     // Replace with your Public Key / User ID
    )
    .then(
      (result) => {
        setSuccessMessage('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        setSuccessMessage('Failed to send message. Try again later.');
      }
    );
  };

  return (
    <div id='Contact' className=' text-white p-10 md:p-12'>
      <div className="md:flex md:flex-row flex-col justify-around items-start gap-10">

        {/* Heading */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-2 mb-6 md:mb-0"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-2xl md:text-6xl font-bold text-[#38bdf8]'>Contact</h1>
          <h3 className='text-sm md:text-2xl font-normal text-[#38bdf8]'>Feel Free To Contact</h3>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-full md:w-1/2"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
          />
          <button
            type="submit"
            className="bg-[#38bdf8] text-black font-semibold py-3 rounded hover:bg-blue-400 transition"
          >
            Send Message
          </button>
          {successMessage && <p className="text-green-400 mt-2">{successMessage}</p>}
        </motion.form>

      </div>
    </div>
  );
};
