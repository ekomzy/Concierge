import Link from "next/link";
import { ArrowRight, Check, Plane, Hotel, Utensils, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {/* use single quotes for the outer className so inner double quotes in the data URL don't break JSX */}
          <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-luxury-dark mb-6 leading-tight">
              Welcome to The Concierge by Shirob
            </h1>
            <p className="text-xl md:text-2xl text-luxury-text mb-4 font-light italic">
              Your lifestyle, perfectly managed.
            </p>
            <p className="text-lg md:text-xl text-luxury-text mb-8 max-w-2xl mx-auto leading-relaxed">
              We go beyond bookings — we deliver real-time, in-person lifestyle
              assistance that makes every moment of your journey seamless,
              stylish, and stress-free.
            </p>
            <p className="text-xl md:text-2xl font-serif text-gold-500 mb-10 font-semibold">
              Live smarter. Travel easier. Experience luxury — redefined.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/services"
                className="bg-gold-500 text-white px-8 py-4 rounded-sm hover:bg-gold-600 transition-all duration-300 font-medium text-lg flex items-center gap-2 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/chat"
                className="bg-transparent border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-sm hover:bg-gold-500 hover:text-white transition-all duration-300 font-medium text-lg"
              >
                Chat with Concierge
              </Link>
              <Link
                href="/membership"
                className="bg-white border-2 border-gold-500 text-gold-500 px-6 py-3 rounded-sm hover:bg-gold-500 hover:text-white transition-all duration-300 font-medium text-lg"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-6">
              A Personal Touch to Modern Living.
            </h2>
            <p className="text-lg text-luxury-text mb-6 leading-relaxed">
              The Concierge by Shirob is more than a service — it's a presence.
            </p>
            <p className="text-lg text-luxury-text mb-8 leading-relaxed">
              Our trained lifestyle assistants handle your logistics, errands,
              and comfort in real time — from the moment you land to your final
              meeting.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-luxury-text text-base md:text-lg">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-gold-500" />
                <span>Airport pickups</span>
              </div>
              <div className="flex items-center gap-2">
                <Hotel className="w-5 h-5 text-gold-500" />
                <span>Hotel bookings</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-gold-500" />
                <span>Food assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gold-500" />
                <span>On-ground standby</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gold-500">💼</span>
                <span>Corporate support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Services Preview */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark text-center mb-12">
            Signature Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-cream-200">
              <div className="text-4xl mb-4">✈</div>
              <h3 className="text-2xl font-serif font-semibold text-luxury-dark mb-4">
                Airport Pickups & Drop-offs
              </h3>
              <p className="text-luxury-text leading-relaxed">
                Arrive and depart in comfort with punctual, trusted drivers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-cream-200">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-2xl font-serif font-semibold text-luxury-dark mb-4">
                Hotel Reservations & Ratings Guide
              </h3>
              <p className="text-luxury-text leading-relaxed">
                Stay where comfort meets class, personalized to you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-cream-200">
              <div className="text-4xl mb-4">🍽</div>
              <h3 className="text-2xl font-serif font-semibold text-luxury-dark mb-4">
                Diet-Conscious Dining & Restaurant Booking
              </h3>
              <p className="text-luxury-text leading-relaxed">
                From vegan to keto, we serve your taste and timing.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 font-medium text-lg transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark text-center mb-12">
              Why Choose Us
            </h2>

            <div className="space-y-4 mb-8">
              {[
                "Real-time, in-person assistance",
                "24/7 professional support",
                "Personalized to your lifestyle",
                "Trusted local partnerships",
                "Premium hospitality experience",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-luxury-text">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-xl font-serif text-gold-500 mb-8 italic">
              Because life deserves a personal touch.
            </p>

            <div className="text-center">
              <Link
                href="/chat"
                className="inline-block bg-gold-500 text-white px-8 py-4 rounded-sm hover:bg-gold-600 transition-colors font-medium text-lg"
              >
                Meet Your Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-6">
              Ready to simplify your lifestyle?
            </h2>
            <p className="text-xl md:text-2xl font-serif text-gold-500 mb-8 italic">
              Experience The Concierge by Shirob — your world, personally
              managed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/chat"
                className="bg-gold-500 text-white px-8 py-4 rounded-sm hover:bg-gold-600 transition-colors font-medium text-lg"
              >
                Start Now
              </Link>
              <Link
                href="/booking"
                className="bg-transparent border-2 border-gold-500 text-gold-500 px-8 py-4 rounded-sm hover:bg-gold-500 hover:text-white transition-all duration-300 font-medium text-lg"
              >
                Book a Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
