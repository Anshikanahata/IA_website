import { useState, useEffect, useRef } from 'react'

// Elegant thin outline icons
const GrowthIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h20M5 20V10m4 10V4m4 16v-8m4 8V8m4 12v-4" />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path strokeLinecap="round" d="M12 2v4m0 12v4M2 12h4m12 0h4" />
  </svg>
)

const NetworkIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
    <circle cx="12" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v4m0 0l-5.5 6M12 11l5.5 6" />
  </svg>
)

const PortfolioIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

const AccessIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7h2a4 4 0 014 4v0a4 4 0 01-4 4h-2m-6 0H7a4 4 0 01-4-4v0a4 4 0 014-4h2" />
    <path strokeLinecap="round" d="M8 11h8" />
  </svg>
)

function FivePillarCarousel() {
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

  const pillars = [
    {
      number: "01",
      title: "India's Growth Story",
      description: "India's growth trajectory, driven by favorable demographics and economic reforms, presents a compelling long-term investment opportunity.",
      icon: <GrowthIcon />
    },
    {
      number: "02",
      title: "Competitive Edge",
      description: "Our singular focus and deep expertise on India provides investors with differentiated insights and a distinct competitive advantage.",
      icon: <TargetIcon />
    },
    {
      number: "03",
      title: "Local Network",
      description: "Our extensive on-ground network across India enables superior access to knowledge, insights, and emerging opportunities.",
      icon: <NetworkIcon />
    },
    {
      number: "04",
      title: "Smart Portfolio Construction",
      description: "Sophisticated portfolio construction leveraging local expertise allows our investors to participate like insiders, not outsiders.",
      icon: <PortfolioIcon />
    },
    {
      number: "05",
      title: "Easy Accessibility",
      description: "Streamlined fund structures and transparent processes make investing in India simple and accessible for all investors.",
      icon: <AccessIcon />
    }
  ]

  return (
    <section ref={sectionRef} id="why-india-avenue" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(90deg, #1e293b 1px, transparent 1px), linear-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Subtle accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-indigo-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-400"></div>
            <span className="text-xs font-medium tracking-[0.2em] text-indigo-600 uppercase">Our Foundation</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-400"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            The Five Pillars
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            The foundational principles that guide our investment philosophy and set us apart
          </p>
        </div>

        {/* Pillars Grid - Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`group perspective-1000 h-[320px] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Flip Card Container */}
              <div className="relative w-full h-full transition-transform duration-700 ease-out transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden">
                  <div className="h-full rounded-md border-2 border-saffron-300 p-8 
                    shadow-sm flex flex-col justify-between"
                    style={{ backgroundColor: '#F6A45C' }}>
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                    
                    {/* Top Content */}
                    <div>
                      {/* Number */}
                      <div className="text-xs font-medium tracking-wider mb-8 text-slate-300">
                        {pillar.number}
                      </div>

                      {/* Icon */}
                      <div className="text-indigo-500 mb-8">
                        {pillar.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-medium tracking-tight text-slate-800 leading-snug">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Bottom accent */}
                    <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-saffron-400 to-saffron-500"></div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180">
                  <div className="h-full bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-md border-2 border-saffron-300 p-8 
                    shadow-xl flex flex-col justify-between">
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron-400/50 to-transparent"></div>
                    
                    {/* Top Content */}
                    <div>
                      {/* Number */}
                      <div className="text-xs font-medium tracking-wider mb-6 text-indigo-300/60">
                        {pillar.number}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-medium tracking-tight text-white mb-6 leading-snug">
                        {pillar.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-indigo-100/80 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-saffron-400 to-saffron-500"></div>
                      <div className="w-2 h-0.5 rounded-full bg-saffron-400/40"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-700 ${
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

export default FivePillarCarousel
