import React from "react";
import { Link } from "react-router-dom";

export default function EndHero() {
  return (
    <div className="min-h-screen py-4 bg-[#edf3f3]">
      <div className="text-center">
        <h1 className="text-7xl sm:text-9xl font-brownsugar uppercase text-gray-700">
          OZIA
        </h1>
        <p className="text-2xl font-light font-sans text-gray-800">
          A powerful mix of fashion, identity & minimal luxury!
        </p>
      </div>
      <div className="py-4 flex items-center justify-center">
        <div
          className="relative sm:h-[600px] sm:w-[1200px] w-96 h-[400px] bg-cover bg-center rounded-t-4xl overflow-hidden flex flex-col justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/33456869/pexels-photo-33456869.jpeg')",
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-white/50"></div>

          {/* Centered text */}
          <div className="relative z-10 px-6 text-center">
            <p className="text-1xl sm:px-24 sm:pt-32 sm:text-2xl mb-5 font-light text-gray-900 tracking-wider">
              At OZIA, we believe fashion is more than style — it’s a language
              of confidence. Blending bold designs with timeless silhouettes, we
              create pieces that elevate your everyday moments.
            </p>

            <Link to="/" className="text-1xl bg-[#edf3f3] font-light rounded-sm py-2 px-4"><span>Explore Collections</span></Link>
            
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-0 h-10 w-full bg-[#edf3f3]"></div>
        </div>
      </div>
    </div>
  );
}
