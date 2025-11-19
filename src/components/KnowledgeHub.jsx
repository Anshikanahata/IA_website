import { useState, useEffect, useRef } from 'react'

// Professional SVG Icons
const DocumentIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const ReportIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 5-5M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13" />
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

function KnowledgeHub() {
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

  const content = [
    {
      type: "Article",
      title: "Understanding India's Digital Economy",
      date: "November 2024",
      description: "An in-depth look at India's digital transformation and investment opportunities",
    },
    {
      type: "Report",
      title: "Q4 2024 Market Outlook",
      date: "October 2024",
      description: "Our latest analysis of Indian market trends and positioning",
    },
    {
      type: "Video",
      title: "Grassroots Tour: Bangalore Tech Hub",
      date: "September 2024",
      description: "Behind-the-scenes from our research tour of India's Silicon Valley",
    },
    {
      type: "Podcast",
      title: "The India Opportunity",
      date: "September 2024",
      description: "Discussing long-term structural themes with industry experts",
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
          {content.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-200 rounded-xl overflow-hidden shadow-layered hover:shadow-layered-lg transition-all duration-300 cursor-pointer group transform hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-saffron-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="text-indigo-600 transform transition-transform duration-300 group-hover:scale-110">
                  {item.type === 'Article' ? <DocumentIcon /> : 
                   item.type === 'Report' ? <ReportIcon /> : 
                   item.type === 'Video' ? <VideoIcon /> : <PodcastIcon />}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-saffron-600 mb-2">{item.type.toUpperCase()}</div>
                <h3 className="text-xl font-medium mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`} style={{ transitionDelay: '600ms' }}>
          <button className="group border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-layered hover:shadow-layered-lg transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span className="flex items-center justify-center">
              View All Content
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default KnowledgeHub

