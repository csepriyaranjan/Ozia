import React from "react";

export default function Collection() {
  return (
    <div className="min-h-screen bg-[#edf3f3] font-sans p-4 sm:p-8 flex flex-col items-center">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-brownsugar tracking-[0.3em] uppercase text-gray-700">
          Ozia
        </h1>
        <p className="text-1.5xl font-light tracking-[0.4em] uppercase text-gray-500 mt-1">
          Luxe Line
        </p>
      </header>

      {/*Cards */}

      <main className="flex flex-wrap justify-center items-center gap-8">
        
        <div
          className="relative flex flex-col justify-end h-90 w-96 md:w-80 lg:w-96 lg:h-[500px] p-8 rounded-lg bg-cover bg-center shadow-lg text-center text-gray-800 transition-transform transform hover:scale-105"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3769148/pexels-photo-3769148.jpeg')", // <-- your image here
          }}
        >
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-white/70 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-5xl font-brownsugar racking-widest uppercase">
              OZIA CORE
            </h2>
            <p className="mt-2 text-2xl font-light tracking-wider">Timeless Essentials</p>
          </div>
        </div>

        <div
          className="relative flex flex-col justify-end h-90 w-96 md:w-80 lg:w-96 lg:h-[500px] p-8 rounded-lg bg-cover bg-center shadow-lg text-center text-gray-800 transition-transform transform hover:scale-105"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/33428984/pexels-photo-33428984.jpeg')", // <-- your image here
          }}
        >
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-white/70 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-5xl font-brownsugar tracking-widest uppercase">
              OZIA NOIR
            </h2>
            <p className="mt-2 text-2xl font-light tracking-wider">All-Black Capsule</p>
          </div>
        </div>

        <div
          className="relative flex flex-col justify-end w-96 h-90 md:w-80 lg:w-96 lg:h-[500px] p-8 rounded-lg bg-cover bg-center shadow-lg text-center text-gray-800 transition-transform transform hover:scale-105"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/10770268/pexels-photo-10770268.jpeg')", // <-- your image here
          }}
        >
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-white/70 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-5xl font-brownsugar tracking-widest uppercase">
              OZIA ÉCLAT
            </h2>
            <p className="mt-2 text-2xl font-light tracking-wider">Evening Luxe</p>
          </div>
        </div>
      </main>
    </div>
  );
}
