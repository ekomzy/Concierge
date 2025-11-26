import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-luxury-dark text-cream-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">
              The Concierge by Shirob
            </h3>
            <p className="text-sm text-cream-200">
              Your lifestyle, perfectly managed.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-gold-400 transition-colors">
                  Chat with Concierge
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-gold-400 transition-colors">
                  Book a Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-cream-200">
              24/7 Professional Support
            </p>
            <p className="text-sm text-cream-200 mt-2">
              Available around the clock
            </p>
          </div>
        </div>
        
        <div className="border-t border-cream-300 mt-8 pt-8 text-center text-sm text-cream-200">
          <p>&copy; {new Date().getFullYear()} The Concierge by Shirob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

