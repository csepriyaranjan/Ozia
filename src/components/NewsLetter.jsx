import React from "react";
import { useState } from "react";

export default function NewsLetter(){
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle the form submission here (e.g., API call)
    console.log('Submitted email:', email);
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <div className="bg-[#edf3f3] font-sans py-14 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sans font-light text-gray-800 mb-4">
          Sign Up for <span className="font-brownsugar">OZIA</span> Exclusives
        </h2>
        <p className="text-gray-600 font-light max-w-xl mx-auto mb-8">
          Be the first to know about collection drops, exclusive offers, and all things OZIA. Get early access and personalized style stories delivered to your inbox.
        </p>
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="John@example.com"
            required
            className="w-full sm:flex-1 bg-white border border-gray-300 rounded-md py-3 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto border-none bg-gray-900 text-white font-semibold py-3 px-8 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            <span className="text-lg">+</span>
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </div>
  );
};
