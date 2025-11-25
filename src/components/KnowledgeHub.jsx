import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// Professional SVG Icons
const DocumentIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const ReportIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>
)

const VideoIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
  </svg>
)

const PodcastIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
)

// Category-specific styling configurations
const getCategoryStyle = (type) => {
  switch (type) {
    case 'Article':
      return {
        gradient: 'from-indigo-100 to-blue-100',
        iconColor: 'text-indigo-600',
        labelColor: 'text-indigo-600'
      }
    case 'Report':
      return {
        gradient: 'from-navy-100 via-indigo-100 to-slate-100',
        iconColor: 'text-navy-600',
        labelColor: 'text-navy-600'
      }
    case 'Video':
      return {
        gradient: 'from-purple-100 to-indigo-100',
        iconColor: 'text-purple-600',
        labelColor: 'text-purple-600'
      }
    case 'Podcast':
      return {
        gradient: 'from-saffron-100 to-orange-100',
        iconColor: 'text-saffron-600',
        labelColor: 'text-saffron-600'
      }
    default:
      return {
        gradient: 'from-indigo-100 to-saffron-100',
        iconColor: 'text-indigo-600',
        labelColor: 'text-saffron-600'
      }
  }
}

function KnowledgeHub() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef(null)
  const navigate = useNavigate()

  const handleCardClick = (item) => {
    if (item.link) {
      navigate(item.link)
    }
  }

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

  const content = [
    {
      type: "Video",
      title: "India's Market and Global Opportunities",
      date: "January 2025",
      description: "Watch our latest interview on Ausbiz discussing India's market dynamics and investment opportunities",
      link: "/insights/media"
    },
    {
      type: "Report",
      title: "India's Rising Export Potential",
      date: "October 2024",
      description: "Comprehensive report analyzing India's export sector growth and key opportunities in global trade",
      link: "/insights/media"
    },
    {
      type: "Video",
      title: "India Avenue Market Insights",
      date: "January 2025",
      description: "In-depth discussion about India's economic landscape and emerging investment opportunities",
      link: "/insights/media"
    },
    {
      type: "Video",
      title: "Grassroots Tour: Bangalore Tech Hub",
      date: "September 2024",
      description: "Behind-the-scenes from our research tour of India's Silicon Valley",
    },
    {
      type: "Article",
      title: "Infrastructure Investment Update",
      date: "August 2024",
      description: "Analyzing India's massive infrastructure build-out",
    },
    {
      type: "Report",
      title: "Healthcare Sector Deep Dive",
      date: "July 2024",
      description: "Exploring opportunities in India's growing healthcare industry",
    },
  ]

  // Show only first 3 items unless "showAll" is true
  const displayedContent = showAll ? content : content.slice(0, 3)

  return (
    <section ref={sectionRef} id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-light text-center mb-4 text-gray-900 tracking-tight">Knowledge Hub</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Expert insights, research, and commentary on Indian markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedContent.map((item, index) => {
            const style = getCategoryStyle(item.type)
            return (
              <div
                key={index}
                onClick={() => handleCardClick(item)}
                className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-layered hover:shadow-layered-lg transition-all duration-300 cursor-pointer group transform hover:scale-[1.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${style.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <div className={`${style.iconColor} transform transition-transform duration-300 group-hover:scale-110`}>
                    {item.type === 'Article' ? <DocumentIcon /> : 
                     item.type === 'Report' ? <ReportIcon /> : 
                     item.type === 'Video' ? <VideoIcon /> : <PodcastIcon />}
                  </div>
                </div>
                <div className="p-6">
                  <div className={`text-xs font-medium ${style.labelColor} mb-2`}>{item.type.toUpperCase()}</div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {!showAll && (
          <div className={`mt-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`} style={{ transitionDelay: '400ms' }}>
            <button 
              onClick={() => setShowAll(true)}
              className="group border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-layered hover:shadow-layered-lg transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="flex items-center justify-center">
                Learn More
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        )}

        {showAll && (
          <div className={`mt-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <button 
              onClick={() => setShowAll(false)}
              className="group border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-layered hover:shadow-layered-lg transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="flex items-center justify-center">
                Show Less
                <svg className="ml-2 w-5 h-5 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default KnowledgeHub
