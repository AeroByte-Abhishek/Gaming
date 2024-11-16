import React from 'react'

function App() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* for better readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-end justify-center h-full px-14 text-white">
          <h1 className="text-6xl mr-[2.5vw] font-bold leading-tight drop-shadow-4xl">
            JOIN THE GAME
          </h1>
          <h3 className="mt-4 mr-[3vw] max-w-md text-gray-300 text-lg leading-relaxed">
            Experience the thrill of immersive gameplay, epic battles, a
            limitless fun. Whether you're a casual player or a hardcore gamer,
            we've got something for everyone. Gear up, take control, and make
            every moment legendary!
          </h3>
        </div>
      </div>
    </>
  )
}

export default App
