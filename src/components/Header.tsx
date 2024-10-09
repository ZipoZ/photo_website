import React from 'react'
import { Link } from 'react-router-dom'
import { Camera } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Camera size={32} />
          <span className="text-2xl font-bold">Jane Doe Photography</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/workshops" className="hover:text-gray-300">Workshops</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header