import { useState, useEffect, useRef } from 'react'

function OurFunds() {
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

  const funds = [
    {
      name: "India Avenue Equity Fund",
      description: "This Fund provides a diversified exposure across high quality Indian corporate success stories as well as to companies which are less known, but with the potential to be tomorrow's leading companies",
      link: "#equity-fund",
      image: "/fund-equity.jpg"
    },
    {
      name: "India 2030 Fund",
      description: "India 2030 Fund is an active, concentrated fund focused on mid and small caps, aiming to capitalize on India's decade-long transition by investing early in 4-5 key themes at reasonable valuations.",
      link: "#2030-fund",
      image: "/fund-2030.jpg"
    },
    {
      name: "Active ETF",
      description: "This Fund provides a diversified exposure across high quality Indian corporate success stories as well as to companies which are less known, but with the potential to be tomorrow's leading companies",
      link: "#active-etf",
      image: "/fund-etf.jpg"
    }
  ]

  return (
    <section ref={sectionRef} id="our-funds" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-light text-center mb-4 text-gray-900 tracking-tight">Our Funds</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {funds.map((fund, index) => (
            <a
              key={index}
              href={fund.link}
              className={`bg-white rounded-2xl overflow-hidden shadow-layered hover:shadow-layered-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 cursor-pointer group block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-64 bg-gradient-to-br from-indigo-100 to-saffron-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="relative z-10 text-center p-6">
                  <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">{fund.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">{fund.description}</p>
                <div className="group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center text-indigo-600 font-medium">
                  Explore
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurFunds

