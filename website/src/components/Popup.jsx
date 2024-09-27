import { useState } from 'react'

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOverlay = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-lg font-bold">My App</div>
          <button
            className="text-3xl"
            onClick={toggleOverlay}
            aria-label="Toggle Menu"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-black bg-opacity-75 h-full z-20 flex flex-col justify-center items-center transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          onClick={toggleOverlay}
          className="absolute top-5 right-5 text-2xl"
          aria-label="Close Menu"
        >
          &times;
        </button>
        <nav className="space-y-6 text-xl text-gray-700">
          <a href="#home" className="block">
            Home
          </a>
          <a href="#about" className="block">
            About
          </a>
          <a href="#services" className="block">
            Services
          </a>
          <a href="#contact" className="block">
            Contact
          </a>
        </nav>
      </div>

      {/* Content */}
      <div className="pt-20 p-4">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        <p className="mt-4">Here is some content for the page...</p>
      </div>
    </div>
  )
}

export default Popup
