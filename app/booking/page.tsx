'use client'

import { useState } from 'react'
import { Check, Clock, Shield, User } from 'lucide-react'

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    date: '',
    time: '',
    serviceType: '',
    location: '',
    specialInstructions: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceTypes = [
    'Airport Pickup/Drop-off',
    'Hotel Reservation',
    'Food & Restaurant Booking',
    'Errand & Personal Assistant',
    'VIP Services',
    'Corporate Support',
    'Custom Request',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // In a real app, this would send data to a backend
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 bg-cream-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-sm shadow-lg border border-cream-200">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">
              Thank you, {formData.fullName || 'there'}.
            </h2>
            <p className="text-lg text-luxury-text mb-6">
              Your booking request has been received.
            </p>
            <p className="text-lg text-luxury-text mb-8">
              A Concierge by Shirob representative will contact you within minutes to confirm your arrangements.
            </p>
            <p className="text-xl font-serif text-gold-500 italic">
              You're in good hands.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-gold-500 font-serif italic mb-4">
            Book Your Personal Concierge Experience.
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-dark mb-6">
            Booking
          </h1>
          <p className="text-lg text-luxury-text max-w-2xl mx-auto leading-relaxed">
            Tell us what you need — we'll assign the right assistant and confirm your booking in minutes.
            Whether it's travel coordination, food delivery, or full-day support, our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-sm shadow-lg border border-cream-200 space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-luxury-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-luxury-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-luxury-dark mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50"
                    placeholder="+1234567890"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-luxury-dark mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-luxury-dark mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-luxury-dark mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50"
                >
                  <option value="">Select a service type</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-luxury-dark mb-2">
                  Location(s) *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50"
                  placeholder="City, address, or specific location"
                />
              </div>

              <div>
                <label htmlFor="specialInstructions" className="block text-sm font-medium text-luxury-dark mb-2">
                  Special Instructions / Preferences
                </label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  rows={4}
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-luxury-dark bg-cream-50 resize-none"
                  placeholder="Any dietary requirements, accessibility needs, or special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 text-white px-8 py-4 rounded-sm hover:bg-gold-600 transition-colors font-medium text-lg"
              >
                Confirm Booking
              </button>
              
              <p className="text-sm text-luxury-text opacity-60 text-center italic">
                Your Concierge will reach out shortly.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-sm shadow-lg border border-cream-200 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-gold-500" />
                <h2 className="text-2xl font-serif font-bold text-luxury-dark">
                  Your Lifestyle, Personally Managed.
                </h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-luxury-dark">24/7 Availability</p>
                    <p className="text-sm text-luxury-text opacity-80">Always here when you need us</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-luxury-dark">Trusted, Trained Assistants</p>
                    <p className="text-sm text-luxury-text opacity-80">Professional and well-mannered</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-luxury-dark">Fast Confirmations</p>
                    <p className="text-sm text-luxury-text opacity-80">Response within minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-luxury-dark">Secure & Private Handling</p>
                    <p className="text-sm text-luxury-text opacity-80">Your information is protected</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-cream-200">
                <p className="text-sm text-luxury-text italic text-center">
                  Experience the difference of personalized service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

