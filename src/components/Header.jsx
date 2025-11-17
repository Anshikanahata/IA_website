import { useState } from 'react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  // Modern India images for header background gallery
  // Add your image filenames here (place them in the /public folder)
  const modernIndiaImages = [
    '/india-1.jpg',
    '/india-2.jpg',
    '/india-3.jpg',
    '/india-4.jpg',
    '/india-5.jpg',
  ]

  // Try different logo formats - use whichever exists
  // Priority: SVG > PNG > JPG
  const logoPath = '/logo.svg' // Change to /logo.png or /logo.jpg if using those formats

  return (
    <header className="relative bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm overflow-hidden">
      {/* Modern India Images Background Gallery */}
      <div className="absolute inset-0 opacity-15">
        <div className="flex h-full">
          {modernIndiaImages.map((img, index) => (
            <div
              key={index}
              className="flex-1 bg-cover bg-center border-r border-white/20 last:border-r-0"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              {!logoError ? (
                <img
                  src={logoPath}
                  alt="India Avenue Investment Management"
                  className="h-12 w-auto max-w-[200px] object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="text-2xl font-light">
                  <span className="text-indigo-900">India Avenue</span>
                  <span className="text-saffron-500 ml-2">→</span>
                </div>
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Investment Approach</a>
            <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Insights</a>
            <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Contact</a>
            <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              InvestNow
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Investment Approach</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Insights</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Contact</a>
              <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full">
                InvestNow
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

