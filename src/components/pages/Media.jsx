import { useState, useEffect, useRef, useMemo } from 'react'

// Media Icon
const MediaIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
  </svg>
)

// Share Icon
const ShareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.885 12.938 9 12.482 9 12c0-.482-.115-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
)

// Loading Skeleton Component
const CardSkeleton = () => (
  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-pulse">
    <div className="h-48 bg-gray-200 rounded-lg mb-6"></div>
    <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
    <div className="h-4 bg-gray-200 rounded w-32"></div>
  </div>
)

// Generate default thumbnail based on category
const getDefaultThumbnail = (category) => {
  const thumbnails = {
    'videos': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%23dc2626'/%3E%3Cg transform='translate(200 112.5)'%3E%3Ccircle r='35' fill='white' opacity='0.9'/%3E%3Cpath d='M-8,-15 L-8,15 L18,0 Z' fill='%23dc2626'/%3E%3C/g%3E%3Ctext x='200' y='190' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif' font-weight='600'%3EVIDEO%3C/text%3E%3C/svg%3E",
    'white-paper': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%23334e68'/%3E%3Cg transform='translate(200 112.5)'%3E%3Cg transform='translate(-60 -40)'%3E%3Cpath d='M40,10 L40,70 L80,70 L80,10 Z M50,20 L70,20 L70,60 L50,60 Z' fill='%23ffffff' opacity='0.9'/%3E%3Cpath d='M20,40 L20,70 L40,70 L40,40 Z M25,45 L35,45 L35,65 L25,65 Z' fill='%23ffffff' opacity='0.7'/%3E%3Cpath d='M80,30 L80,70 L100,70 L100,30 Z M85,35 L95,35 L95,65 L85,65 Z' fill='%23ffffff' opacity='0.8'/%3E%3C/g%3E%3Ctext x='0' y='60' text-anchor='middle' fill='%23ffffff' font-size='14' font-family='Arial, sans-serif' font-weight='600'%3EResearch Report%3C/text%3E%3C/g%3E%3C/svg%3E",
    'podcast': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%239333ea'/%3E%3Cg transform='translate(200 112.5)'%3E%3Cpath d='M-10,-30 Q-10,-40 0,-40 Q10,-40 10,-30 L10,0 Q10,10 0,10 Q-10,10 -10,0 Z' fill='white' opacity='0.9'/%3E%3Cpath d='M-20,-20 Q-20,-10 -20,0' stroke='white' stroke-width='3' fill='none' opacity='0.7'/%3E%3Cpath d='M20,-20 Q20,-10 20,0' stroke='white' stroke-width='3' fill='none' opacity='0.7'/%3E%3Cpath d='M0,10 L0,25' stroke='white' stroke-width='3' opacity='0.9'/%3E%3Cpath d='M-8,25 L8,25' stroke='white' stroke-width='3' opacity='0.9'/%3E%3C/g%3E%3Ctext x='200' y='190' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif' font-weight='600'%3EPODCAST%3C/text%3E%3C/svg%3E",
    'article': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%234f46e5'/%3E%3Cg transform='translate(200 112.5)'%3E%3Crect x='-40' y='-50' width='80' height='100' rx='4' fill='white' opacity='0.9'/%3E%3Crect x='-30' y='-40' width='60' height='4' fill='%234f46e5'/%3E%3Crect x='-30' y='-30' width='60' height='3' fill='%234f46e5' opacity='0.5'/%3E%3Crect x='-30' y='-22' width='60' height='3' fill='%234f46e5' opacity='0.5'/%3E%3Crect x='-30' y='-14' width='40' height='3' fill='%234f46e5' opacity='0.5'/%3E%3C/g%3E%3Ctext x='200' y='190' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif' font-weight='600'%3EARTICLE%3C/text%3E%3C/svg%3E",
    'press-release': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%2306b6d4'/%3E%3Cg transform='translate(200 112.5)'%3E%3Cpath d='M-30,-30 L-30,30 L30,30 L30,-30 Z' fill='white' opacity='0.9'/%3E%3Ctext x='0' y='5' text-anchor='middle' fill='%2306b6d4' font-size='36' font-family='Arial, sans-serif' font-weight='700'%3E!%3C/text%3E%3C/g%3E%3Ctext x='200' y='190' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif' font-weight='600'%3EPRESS RELEASE%3C/text%3E%3C/svg%3E",
    'interview': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%2310b981'/%3E%3Cg transform='translate(200 112.5)'%3E%3Ccircle cx='-15' cy='-10' r='12' fill='white' opacity='0.9'/%3E%3Ccircle cx='15' cy='-10' r='12' fill='white' opacity='0.9'/%3E%3Cpath d='M-15,5 Q-15,15 -5,20 L-5,30 L-10,30 L-10,25 Q-20,20 -20,10 Z' fill='white' opacity='0.9'/%3E%3Cpath d='M15,5 Q15,15 5,20 L5,30 L10,30 L10,25 Q20,20 20,10 Z' fill='white' opacity='0.9'/%3E%3C/g%3E%3Ctext x='200' y='190' text-anchor='middle' fill='white' font-size='16' font-family='Arial, sans-serif' font-weight='600'%3EINTERVIEW%3C/text%3E%3C/svg%3E"
  }
  return thumbnails[category] || thumbnails['article']
}

function Media() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeYear, setActiveYear] = useState(null)
  const [visibleItems, setVisibleItems] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('date-desc')
  const [viewMode, setViewMode] = useState('timeline') // timeline, list, grid
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef(null)
  const itemRefs = useRef([])
  const yearRefs = useRef({})
  const searchInputRef = useRef(null)

  // ============================================
  // EDITABLE CONTENT - Add your media items here!
  // ============================================
  
  const mediaItems = [
    {
      year: "2025",
      month: "JAN",
      title: "India's Market and Global Opportunities",
      description: "Watch our latest interview on Ausbiz discussing India's market dynamics and global investment opportunities. Our team shares insights on current market trends and what makes India a compelling investment destination.",
      source: "Ausbiz",
      link: "https://ausbiz.com.au/media/indias-market-and-global-opportunities?videoId=38476",
      thumbnail: "https://img.youtube.com/vi/XUhYNHlLW2g/maxresdefault.jpg",
      category: "videos",
      publicationLogo: null,
      readingTime: "Watch video",
      tags: ["Market Analysis", "India", "Investment"]
    },
    {
      year: "2025",
      month: "JAN",
      title: "India Avenue Market Insights",
      description: "Join us in this comprehensive video discussion about India's economic landscape, emerging opportunities, and how investors can position themselves to benefit from India's growth trajectory.",
      source: "YouTube",
      link: "https://www.youtube.com/watch?v=6yjlaM5XWKA",
      thumbnail: "https://img.youtube.com/vi/6yjlaM5XWKA/maxresdefault.jpg",
      category: "videos",
      publicationLogo: null,
      readingTime: "Watch video",
      tags: ["Market Insights", "India Economy"]
    },
    {
      year: "2024",
      month: "OCT",
      title: "India's Rising Export Potential",
      description: "Download our comprehensive report analyzing India's export sector growth, key opportunities in global trade, and the structural factors driving India's emergence as a major global exporter.",
      source: "India Avenue Research",
      link: "/Indias-Rising-Export-Potential-Final_251008_200954.pdf",
      thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%23334e68'/%3E%3Cg transform='translate(200 112.5)'%3E%3Cg transform='translate(-60 -40)'%3E%3Cpath d='M40,10 L40,70 L80,70 L80,10 Z M50,20 L70,20 L70,60 L50,60 Z' fill='%23ffffff' opacity='0.9'/%3E%3Cpath d='M20,40 L20,70 L40,70 L40,40 Z M25,45 L35,45 L35,65 L25,65 Z' fill='%23ffffff' opacity='0.7'/%3E%3Cpath d='M80,30 L80,70 L100,70 L100,30 Z M85,35 L95,35 L95,65 L85,65 Z' fill='%23ffffff' opacity='0.8'/%3E%3C/g%3E%3Ctext x='0' y='60' text-anchor='middle' fill='%23ffffff' font-size='14' font-family='Arial, sans-serif' font-weight='600'%3EResearch Report%3C/text%3E%3Ctext x='0' y='78' text-anchor='middle' fill='%23a5b4c8' font-size='11' font-family='Arial, sans-serif'%3EIndia's Rising Export Potential%3C/text%3E%3C/g%3E%3C/svg%3E",
      category: "white-paper",
      publicationLogo: null,
      readingTime: "Download PDF",
      tags: ["Research", "Exports", "Trade"]
    },
    {
      year: "2025",
      month: "JAN",
      title: "Media Article Title 1",
      description: "Short description or excerpt of the media coverage. Add details about the publication and key highlights.",
      source: "Publication Name",
      link: "#",
      thumbnail: null, // Optional: "/path-to-image.jpg"
      category: "article", // article, press-release, interview, podcast, white-paper, videos
      publicationLogo: null, // Optional: "/path-to-logo.png"
      readingTime: "3 min read",
      tags: ["Investment", "India"]
    },
    {
      year: "2024",
      month: "NOV",
      title: "Media Article Title 2",
      description: "Short description or excerpt of the media coverage. Add details about the publication and key highlights.",
      source: "Publication Name",
      link: "#",
      thumbnail: null,
      category: "press-release",
      publicationLogo: null,
      readingTime: "5 min read",
      tags: ["Funds", "Growth"]
    },
    {
      year: "2024",
      month: "SEP",
      title: "Media Article Title 3",
      description: "Short description or excerpt of the media coverage. Add details about the publication and key highlights.",
      source: "Publication Name",
      link: "#",
      thumbnail: null,
      category: "interview",
      publicationLogo: null,
      readingTime: "8 min read",
      tags: ["Strategy", "Market"]
    },
    {
      year: "2024",
      month: "JUN",
      title: "Media Article Title 4",
      description: "Short description or excerpt of the media coverage. Add details about the publication and key highlights.",
      source: "Publication Name",
      link: "#",
      thumbnail: null,
      category: "article",
      publicationLogo: null,
      readingTime: "4 min read",
      tags: ["ESG", "Sustainability"]
    },
    {
      year: "2023",
      month: "DEC",
      title: "Media Article Title 5",
      description: "Short description or excerpt of the media coverage. Add details about the publication and key highlights.",
      source: "Publication Name",
      link: "#",
      thumbnail: null,
      category: "podcast",
      publicationLogo: null,
      readingTime: "25 min listen",
      tags: ["Interview", "Insights"]
    },
    {
      year: "2023",
      month: "AUG",
      title: "Media Article Title 6",
      description: "Short description or excerpt of the media coverage. Add details about the publication and key highlights.",
      source: "Publication Name",
      link: "#",
      thumbnail: null,
      category: "article",
      publicationLogo: null,
      readingTime: "6 min read",
      tags: ["Performance", "Returns"]
    },
    {
      year: "2022",
      month: "MAR",
      title: "Media Article Title 7",
      description: "Short description or excerpt of the media coverage. Add details about the publication and key highlights.",
      source: "Publication Name",
      link: "#",
      thumbnail: null,
      category: "press-release",
      publicationLogo: null,
      readingTime: "2 min read",
      tags: ["Launch", "Fund"]
    },
    {
      year: "2021",
      month: "OCT",
      title: "Media Article Title 8",
      description: "Short description or excerpt of the media coverage. Add details about the publication and key highlights.",
      source: "Publication Name",
      link: "#",
      thumbnail: null,
      category: "article",
      publicationLogo: null,
      readingTime: "5 min read",
      tags: ["Market", "Analysis"]
    },
  ]
  
  // ============================================
  // End of Editable Content
  // ============================================

  // Get unique categories
  const categories = ['all', ...new Set(mediaItems.map(item => item.category))]

  // Get unique years in descending order
  const uniqueYears = [...new Set(mediaItems.map(item => item.year))].sort((a, b) => b - a)

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = mediaItems.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.source.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Sort items
    filtered.sort((a, b) => {
      if (sortBy === 'date-desc') {
        if (a.year !== b.year) return b.year - a.year
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        return months.indexOf(b.month) - months.indexOf(a.month)
      } else if (sortBy === 'date-asc') {
        if (a.year !== b.year) return a.year - b.year
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        return months.indexOf(a.month) - months.indexOf(b.month)
      } else if (sortBy === 'source') {
        return a.source.localeCompare(b.source)
      }
      return 0
    })

    return filtered
  }, [mediaItems, searchQuery, selectedCategory, sortBy])

  // Group filtered items by year
  const itemsByYear = useMemo(() => {
    return filteredAndSortedItems.reduce((acc, item) => {
      if (!acc[item.year]) acc[item.year] = []
      acc[item.year].push(item)
      return acc
    }, {})
  }, [filteredAndSortedItems])

  // Statistics
  const stats = useMemo(() => {
    const totalArticles = filteredAndSortedItems.length
    const articlesByYear = filteredAndSortedItems.reduce((acc, item) => {
      acc[item.year] = (acc[item.year] || 0) + 1
      return acc
    }, {})
    const topPublications = filteredAndSortedItems.reduce((acc, item) => {
      acc[item.source] = (acc[item.source] || 0) + 1
      return acc
    }, {})
    const topPublication = Object.entries(topPublications).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

    return { totalArticles, articlesByYear, topPublication }
  }, [filteredAndSortedItems])

  // Get related articles
  const getRelatedArticles = (currentItem, limit = 3) => {
    return mediaItems
      .filter(item => 
        item !== currentItem && 
        (item.year === currentItem.year || 
         item.tags?.some(tag => currentItem.tags?.includes(tag)))
      )
      .slice(0, limit)
  }

  // Share functionality
  const handleShare = async (item, platform) => {
    const url = window.location.href
    const text = `${item.title} - ${item.source}`
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(item.link || url)}`, '_blank')
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(item.link || url)}`, '_blank')
    } else if (platform === 'copy') {
      await navigator.clipboard.writeText(item.link || url)
      alert('Link copied to clipboard!')
    }
  }

  // Export as PDF (placeholder - would need a library)
  const handleExportPDF = () => {
    window.print()
  }

  // Initial visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
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

  // Simulate loading
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [searchQuery, selectedCategory, sortBy])

  // Observe timeline items for scroll animations
  useEffect(() => {
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index')
            if (index) {
              setVisibleItems(prev => ({ ...prev, [index]: true }))
            }
            const year = entry.target.closest('[data-year]')?.getAttribute('data-year')
            if (year) {
              setVisibleItems(prev => ({ ...prev, [`year-${year}`]: true }))
            }
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref)
    })

    Object.keys(yearRefs.current).forEach((year) => {
      const yearEl = yearRefs.current[year]
      if (yearEl) itemObserver.observe(yearEl)
    })

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) itemObserver.unobserve(ref)
      })
      Object.keys(yearRefs.current).forEach((year) => {
        const yearEl = yearRefs.current[year]
        if (yearEl) itemObserver.unobserve(yearEl)
      })
    }
  }, [filteredAndSortedItems])

  // Track active year based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
      
      // Track active year
      for (const year of uniqueYears) {
        const yearElement = yearRefs.current[year]
        if (yearElement) {
          const { offsetTop, offsetHeight } = yearElement
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight + 200) {
            setActiveYear(year)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [uniqueYears, filteredAndSortedItems])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault()
        searchInputRef.current?.focus()
      } else if (e.key === 'Escape') {
        setSearchQuery('')
        setSelectedItem(null)
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const currentIndex = selectedItem !== null ? 
          filteredAndSortedItems.findIndex(item => item === selectedItem) : -1
        const nextIndex = e.key === 'ArrowDown' 
          ? Math.min(currentIndex + 1, filteredAndSortedItems.length - 1)
          : Math.max(currentIndex - 1, 0)
        if (filteredAndSortedItems[nextIndex]) {
          setSelectedItem(filteredAndSortedItems[nextIndex])
          itemRefs.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      } else if (e.key === 'Enter' && selectedItem) {
        window.open(selectedItem.link, '_blank')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem, filteredAndSortedItems])

  // Smooth scroll to year section
  const scrollToYear = (year) => {
    const yearElement = yearRefs.current[year]
    if (yearElement) {
      const offset = 120
      const elementPosition = yearElement.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Category colors
  const categoryColors = {
    'article': 'bg-blue-100 text-blue-700 border-blue-200',
    'press-release': 'bg-purple-100 text-purple-700 border-purple-200',
    'interview': 'bg-green-100 text-green-700 border-green-200',
    'podcast': 'bg-orange-100 text-orange-700 border-orange-200',
    'white-paper': 'bg-indigo-100 text-indigo-700 border-indigo-200',
    'videos': 'bg-red-100 text-red-700 border-red-200'
  }

  const categoryLabels = {
    'article': 'Article',
    'press-release': 'Press Release',
    'interview': 'Interview',
    'podcast': 'Podcast',
    'white-paper': 'White Paper',
    'videos': 'Video'
  }

  // Get filtered unique years
  const filteredUniqueYears = Object.keys(itemsByYear).sort((a, b) => b - a)

  return (
    <section 
      ref={sectionRef} 
      className={`relative min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 to-saffron-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Statistics Dashboard */}
      <div className={`sticky top-1 z-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="text-sm">
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-indigo-900'}`}>
                  {stats.totalArticles}
                </span>
                <span className={`ml-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stats.totalArticles === 1 ? 'Article' : 'Articles'}
                </span>
              </div>
              <div className="text-sm">
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Top Publication: </span>
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-indigo-900'}`}>
                  {stats.topPublication}
                </span>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className={`sticky top-[73px] z-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search articles... (Press '/' to focus)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-2 pl-10 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All' : categoryLabels[category] || category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-2 rounded-lg border text-sm ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-200 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="source">By Publication</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('timeline')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'timeline'
                    ? 'bg-indigo-600 text-white'
                    : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Timeline view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-indigo-600 text-white'
                    : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="List view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Year Navigation Bar - Desktop */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
        <div className="relative">
          <div className={`absolute left-1/2 top-0 bottom-0 w-px ${darkMode ? 'bg-gray-700' : 'bg-indigo-200'} transform -translate-x-1/2`}></div>
          
          <div className="relative flex flex-col items-center gap-8 py-4">
            {filteredUniqueYears.map((year) => {
              const isActive = activeYear === year
              const count = itemsByYear[year]?.length || 0
              return (
                <button
                  key={year}
                  onClick={() => scrollToYear(year)}
                  className={`relative group transition-all duration-500 ${
                    isActive ? 'scale-125' : 'scale-100 hover:scale-110'
                  }`}
                  aria-label={`Navigate to ${year}`}
                >
                  <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-px transition-all duration-300 ${
                    isActive ? 'bg-saffron-500 w-6' : darkMode ? 'bg-gray-600 group-hover:bg-gray-500' : 'bg-indigo-300 group-hover:bg-indigo-400'
                  }`}></div>
                  
                  <div className={`relative w-12 h-12 flex flex-col items-center justify-center rounded-full transition-all duration-500 ${
                    isActive
                      ? 'bg-saffron-500 text-white shadow-lg shadow-saffron-500/50'
                      : darkMode
                      ? 'bg-gray-800 text-gray-300 border-2 border-gray-600 group-hover:border-gray-500'
                      : 'bg-white text-indigo-600 border-2 border-indigo-200 group-hover:border-indigo-300'
                  }`}>
                    <span className={`font-light text-sm transition-all duration-500 ${
                      isActive ? 'font-semibold text-base' : 'text-sm'
                    }`}>
                      {year.slice(-2)}
                    </span>
                    <span className={`text-xs ${isActive ? 'text-white' : darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {count}
                    </span>
                  </div>
                  
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-saffron-500 opacity-20 blur-xl animate-pulse"></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Year Navigation */}
      <div className="lg:hidden sticky top-[145px] z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {filteredUniqueYears.map((year) => {
              const isActive = activeYear === year
              const count = itemsByYear[year]?.length || 0
              return (
                <button
                  key={year}
                  onClick={() => scrollToYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all relative ${
                    isActive
                      ? 'bg-saffron-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {year}
                  {count > 0 && (
                    <span className={`ml-2 text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                      ({count})
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pr-32">
        {/* Header */}
        <div className={`mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className={`text-5xl md:text-6xl font-light mb-6 tracking-tight ${
            darkMode ? 'text-white' : 'text-indigo-900'
          }`}>
            India Avenue in Media
          </h1>
          <p className={`text-lg leading-relaxed max-w-2xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Media coverage, press releases, and news about India Avenue
          </p>
        </div>

        {/* Empty State */}
        {filteredAndSortedItems.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📰</div>
            <h3 className={`text-2xl font-light mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No articles found
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Timeline View */}
        {viewMode === 'timeline' && (
          <div className="relative">
            <div className={`absolute left-0 md:left-8 top-0 bottom-0 w-0.5 ${
              darkMode ? 'bg-gradient-to-b from-gray-700 via-gray-600 to-gray-700' : 'bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-200'
            }`}></div>

            <div className="space-y-24">
              {isLoading ? (
                Array(3).fill(0).map((_, i) => <CardSkeleton key={i} />)
              ) : (
                filteredUniqueYears.map((year) => {
                  const yearItems = itemsByYear[year]
                  
                  return (
                    <div
                      key={year}
                      ref={(el) => (yearRefs.current[year] = el)}
                      data-year={year}
                      className="relative"
                    >
                      {/* Year Header */}
                      <div className={`mb-12 transition-all duration-1000 ${
                        visibleItems[`year-${year}`] ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                      }`}>
                        <div className="flex items-center gap-6">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-indigo-900 to-indigo-800 flex items-center justify-center shadow-xl ${
                            darkMode ? 'from-indigo-800 to-indigo-700' : ''
                          }`}>
                            <span className="text-2xl font-light text-white">{year}</span>
                          </div>
                          <div className={`h-px flex-1 ${
                            darkMode ? 'bg-gradient-to-r from-gray-700 to-transparent' : 'bg-gradient-to-r from-indigo-300 to-transparent'
                          }`}></div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {yearItems.length} {yearItems.length === 1 ? 'article' : 'articles'}
                          </div>
                        </div>
                      </div>

                      {/* Items for this Year */}
                      <div className="space-y-16 ml-8 md:ml-16">
                        {yearItems.map((item, itemIndex) => {
                          const globalIndex = filteredAndSortedItems.findIndex(m => m === item)
                          const isVisible = visibleItems[globalIndex]
                          const related = getRelatedArticles(item, 2)
                          
                          return (
                            <div
                              key={`${year}-${itemIndex}`}
                              ref={(el) => {
                                if (el) itemRefs.current[globalIndex] = el
                              }}
                              data-index={globalIndex}
                              className="relative"
                            >
                              <div className={`absolute -left-12 md:-left-16 top-6 w-4 h-4 bg-indigo-600 rounded-full border-4 ${
                                darkMode ? 'border-gray-800' : 'border-white'
                              } shadow-lg transform -translate-x-1/2 z-10 transition-all duration-300 hover:scale-125 hover:bg-saffron-500`}></div>
                              
                              <div
                                className={`rounded-2xl p-8 shadow-sm border transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                                  darkMode
                                    ? 'bg-gray-800 border-gray-700 hover:border-indigo-600'
                                    : 'bg-white border-gray-100 hover:border-indigo-200'
                                } ${
                                  selectedItem === item ? 'ring-2 ring-indigo-500' : ''
                                } ${
                                  isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }`}
                                style={{
                                  transitionDelay: `${itemIndex * 100}ms`,
                                }}
                                onClick={() => setSelectedItem(item)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    setSelectedItem(item)
                                  }
                                }}
                                tabIndex={0}
                                role="button"
                                aria-label={`Select ${item.title}`}
                              >
                                {/* Category and Month Badge */}
                                <div className="flex items-center gap-2 mb-4 flex-wrap">
                                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                                    categoryColors[item.category] || 'bg-gray-100 text-gray-700 border-gray-200'
                                  }`}>
                                    {categoryLabels[item.category] || item.category}
                                  </span>
                                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                    darkMode
                                      ? 'text-indigo-300 bg-indigo-900/30 border border-indigo-700'
                                      : 'text-indigo-700 bg-indigo-50 border border-indigo-100'
                                  }`}>
                                    {item.month} {item.year}
                                  </span>
                                  {item.readingTime && (
                                    <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                      {item.readingTime}
                                    </span>
                                  )}
                                </div>

                                {/* Thumbnail - Always show */}
                                <div className="mb-6 overflow-hidden rounded-lg relative group">
                                  <img 
                                    src={item.thumbnail || getDefaultThumbnail(item.category)} 
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    
                                    {/* Media Type Indicator */}
                                    <div className="absolute top-3 right-3 flex items-center gap-2">
                                      {item.category === 'videos' && (
                                        <div className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                          </svg>
                                          VIDEO
                                        </div>
                                      )}
                                      {item.category === 'white-paper' && (
                                        <div className="bg-navy-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                          </svg>
                                          PDF
                                        </div>
                                      )}
                                      {item.category === 'podcast' && (
                                        <div className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                          </svg>
                                          PODCAST
                                        </div>
                                      )}
                                      {item.category === 'article' && (
                                        <div className="bg-indigo-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                          </svg>
                                          ARTICLE
                                        </div>
                                      )}
                                    </div>

                                    {/* Play Button Overlay for Videos */}
                                    {item.category === 'videos' && (
                                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                                          <svg className="w-8 h-8 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                          </svg>
                                        </div>
                                      </div>
                                    )}

                                    {/* Download Icon for PDFs */}
                                    {item.category === 'white-paper' && (
                                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                                          <svg className="w-8 h-8 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                          </svg>
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                {/* Title */}
                                <h3 className={`text-2xl font-light mb-3 leading-tight tracking-tight ${
                                  darkMode ? 'text-white' : 'text-indigo-900'
                                }`}>
                                  {item.title}
                                </h3>

                                {/* Source with Logo */}
                                <div className="flex items-center gap-3 mb-4">
                                  {item.publicationLogo ? (
                                    <img 
                                      src={item.publicationLogo} 
                                      alt={item.source}
                                      className="h-6 w-auto object-contain"
                                    />
                                  ) : (
                                    <MediaIcon className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                                  )}
                                  <span className={`text-sm font-medium ${
                                    darkMode ? 'text-gray-300' : 'text-gray-500'
                                  }`}>
                                    {item.source}
                                  </span>
                                </div>

                                {/* Description */}
                                <p className={`leading-relaxed mb-4 ${
                                  darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                  {item.description}
                                </p>

                                {/* Tags */}
                                {item.tags && item.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-2 mb-6">
                                    {item.tags.map((tag, idx) => (
                                      <span
                                        key={idx}
                                        className={`px-2 py-1 rounded text-xs ${
                                          darkMode
                                            ? 'bg-gray-700 text-gray-300'
                                            : 'bg-gray-100 text-gray-600'
                                        }`}
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                )}

                                {/* Actions */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center text-indigo-600 hover:text-saffron-600 font-medium transition-colors duration-300"
                                  >
                                    <span>
                                      {item.category === 'videos' ? 'Watch Video' : 
                                       item.category === 'white-paper' ? 'Download PDF' : 
                                       item.category === 'podcast' ? 'Listen Now' : 
                                       'Read Article'}
                                    </span>
                                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>

                                  {/* Share Menu */}
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleShare(item, 'twitter')
                                      }}
                                      className={`p-2 rounded-lg transition-colors ${
                                        darkMode
                                          ? 'hover:bg-gray-700 text-gray-400 hover:text-blue-400'
                                          : 'hover:bg-gray-100 text-gray-500 hover:text-blue-600'
                                      }`}
                                      aria-label="Share on Twitter"
                                    >
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                      </svg>
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleShare(item, 'linkedin')
                                      }}
                                      className={`p-2 rounded-lg transition-colors ${
                                        darkMode
                                          ? 'hover:bg-gray-700 text-gray-400 hover:text-blue-400'
                                          : 'hover:bg-gray-100 text-gray-500 hover:text-blue-600'
                                      }`}
                                      aria-label="Share on LinkedIn"
                                    >
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                      </svg>
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleShare(item, 'copy')
                                      }}
                                      className={`p-2 rounded-lg transition-colors ${
                                        darkMode
                                          ? 'hover:bg-gray-700 text-gray-400 hover:text-indigo-400'
                                          : 'hover:bg-gray-100 text-gray-500 hover:text-indigo-600'
                                      }`}
                                      aria-label="Copy link"
                                    >
                                      <ShareIcon />
                                    </button>
                                  </div>
                                </div>

                                {/* Related Articles */}
                                {related.length > 0 && (
                                  <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h4 className={`text-sm font-semibold mb-3 ${
                                      darkMode ? 'text-gray-300' : 'text-gray-700'
                                    }`}>
                                      Related Articles
                                    </h4>
                                    <div className="space-y-2">
                                      {related.map((relatedItem, idx) => (
                                        <a
                                          key={idx}
                                          href={relatedItem.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className={`block text-sm transition-colors ${
                                            darkMode
                                              ? 'text-gray-400 hover:text-indigo-400'
                                              : 'text-gray-600 hover:text-indigo-600'
                                          }`}
                                        >
                                          {relatedItem.title}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {/* End Marker */}
            {!isLoading && filteredAndSortedItems.length > 0 && (
              <div className="mt-24 flex justify-center">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-700 ${
                  darkMode
                    ? 'bg-gradient-to-r from-saffron-900/20 to-orange-900/20 border-saffron-800'
                    : 'bg-gradient-to-r from-saffron-50 to-orange-50 border-saffron-200'
                } ${
                  visibleItems[filteredAndSortedItems.length - 1] ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`w-2 h-2 rounded-full bg-saffron-500 animate-pulse`}></div>
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-saffron-300' : 'text-saffron-700'
                  }`}>
                    The Journey Continues...
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {isLoading ? (
              Array(5).fill(0).map((_, i) => <CardSkeleton key={i} />)
            ) : (
              filteredAndSortedItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all hover:shadow-lg ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          categoryColors[item.category] || 'bg-gray-100 text-gray-700'
                        }`}>
                          {categoryLabels[item.category] || item.category}
                        </span>
                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {item.month} {item.year}
                        </span>
                      </div>
                      <h3 className={`text-xl font-medium mb-2 ${
                        darkMode ? 'text-white' : 'text-indigo-900'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                          {item.source}
                        </span>
                        {item.readingTime && (
                          <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>
                            {item.readingTime}
                          </span>
                        )}
                      </div>
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-saffron-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      {scrollProgress > 20 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Export/Share Footer */}
      <div className={`border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-100 bg-white'} py-8 mt-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className={`text-lg font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Export & Share
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Download timeline or share this page
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleExportPDF}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Export PDF
              </button>
              <a
                href="/rss"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                RSS Feed
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Media
