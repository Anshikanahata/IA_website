import { useState, useEffect, useRef } from 'react'

// Icons
const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const ChartBarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

const UserGroupIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const GlobeAltIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const KeyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>
)

function OurEdge() {
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

  const edgePoints = [
    {
      label: "Established",
      value: "2015",
      icon: <CalendarIcon />,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-400",
      hoverBorder: "group-hover:border-indigo-500",
      accentColor: "bg-indigo-500"
    },
    {
      label: "Assets under Management",
      value: "A$185m",
      subtext: "(18.11.2025)",
      icon: <ChartBarIcon />,
      iconBg: "bg-saffron-50",
      iconColor: "text-saffron-600",
      borderColor: "border-saffron-400",
      hoverBorder: "group-hover:border-saffron-500",
      accentColor: "bg-saffron-500"
    },
    {
      label: "Rating",
      value: "Lonsec Recommended*",
      icon: <StarIcon />,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-400",
      hoverBorder: "group-hover:border-indigo-500",
      accentColor: "bg-indigo-500"
    },
    {
      label: "Collective IP",
      value: "125 years",
      subtext: "of investing experience",
      icon: <UserGroupIcon />,
      iconBg: "bg-saffron-50",
      iconColor: "text-saffron-600",
      borderColor: "border-saffron-400",
      hoverBorder: "group-hover:border-saffron-500",
      accentColor: "bg-saffron-500"
    },
    {
      label: "Network",
      value: "Local Ecosystem",
      subtext: "Fund Managers, Brokers, Regulators, Corporates",
      icon: <GlobeAltIcon />,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-400",
      hoverBorder: "group-hover:border-indigo-500",
      accentColor: "bg-indigo-500"
    },
    {
      label: "Accessibility",
      value: "Multiple Pathways",
      subtext: "PDS, IM, Investment Platforms, ETF",
      icon: <KeyIcon />,
      iconBg: "bg-saffron-50",
      iconColor: "text-saffron-600",
      borderColor: "border-saffron-400",
      hoverBorder: "group-hover:border-saffron-500",
      accentColor: "bg-saffron-500"
    }
  ]

  return (
    <section ref={sectionRef} id="our-edge" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-3 text-gray-900 tracking-tight">Our Edge</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            What sets India Avenue apart in the investment management landscape
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {edgePoints.map((point, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-8 border-2 ${point.borderColor} ${point.hoverBorder} shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-1 ${point.accentColor} transition-all duration-300 group-hover:h-1.5`}></div>
              
              <div className="flex items-start justify-between mb-6">
                {/* Label */}
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {point.label}
                </div>
                
                {/* Icon */}
                <div className={`p-2.5 rounded-lg ${point.iconBg} ${point.iconColor} transition-all duration-300 group-hover:scale-110`}>
                  {point.icon}
                </div>
              </div>

              {/* Value */}
              <div className="text-2xl md:text-3xl font-medium text-gray-900 mb-2 tracking-tight">
                {point.value}
              </div>

              {/* Subtext */}
              {point.subtext && (
                <div className="text-sm text-gray-600 font-medium">
                  {point.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurEdge

