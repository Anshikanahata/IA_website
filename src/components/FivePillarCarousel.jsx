import { useState, useEffect, useRef } from 'react'

// Icons for Pillars
const ChartIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const NetworkIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const CubeIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)

const ThumbUpIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
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

  const pillars = [
    {
      title: "India's Growth Story",
      description: "India's Growth Story, driven by its demographics, provides a compelling opportunity for our investors",
      color: "from-saffron-500 to-saffron-600",
      backColor: "from-saffron-50 to-saffron-100",
      textColor: "text-saffron-900",
      icon: <ChartIcon />
    },
    {
      title: "Competitive Edge",
      description: "India Avenue's focus and expertise on India, provides our investors with a competitive edge",
      color: "from-indigo-600 to-indigo-700",
      backColor: "from-indigo-50 to-indigo-100",
      textColor: "text-indigo-900",
      icon: <TargetIcon />
    },
    {
      title: "Local Network",
      description: "Our robust local network in India, gives us greater access to knowledge and insights to build smart portfolios",
      color: "from-saffron-500 to-saffron-600",
      backColor: "from-saffron-50 to-saffron-100",
      textColor: "text-saffron-900",
      icon: <NetworkIcon />
    },
    {
      title: "Smart Portfolio Construction",
      description: "This is embedded in our portfolio construction, which is leveraged to the growth story. Our investors invest like locals, rather than foreigners",
      color: "from-indigo-600 to-indigo-700",
      backColor: "from-indigo-50 to-indigo-100",
      textColor: "text-indigo-900",
      icon: <CubeIcon />
    },
    {
      title: "Easy Accessibility",
      description: "The ease and accessibility of our funds makes it simple for investors",
      color: "from-saffron-500 to-saffron-600",
      backColor: "from-saffron-50 to-saffron-100",
      textColor: "text-saffron-900",
      icon: <ThumbUpIcon />
    }
  ]

  return (
    <section ref={sectionRef} id="why-india-avenue" className="py-20 bg-gray-50">
      {/* Subtle Texture Background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-3 text-gray-900 tracking-tight">Our 5 Pillars</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            The foundation of our investment approach and what sets us apart
          </p>
        </div>

        {/* Responsive Grid with Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 h-80">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`group perspective-1000 h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Flip Card Inner Container */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute w-full h-full bg-white rounded-xl shadow-md backface-hidden border border-gray-100 p-6 flex flex-col items-center justify-center text-center">
                  {/* Colored Accent Top Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.color} rounded-t-xl`}></div>
                  
                  {/* Icon Badge */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {pillar.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div className={`absolute w-full h-full bg-gradient-to-br ${pillar.backColor} rounded-xl shadow-xl backface-hidden rotate-y-180 p-6 flex flex-col items-center justify-center text-center border border-gray-100`}>
                  {/* Colored Accent Top Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.color} rounded-t-xl`}></div>
                  
                  {/* Description */}
                  <p className={`${pillar.textColor} text-sm leading-relaxed font-medium`}>
                    {pillar.description}
                  </p>
                  
                  {/* Bottom Decoration */}
                  <div className={`mt-4 w-12 h-1 rounded-full bg-gradient-to-r ${pillar.color}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FivePillarCarousel

