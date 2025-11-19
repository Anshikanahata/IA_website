import { useState, useEffect, useRef } from 'react'

function IndiaGrowthStory() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedStats, setAnimatedStats] = useState([
    { value: 0, suffix: 'B+', label: "Population", sublabel: "World's largest democracy" },
    { value: 0, suffix: '%', label: "GDP Growth", sublabel: "Fastest growing major economy" },
    { value: 0, suffix: 'T', prefix: '$', label: "Economy Size", sublabel: "5th largest in the world" },
    { value: 0, suffix: '%', label: "Under 35", sublabel: "Demographic dividend" },
  ])

  const sectionRef = useRef(null)

  const targetStats = [
    { value: 1.4, suffix: 'B+', label: "Population", sublabel: "World's largest democracy" },
    { value: 7.2, suffix: '%', label: "GDP Growth", sublabel: "Fastest growing major economy" },
    { value: 3.7, suffix: 'T', prefix: '$', label: "Economy Size", sublabel: "5th largest in the world" },
    { value: 65, suffix: '%', label: "Under 35", sublabel: "Demographic dividend" },
  ]

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

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps
    const timers = []

    targetStats.forEach((target, index) => {
      let currentStep = 0
      const increment = target.value / steps

      const timer = setInterval(() => {
        currentStep++
        setAnimatedStats((prev) => {
          const newStats = [...prev]
          newStats[index] = {
            ...newStats[index],
            value: Math.min(increment * currentStep, target.value),
            suffix: target.suffix,
            prefix: target.prefix || '',
            label: target.label,
            sublabel: target.sublabel,
          }
          return newStats
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)
      timers.push(timer)
    })

    return () => {
      timers.forEach(timer => clearInterval(timer))
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} id="why-india" className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-light text-center mb-4 tracking-tight">The India Growth Story</h2>
          <p className="text-center text-indigo-200 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
            Key macro numbers that make India the investment opportunity of this decade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {animatedStats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl font-light text-saffron-400 mb-3 tracking-tight">
                {stat.prefix}{stat.value.toFixed(stat.value % 1 !== 0 ? 1 : 0)}{stat.suffix}
              </div>
              <div className="text-xl font-medium mb-2">{stat.label}</div>
              <div className="text-indigo-200 text-sm leading-relaxed">{stat.sublabel}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default IndiaGrowthStory

