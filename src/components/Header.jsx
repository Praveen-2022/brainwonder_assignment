import React from 'react'

const Header = () => {
  return (
    <header className="bg-white bg-opacity-10 backdrop-blur-md shadow-md top-0">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Brain Wonders</h1>
      <nav className="flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">Download as PDF</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
      </nav>
    </div>
  </header>
  )
}

export default Header