import { useState, useEffect, useRef } from 'react'

// Professional SVG Chart Icon
const ChartBarIcon = () => (
  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 5-5M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13" />
  </svg>
)

function PortfolioStructure() {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-light text-center mb-4 text-gray-900 tracking-tight">Portfolio Structure</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Diversified exposure across India's most promising sectors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart placeholder */}
          <div className={`bg-gradient-to-br from-indigo-50 to-saffron-50 rounded-2xl p-12 h-96 flex items-center justify-center shadow-layered hover:shadow-layered-lg transition-all duration-300 transform hover:scale-[1.02] border border-indigo-100/50 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="text-center">
              <div className="flex justify-center mb-4 text-indigo-600 transform transition-transform duration-300 hover:scale-110">
                <ChartBarIcon />
              </div>
              <p className="text-gray-600">[Portfolio Allocation Chart]</p>
              <p className="text-sm text-gray-500 mt-2">Sector breakdown visualization</p>
            </div>
          </div>

          {/* Fact sheet */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-2xl font-light mb-6 text-gray-900 tracking-tight">Key Portfolio Facts</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-saffron-500 pl-4 transform transition-all duration-300 hover:translate-x-1">
                <div className="text-sm text-gray-500 mb-1">Number of Holdings</div>
                <div className="text-2xl font-light text-gray-900">[Add number]</div>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 transform transition-all duration-300 hover:translate-x-1">
                <div className="text-sm text-gray-500 mb-1">Top Sector Allocation</div>
                <div className="text-2xl font-light text-gray-900">[Add sector] - [%]</div>
              </div>
              <div className="border-l-4 border-saffron-500 pl-4 transform transition-all duration-300 hover:translate-x-1">
                <div className="text-sm text-gray-500 mb-1">Average Market Cap</div>
                <div className="text-2xl font-light text-gray-900">[Add amount]</div>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4 transform transition-all duration-300 hover:translate-x-1">
                <div className="text-sm text-gray-500 mb-1">Portfolio Turnover</div>
                <div className="text-2xl font-light text-gray-900">[Add rate]</div>
              </div>
            </div>

            <button className="mt-8 group border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-layered hover:shadow-layered-lg transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="flex items-center">
                Download Full Fact Sheet
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioStructure

