import React from 'react'

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse -z-10" style={{ transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse -z-10" style={{ transform: 'translate(30%, 30%)' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse -z-10" style={{ transform: 'translate(-50%, -50%)' }} />

        <div className="text-indigo-700 text-4xl md:text-5xl font-extrabold mb-4 drop-shadow">
          Welcome to My Application
        </div>
        <p className="text-indigo-500 text-lg mb-8 max-w-xl text-center">
          Build, manage, and grow your content easily with our modern CMS platform. Start your journey now!
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-xl text-lg font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
          Get Started
        </button>
      </section>
    </>
  )
}
