import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('your_stripe_publishable_key')

interface Workshop {
  id: number
  title: string
  date: string
  description: string
  price: number
}

const WorkshopDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  // Mock workshop data (in a real app, this would come from an API)
  const workshop: Workshop = {
    id: parseInt(id || '0'),
    title: 'Mastering Portrait Lighting',
    date: 'June 15, 2024',
    description: 'Learn the art of portrait lighting in this hands-on workshop. We\'ll cover various lighting techniques, equipment usage, and how to create stunning portraits in different settings.',
    price: 299,
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const stripe = await stripePromise

    // In a real application, you would make an API call to your server to create a Stripe Checkout session
    // and receive the session ID. For this example, we'll use a mock session ID.
    const sessionId = 'mock_session_id'

    const result = await stripe?.redirectToCheckout({
      sessionId: sessionId,
    })

    if (result?.error) {
      // Handle any errors from Stripe
      console.error(result.error)
    }
  }

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">{workshop.title}</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-xl mb-4">Date: {workshop.date}</p>
          <p className="text-gray-700 mb-6">{workshop.description}</p>
          <p className="text-2xl font-bold mb-8">Price: ${workshop.price}</p>
          
          <h2 className="text-2xl font-semibold mb-4">Sign Up for This Workshop</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300">
              Sign Up and Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WorkshopDetails