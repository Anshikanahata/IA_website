import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Fund Icons - Thin outline style
const EquityIcon = () => (
  <svg className="w-12 h-12 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
)

const Fund2030Icon = () => (
  <svg className="w-12 h-12 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>
)

const ETFIcon = () => (
  <svg className="w-12 h-12 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

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

  // ============================================
  // EDITABLE CONTENT - Update everything here!
  // ============================================
  
  const funds = [
    {
      name: "India Avenue Equity Fund",
      description: "Diversified exposure across high quality Indian corporate success stories and emerging leaders",
      link: "/funds/equity-fund",
      icon: <EquityIcon />
    },
    {
      name: "India 2030 Fund",
      description: "Active, concentrated fund focused on mid and small caps, investing in 4-5 key themes",
      link: "/funds/india-2030-fund",
      icon: <Fund2030Icon />
    },
    {
      name: "Active ETF",
      description: "Diversified exposure with ETF accessibility and active management",
      link: "/active-etf",
      icon: <ETFIcon />
    }
  ]
  
  // ============================================
  // End of Editable Content
  // ============================================

  return (
    <section ref={sectionRef} id="our-funds" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
              Our Funds
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Funds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {funds.map((fund, index) => {
            // Premium solid colors for clean editorial look
            const solidColors = [
              '#F6A45C', // Soft orange
              '#3A44B0', // Muted blue/purple
              '#6A8E7A'  // Muted green
            ]
            const fundCategories = [
              'EQUITY FUND',
              'GROWTH FUND',
              'ACTIVE ETF'
            ]

            return (
            <Link
              key={index}
              to={fund.link}
              className={`group relative rounded p-8 lg:p-10 transition-all duration-300 ease-out flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } hover:scale-[1.02]`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                backgroundColor: solidColors[index],
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                minHeight: '360px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)'
              }}
            >
              {/* Icon Container */}
              <div className="mb-6 text-white/90">
                {fund.icon}
              </div>

              {/* Category Label */}
              <div className="mb-3">
                <span className="text-xs font-semibold text-white/80 tracking-widest uppercase">
                  {fundCategories[index]}
                </span>
                {/* Editorial separator line */}
                <div className="w-12 h-px bg-white/30 mt-3"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl md:text-[26px] font-normal text-white mb-5 tracking-tight leading-[1.2]">
                  {fund.name}
                </h3>
                
                <p className="text-white/85 text-[15px] leading-relaxed mb-8 flex-grow font-light">
                  {fund.description}
                </p>

                {/* Learn More CTA */}
                <div className="flex items-center text-white font-medium text-sm transition-all duration-300 mt-auto group-hover:gap-3 gap-2">
                  <span className="tracking-wide">Learn More</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurFunds

