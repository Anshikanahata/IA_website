import { useState, useEffect, useRef } from 'react'

// Professional SVG Icons
const BankIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0h4.5m-4.5 0l-1.5-1.5m1.5 1.5l1.5-1.5m-1.5 1.5h-4.5m0 0H9m1.5 0v4.25m0-4.25h-4.5m4.5 0l-1.5-1.5m1.5 1.5l1.5-1.5m-1.5-1.5h-4.5m0 0H3.75m0 0v4.25c0 .414.336.75.75.75h4.5a.75.75 0 01.75-.75v-4.25m0 0H3.75" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
)

const RocketLaunchIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A15 15 0 004.59 14.37m0 0a6 6 0 00-1.84 2.58m1.84-2.58a6 6 0 011.84 2.58m0 0v4.8m0-4.8a6 6 0 011.84-2.58" />
  </svg>
)

function AccessPathways() {
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

  const platforms = [
    { name: "Platform 1", logo: <BankIcon /> },
    { name: "Platform 2", logo: <BriefcaseIcon /> },
    { name: "Platform 3", logo: <TrendingUpIcon /> },
    { name: "Platform 4", logo: <BuildingIcon /> },
    { name: "InvestNow", logo: <RocketLaunchIcon />, highlighted: true },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-light text-center mb-4 text-gray-900 tracking-tight">How to Access</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Multiple pathways to invest in India Avenue strategies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 text-center transition-all duration-300 ${
                platform.highlighted
                  ? 'bg-gradient-to-br from-indigo-600 to-saffron-500 text-white shadow-layered-lg transform hover:scale-110 hover:shadow-layered-xl'
                  : 'bg-white text-gray-900 hover:shadow-layered-lg transform hover:scale-105 border border-gray-100'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`flex justify-center mb-4 transform transition-transform duration-300 hover:scale-110 ${
                platform.highlighted ? 'text-white' : 'text-indigo-600'
              }`}>
                {platform.logo}
              </div>
              <div className={`font-medium tracking-tight ${platform.highlighted ? 'text-lg' : ''}`}>
                {platform.name}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 bg-white rounded-2xl p-8 shadow-layered hover:shadow-layered-lg transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`} style={{ transitionDelay: '500ms' }}>
          <h3 className="text-2xl font-light mb-4 text-gray-900 tracking-tight">Not sure which option is right for you?</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our team can help you understand the best way to access India Avenue investment strategies 
            based on your specific needs and circumstances.
          </p>
          <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-layered hover:shadow-layered-lg transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="flex items-center">
              Speak with an Advisor
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AccessPathways

