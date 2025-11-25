import { useState, useEffect, useRef } from 'react'

// Professional SVG Location Icon
const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

function GrassrootsInsights() {
  const [isVisible, setIsVisible] = useState(false)
  const [flippedCards, setFlippedCards] = useState({})
  const sectionRef = useRef(null)

  // ============================================
  // EDITABLE CONTENT - Update everything here!
  // ============================================
  
  // Section Description (appears below the heading)
  const sectionDescription = "Authentic perspectives from our on-the-ground research tours across India"
  
  // Grassroots Insights Data
  // Edit the image, front description, back description, and location for each insight card below
  const insights = [
    {
      image: "/grassroots-1.jpeg", // Image filename in public folder
      frontDescription: "Grassroots Tour 2025, National Stock Exchange, Mumbai", // Short description on front
      backDescription: "The National Stock Exchange is India's largest exchange by volume and allows India's capital markets to function seamlessly and effectively.", // Longer description on back
      location: "Mumbai, Maharashtra" // City/Location name
    },
    {
      image: "/grassroots-2.jpg",
      frontDescription: "Grassroots Tour 2023, Mahindra and Mahindra, Mumbai",
      backDescription: "The Boardroom of Mahindra & Mahindra, a global conglomerate excelling in automotive, farm equipment, finance, technology, and sustainable innovation.",
      location: "Mumbai, Maharashtra"
    },
    {
      image: "/grassroots-3.jpg",
      frontDescription: "Grassroots Tour 2023, Government of India, Delhi",
      backDescription: "The Government of India is advised by a network of senior officials and specialized advisers across security, science, economics, and administration.",
      location: "Delhi NCR"
    },
  ]
  
  // ============================================
  // End of Editable Content
  // ============================================

  const handleCardFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      }
    }, [])

  return (
    <section ref={sectionRef} id="grassroots" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-light text-center mb-4 text-gray-900 tracking-tight">Grassroots Insights</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => {
            const isFlipped = flippedCards[index]
            return (
              <div
                key={index}
                className={`relative h-[500px] perspective-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className="relative w-full h-full transform-style-3d transition-transform duration-700 cursor-pointer"
                  onClick={() => handleCardFlip(index)}
                  style={{ 
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-layered hover:shadow-layered-lg border border-gray-100 bg-white"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)'
                    }}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={insight.image} 
                        alt={`Grassroots insight from ${insight.location}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image doesn't exist - shows gradient background
                          e.target.style.display = 'none'
                          const parent = e.target.parentElement
                          if (parent && !parent.querySelector('.fallback-placeholder')) {
                            parent.innerHTML = '<div class="h-64 bg-gradient-to-br from-indigo-100 to-saffron-100 flex items-center justify-center text-gray-400 fallback-placeholder">Image: ' + insight.image + '</div>'
                          }
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed font-medium">{insight.frontDescription}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <span className="mr-2 text-indigo-600"><LocationIcon /></span>
                        {insight.location}
                      </p>
                      <p className="text-xs text-gray-400 mt-4 italic">Click to flip for more details</p>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden shadow-layered border border-gray-100 bg-gradient-to-br from-indigo-50 to-white"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full flex flex-col p-6">
                      <div className="flex-1 flex items-center justify-center">
                        <p className="text-gray-700 leading-relaxed text-center text-lg">
                          {insight.backDescription}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500 flex items-center justify-center">
                          <span className="mr-2 text-indigo-600"><LocationIcon /></span>
                          {insight.location}
                        </p>
                        <p className="text-xs text-gray-400 mt-2 text-center italic">Click to flip back</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`} style={{ transitionDelay: '600ms' }}>
          <button className="group text-indigo-600 hover:text-indigo-700 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 rounded px-2 py-1">
            <span className="flex items-center justify-center">
              View More Insights
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

export default GrassrootsInsights

