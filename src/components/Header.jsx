import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [logoPath, setLogoPath] = useState('/Logo.jpg')

  // Try different logo paths if the first one fails
  const tryAlternativeLogoPaths = () => {
    const alternatives = ['/logo.jpg', '/logo.png', '/Logo.png', '/Logo.JPG']
    const currentIndex = alternatives.indexOf(logoPath)
    if (currentIndex < alternatives.length - 1) {
      setLogoPath(alternatives[currentIndex + 1])
      setLogoError(false)
    } else {
      setLogoError(true)
    }
  }

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="relative bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="relative max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center z-10 -ml-1 sm:-ml-2">
            <Link to="/" className="flex items-center">
              {!logoError ? (
                <img
                  src={logoPath}
                  alt="India Avenue Investment Management"
                  className="h-16 md:h-20 w-auto max-w-[300px] md:max-w-[360px] object-contain"
                  style={{ 
                    backgroundColor: 'transparent',
                    display: 'block',
                    mixBlendMode: 'normal'
                  }}
                  onError={(e) => {
                    console.error('Logo image failed to load:', logoPath)
                    tryAlternativeLogoPaths()
                  }}
                  onLoad={() => {
                    console.log('Logo image loaded successfully:', logoPath)
                  }}
                />
              ) : (
                <div className="text-3xl font-light">
                  <span className="text-indigo-900">India Avenue</span>
                  <span className="text-saffron-500 ml-2">→</span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Home</Link>
            
            {/* About Us Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-indigo-900 transition-colors font-medium flex items-center"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                About Us
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-layered-xl transition-all duration-300 z-50 border border-gray-100 ${
                openDropdown === 'about' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="py-2">
                  <Link to="/about/our-journey" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Our Journey</Link>
                  <Link to="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">The Team</Link>
                  <Link to="/about/board-of-directors" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Board of Directors</Link>
                  <Link to="/about/investment-committee" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Investment Committee</Link>
                </div>
              </div>
            </div>

            {/* Why Invest Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-indigo-900 transition-colors font-medium flex items-center"
                onMouseEnter={() => setOpenDropdown('why-invest')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                Why Invest?
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-layered-xl transition-all duration-300 z-50 border border-gray-100 ${
                openDropdown === 'why-invest' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setOpenDropdown('why-invest')}
              onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="py-2">
                  <Link to="/why-invest/why-india" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Why India</Link>
                  <Link to="/why-invest/why-india-avenue" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Why India Avenue</Link>
                  <Link to="/why-invest/esg-philosophy" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Our ESG Philosophy</Link>
                </div>
              </div>
            </div>

            {/* Our Funds Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-indigo-900 transition-colors font-medium flex items-center"
                onMouseEnter={() => setOpenDropdown('funds')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                Our Funds
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-layered-xl transition-all duration-300 z-50 border border-gray-100 ${
                openDropdown === 'funds' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setOpenDropdown('funds')}
              onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="py-2">
                  <Link to="/funds/equity-fund" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">India Avenue Equity Fund</Link>
                  <Link to="/funds/india-2030-fund" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">India 2030 Fund</Link>
                </div>
              </div>
            </div>

            <Link to="/active-etf" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Active ETF</Link>
            
            {/* Insights Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-indigo-900 transition-colors font-medium flex items-center"
                onMouseEnter={() => setOpenDropdown('insights')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                Insights
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-layered-xl transition-all duration-300 z-50 border border-gray-100 ${
                openDropdown === 'insights' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setOpenDropdown('insights')}
              onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="py-2">
                  <Link to="/insights/research" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Research</Link>
                  <Link to="/insights/grassroots-experience" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Grassroots Experience</Link>
                  <Link to="/insights/media" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">India Avenue in Media</Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Contact</Link>
            
            <button className="group bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-layered hover:shadow-layered-lg transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:ring-offset-2">
              <span className="flex items-center">
                InvestNow
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
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
              <Link to="/" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              <div>
                <button className="text-gray-700 hover:text-indigo-900 transition-colors font-medium w-full text-left flex items-center justify-between" onClick={() => setOpenDropdown(openDropdown === 'about-mobile' ? null : 'about-mobile')}>
                  About Us
                  <svg className={`w-4 h-4 transform transition-transform ${openDropdown === 'about-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'about-mobile' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/about/our-journey" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Our Journey</Link>
                    <Link to="/about/team" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>The Team</Link>
                    <Link to="/about/board-of-directors" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Board of Directors</Link>
                    <Link to="/about/investment-committee" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Investment Committee</Link>
                  </div>
                )}
              </div>

              <div>
                <button className="text-gray-700 hover:text-indigo-900 transition-colors font-medium w-full text-left flex items-center justify-between" onClick={() => setOpenDropdown(openDropdown === 'why-invest-mobile' ? null : 'why-invest-mobile')}>
                  Why Invest?
                  <svg className={`w-4 h-4 transform transition-transform ${openDropdown === 'why-invest-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'why-invest-mobile' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/why-invest/why-india" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Why India</Link>
                    <Link to="/why-invest/why-india-avenue" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Why India Avenue</Link>
                    <Link to="/why-invest/esg-philosophy" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Our ESG Philosophy</Link>
                  </div>
                )}
              </div>

              <div>
                <button className="text-gray-700 hover:text-indigo-900 transition-colors font-medium w-full text-left flex items-center justify-between" onClick={() => setOpenDropdown(openDropdown === 'funds-mobile' ? null : 'funds-mobile')}>
                  Our Funds
                  <svg className={`w-4 h-4 transform transition-transform ${openDropdown === 'funds-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'funds-mobile' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/funds/equity-fund" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>India Avenue Equity Fund</Link>
                    <Link to="/funds/india-2030-fund" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>India 2030 Fund</Link>
                  </div>
                )}
              </div>

              <Link to="/active-etf" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Active ETF</Link>

              <div>
                <button className="text-gray-700 hover:text-indigo-900 transition-colors font-medium w-full text-left flex items-center justify-between" onClick={() => setOpenDropdown(openDropdown === 'insights-mobile' ? null : 'insights-mobile')}>
                  Insights
                  <svg className={`w-4 h-4 transform transition-transform ${openDropdown === 'insights-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'insights-mobile' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/insights/research" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Research</Link>
                    <Link to="/insights/grassroots-experience" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Grassroots Experience</Link>
                    <Link to="/insights/media" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>India Avenue in Media</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              
              <button className="group bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-layered hover:shadow-layered-lg transform hover:scale-105 active:scale-100 w-full focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:ring-offset-2">
                <span className="flex items-center justify-center">
                  InvestNow
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

