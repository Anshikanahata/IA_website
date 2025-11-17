import { useState, useEffect } from 'react'

function HeroBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  return (
    <section className="relative h-[600px] bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-indigo-800/70 to-indigo-900/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Invest in the Future of India
          </h1>
          <p className="text-xl md:text-2xl font-light text-indigo-100 mb-8">
            Access institutional-grade India investment opportunities backed by grassroots insights
          </p>
          <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Start Investing
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner

