import { useState, useEffect } from 'react'

function HeroBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Modern India images for hero background slideshow
  // Add your image filenames here (place them in the /public folder)
  const modernIndiaImages = [
    '/india-1.jpg',
    '/india-2.jpg',
    '/india-3.jpg',
    '/india-4.jpg',
    '/india-5.jpg',
  ]

  // Slideshow effect - cycle through images every 4 seconds
  useEffect(() => {
    if (modernIndiaImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % modernIndiaImages.length
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [modernIndiaImages.length])

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden">
      {/* Modern India Images Background Slideshow */}
      <div className="absolute inset-0">
        {modernIndiaImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-indigo-800/75 to-indigo-900/85"></div>
        <div className="absolute inset-0 bg-black/15"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-10">
        <div className={`max-w-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-shadow-hero tracking-tight">
            Invest in the Future of India
          </h1>
          <p className="text-xl md:text-2xl font-light text-indigo-100 mb-10 leading-relaxed max-w-2xl">
            India Avenue is a boutique investment management firm providing investment solutions that allow our clients to benefit from India's remarkable growth story
          </p>
          <button className="group bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-layered-lg hover:shadow-layered-xl transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:ring-offset-2 focus:ring-offset-indigo-900">
            <span className="flex items-center">
              Start Investing
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner

