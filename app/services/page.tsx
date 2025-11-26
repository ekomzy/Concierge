import Link from 'next/link'
import { ArrowRight, Plane, Hotel, Utensils, Coffee, User, Car, ShoppingBag, Map, Briefcase, Clock, Zap, Gift, Heart, Globe } from 'lucide-react'

export default function Services() {
  const signatureServices = [
    {
      icon: <Plane className="w-6 h-6" />,
      emoji: '✈',
      title: 'Airport Pickups & Drop-offs',
      description: 'Reliable, punctual chauffeurs ensuring your arrival and departure are effortless.',
    },
    {
      icon: <Hotel className="w-6 h-6" />,
      emoji: '🏨',
      title: 'Hotel Reservations & Ratings Guide',
      description: 'We match you with trusted hotels, based on your preferences, purpose, and budget.',
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      emoji: '🍽',
      title: 'Diet-Conscious Food Ordering & Restaurant Booking',
      description: 'Vegan, keto, halal, gluten-free? We handle every detail and deliver on time.',
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      emoji: '☕',
      title: 'Café & Food Assistant',
      description: 'Table reservations, special orders, or curated coffee spots — we handle it.',
    },
    {
      icon: <User className="w-6 h-6" />,
      emoji: '🧍‍♀',
      title: 'In-Person Standby Assistant',
      description: 'A trained, well-mannered personal assistant available on-site to help you with errands, directions, or any last-minute needs.',
    },
  ]

  const additionalServices = [
    { icon: <Car className="w-5 h-5" />, emoji: '💼', title: 'Chauffeur & Car Rental' },
    { icon: <ShoppingBag className="w-5 h-5" />, emoji: '🛍', title: 'Personal Shopping & Errand Handling' },
    { icon: <Map className="w-5 h-5" />, emoji: '🗺', title: 'Tour & Leisure Experience Planning' },
    { icon: <Briefcase className="w-5 h-5" />, emoji: '🏢', title: 'Corporate Guest & Business Travel Support' },
    { icon: <Clock className="w-5 h-5" />, emoji: '🕓', title: 'Daily Schedule & Reminder Coordination' },
    { icon: <Zap className="w-5 h-5" />, emoji: '🚀', title: 'VIP Airport Fast Track Services' },
    { icon: <Gift className="w-5 h-5" />, emoji: '🎁', title: 'Luxury Gifting & Welcome Hampers' },
    { icon: <Heart className="w-5 h-5" />, emoji: '❤️', title: 'Health & Emergency Assistance' },
    { icon: <Globe className="w-5 h-5" />, emoji: '🌍', title: 'Local Guide & Translation Support' },
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Page Header */}
      <section className="bg-cream-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gold-500 font-serif italic mb-4">
              Our Signature Services — tailored to your lifestyle.
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-dark mb-6">
              Services
            </h1>
            <p className="text-lg text-luxury-text leading-relaxed">
              Every journey is unique — your assistance should be too.
              Explore our curated list of lifestyle and travel services, designed to make your life smoother, smarter, and more satisfying.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-12 text-center">
            Signature Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureServices.map((service, index) => (
              <div
                key={index}
                className="bg-cream-50 p-8 rounded-sm border border-cream-200 hover:shadow-lg transition-all duration-300 hover:border-gold-500"
              >
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="text-xl font-serif font-semibold text-luxury-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-luxury-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-12 text-center">
            Additional Concierge Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-sm border border-cream-200 hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                <div className="text-2xl">{service.emoji}</div>
                <h3 className="text-lg font-medium text-luxury-dark">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-serif text-luxury-dark mb-8">
              Whatever your need, we're ready to make it happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="bg-gold-500 text-white px-8 py-4 rounded-sm hover:bg-gold-600 transition-colors font-medium text-lg flex items-center justify-center gap-2 group"
              >
                Chat with Concierge
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/booking"
                className="bg-transparent border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-sm hover:bg-gold-500 hover:text-white transition-all duration-300 font-medium text-lg"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

