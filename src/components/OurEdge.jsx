import { useState, useEffect, useRef } from 'react'

// Elegant thin outline icons
const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path strokeLinecap="round" d="M3 10h18M8 2v4m8-4v4" />
  </svg>
)

const ChartBarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M4 16h2a1 1 0 001-1V9a1 1 0 00-1-1H4a1 1 0 00-1 1v6a1 1 0 001 1zm6 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v10a1 1 0 001 1zm6 0h2a1 1 0 001-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 001 1z" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const TeamIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <circle cx="12" cy="7" r="4" />
    <path strokeLinecap="round" d="M5.5 21c0-3.5 2.5-6 6.5-6s6.5 2.5 6.5 6" />
    <circle cx="18" cy="9" r="2" />
    <circle cx="6" cy="9" r="2" />
  </svg>
)

const NetworkIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" d="M2 12h20M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10M12 2C9.5 4.5 8 8 8 12s1.5 7.5 4 10" />
  </svg>
)

const AccessIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    <path strokeLinecap="round" d="M13 3v5a1 1 0 001 1h5" />
  </svg>
)

function OurEdge() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
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
      { threshold: 0.15 }
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

  const edgePoints = [
    {
      label: "Established",
      value: "2015",
      icon: <CalendarIcon />
    },
    {
      label: "Assets under Management",
      value: "A$185m",
      subtext: "(as of 18.11.2025)",
      icon: <ChartBarIcon />
    },
    {
      label: "Rating",
      value: "Lonsec Recommended*",
      icon: <StarIcon />
    },
    {
      label: "Collective IP",
      value: "125 years",
      subtext: "of investing experience",
      icon: <TeamIcon />
    },
    {
      label: "Network",
      value: "Local Ecosystem",
      subtext: "Fund Managers, Brokers, Regulators, Corporates",
      icon: <NetworkIcon />
    },
    {
      label: "Accessibility",
      value: "Multiple Pathways",
      subtext: "PDS, IM, Investment Platforms, ETF",
      icon: <AccessIcon />
    }
  ]

  return (
    <section ref={sectionRef} id="our-edge" className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Decorative top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-indigo-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-300"></div>
            <span className="text-xs font-medium tracking-[0.2em] text-indigo-600 uppercase">Competitive Advantage</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-5">
            Our Edge
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            The distinctive strengths that set India Avenue apart in the investment management landscape
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-7">
          {edgePoints.map((point, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 80 + 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative h-full bg-white rounded-md border border-slate-200/70 p-10
                transition-all duration-500 ease-out
                ${hoveredIndex === index 
                  ? 'shadow-xl shadow-slate-200/60 -translate-y-2 border-indigo-200/80' 
                  : 'shadow-sm'
                }`}
              >
                {/* Top accent line - subtle */}
                <div className={`absolute top-0 left-0 right-0 h-px transition-all duration-500
                  ${hoveredIndex === index 
                    ? 'bg-gradient-to-r from-transparent via-saffron-400 to-transparent opacity-100' 
                    : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-60'
                  }`}></div>
                
                {/* Content Container */}
                <div className="flex flex-col h-full">
                  {/* Top Row: Label & Icon */}
                  <div className="flex items-start justify-between mb-8">
                    {/* Label */}
                    <div className={`text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors duration-500
                      ${hoveredIndex === index ? 'text-indigo-600' : 'text-slate-400'}`}>
                      {point.label}
                    </div>
                    
                    {/* Icon */}
                    <div className={`transition-all duration-500
                      ${hoveredIndex === index ? 'text-indigo-600 scale-110' : 'text-slate-300'}`}>
                      {point.icon}
                    </div>
                  </div>

                  {/* Value - Primary Info */}
                  <div className={`text-3xl font-light tracking-tight mb-3 transition-colors duration-500
                    ${hoveredIndex === index ? 'text-indigo-900' : 'text-slate-800'}`}>
                    {point.value}
                  </div>

                  {/* Subtext - Supporting Info */}
                  {point.subtext && (
                    <div className="text-sm text-slate-500 font-light leading-relaxed">
                      {point.subtext}
                    </div>
                  )}

                  {/* Bottom accent line */}
                  <div className="mt-auto pt-6">
                    <div className={`h-px rounded-full transition-all duration-500
                      ${hoveredIndex === index 
                        ? 'bg-gradient-to-r from-saffron-400 to-saffron-500 w-16' 
                        : 'bg-slate-200 w-10'
                      }`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className={`flex justify-center mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-saffron-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurEdge
