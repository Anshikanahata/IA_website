import { useState, useEffect, useRef } from 'react'

function ActiveETFVideo() {
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

  return (
    <section ref={sectionRef} id="active-etf" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`}>
            <h2 className="text-4xl font-light mb-6 text-gray-900 tracking-tight">India Avenue Active ETF</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              India Avenue's Active ETF - providing you exposure to India's growth story in an easy to digest format, 
              wrapping 65-70 listed shares in India into one listed share in Australia. India Avenue's singular focus 
              on India as an investment region and their investment process allows them to access growth stories earlier 
              than foreign investors typically do. This is through their robust network built in India.
            </p>
            <button className="group bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-layered-lg hover:shadow-layered-xl transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:ring-offset-2">
              <span className="flex items-center">
                More Videos
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="rounded-2xl overflow-hidden shadow-layered-lg">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/XUhYNHlLW2g"
                  title="India Avenue Active ETF Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActiveETFVideo

