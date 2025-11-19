import { useState, useEffect, useRef } from 'react'

function Podcast() {
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
    <section ref={sectionRef} id="podcast" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl font-light text-center mb-4 text-gray-900 tracking-tight">Podcast</h1>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed text-lg">
            Listen to our insights and discussions about India's investment opportunities
          </p>
        </div>
        {/* Add podcast episodes here */}
      </div>
    </section>
  )
}

export default Podcast

