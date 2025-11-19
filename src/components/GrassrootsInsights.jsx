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
  const sectionRef = useRef(null)

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
  const insights = [
    {
      image: "[Photo 1]",
      quote: "Authentic grassroots insight quote from tour",
      location: "Mumbai, Maharashtra"
    },
    {
      image: "[Photo 2]",
      quote: "Real observation from ground-level research",
      location: "Bangalore, Karnataka"
    },
    {
      image: "[Photo 3]",
      quote: "Direct insights from local business leaders",
      location: "Delhi NCR"
    },
  ]

  return (
    <section ref={sectionRef} id="grassroots" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-light text-center mb-4 text-gray-900 tracking-tight">Grassroots Insights</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Authentic perspectives from our on-the-ground research tours across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-layered hover:shadow-layered-lg transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-64 bg-gradient-to-br from-indigo-100 to-saffron-100 flex items-center justify-center text-gray-400 transition-transform duration-300 hover:scale-105">
                {insight.image}
              </div>
              <div className="p-6">
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{insight.quote}"</p>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="mr-2 text-indigo-600"><LocationIcon /></span>
                  {insight.location}
                </p>
              </div>
            </div>
          ))}
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

