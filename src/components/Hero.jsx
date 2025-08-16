import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#edf3f3] flex items-center justify-center">
      <div
        className="relative sm:h-[700px] sm:w-[1000px] w-96 h-[500px] top-0 bg-cover bg-center rounded-t-4xl rounded-b-none overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/19983294/pexels-photo-19983294.jpeg')",
        }}
      >
        {/* Bottom bar */}
        <div className="absolute bottom-0 h-10 w-full bg-[#edf3f3]"></div>
      </div>
    </div>
  );
}
