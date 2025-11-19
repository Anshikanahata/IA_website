import { useState } from 'react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const logoPath = '/logo.png'

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="relative bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center z-10">
            <a href="/" className="flex items-center">
              {!logoError ? (
                <img
                  src={logoPath}
                  alt="India Avenue Investment Management"
                  className="h-16 md:h-20 w-auto max-w-[280px] md:max-w-[320px] object-contain"
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
            <a href="#home" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Home</a>
            
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
                  <a href="#our-journey" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Our Journey</a>
                  <a href="#the-team" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">The Team</a>
                  <a href="#board" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Board of Directors</a>
                  <a href="#committee" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Investment Committee</a>
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
                  <a href="#why-india" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Why India</a>
                  <a href="#why-india-avenue" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Why India Avenue</a>
                  <a href="#esg" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Our ESG Philosophy</a>
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
                  <a href="#equity-fund" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">India Avenue Equity Fund</a>
                  <a href="#2030-fund" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">India 2030 Fund</a>
                </div>
              </div>
            </div>

            <a href="#active-etf" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Active ETF</a>
            
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
                  <a href="#research" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Research</a>
                  <a href="#grassroots" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Grassroots Experience</a>
                  <a href="#whitepapers" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">White Papers</a>
                  <a href="#media" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">India Avenue in Media</a>
                  <a href="#podcast" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors">Podcast</a>
                </div>
              </div>
            </div>

            <a href="#contact" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium">Contact</a>
            
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
              <a href="#home" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
              
              <div>
                <button className="text-gray-700 hover:text-indigo-900 transition-colors font-medium w-full text-left flex items-center justify-between" onClick={() => setOpenDropdown(openDropdown === 'about-mobile' ? null : 'about-mobile')}>
                  About Us
                  <svg className={`w-4 h-4 transform transition-transform ${openDropdown === 'about-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'about-mobile' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#our-journey" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Our Journey</a>
                    <a href="#the-team" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>The Team</a>
                    <a href="#board" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Board of Directors</a>
                    <a href="#committee" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Investment Committee</a>
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
                    <a href="#why-india" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Why India</a>
                    <a href="#why-india-avenue" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Why India Avenue</a>
                    <a href="#esg" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Our ESG Philosophy</a>
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
                    <a href="#equity-fund" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>India Avenue Equity Fund</a>
                    <a href="#2030-fund" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>India 2030 Fund</a>
                  </div>
                )}
              </div>

              <a href="#active-etf" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Active ETF</a>

              <div>
                <button className="text-gray-700 hover:text-indigo-900 transition-colors font-medium w-full text-left flex items-center justify-between" onClick={() => setOpenDropdown(openDropdown === 'insights-mobile' ? null : 'insights-mobile')}>
                  Insights
                  <svg className={`w-4 h-4 transform transition-transform ${openDropdown === 'insights-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'insights-mobile' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#research" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Research</a>
                    <a href="#grassroots" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Grassroots Experience</a>
                    <a href="#whitepapers" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>White Papers</a>
                    <a href="#media" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>India Avenue in Media</a>
                    <a href="#podcast" className="block text-gray-600 hover:text-indigo-900" onClick={() => setMobileMenuOpen(false)}>Podcast</a>
                  </div>
                )}
              </div>

              <a href="#contact" className="text-gray-700 hover:text-indigo-900 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              
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

