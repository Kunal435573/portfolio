"use client";

import { useState } from "react";

function Newsletter() {
  const [result, setResult] = useState("");

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "0b8f7a37-337d-4d67-8a3b-217dd74ffbb2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed successfully!");
      (e.target as HTMLFormElement).reset();
    } else {
      setResult("Error submitting form. Try again.");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email address"
          className="bg-gray-100 px-4 py-2 rounded-lg outline-none text-sm text-black border border-gray-200"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Subscribe
        </button>
      </form>
      {result && <p className="text-xs mt-2 text-gray-500">{result}</p>}
    </div>
  );
}

export default function Footer() {
 return (
  <footer id="reviews" className="scroll-mt-20 w-full bg-black text-white ...">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold text-black mb-1">Stay inspired.</h3>
          <p className="text-sm text-gray-500 mb-4">
            Get new insights, tutorials and behind-the-scenes straight to your inbox.
          </p>
          <Newsletter />
        </div>

        {/* Left Side: Copyright */}
        <p className="text-sm font-medium text-gray-500">
          © {new Date().getFullYear()} Kunal Pandey. All rights reserved.
        </p>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Kunal435573"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}
