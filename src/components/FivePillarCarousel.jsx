import { useState } from 'react'

// Professional SVG Icons
const ChartIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 5-5M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13" />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const LightbulbIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m4.5 0a12.06 12.06 0 00-4.5 0m0 0a6.01 6.01 0 01-1.5-.189M9.75 12.75a6.01 6.01 0 001.5-.189M9.75 12.75a6.01 6.01 0 01-1.5-.189m1.5.189V18m0 0a12.06 12.06 0 004.5 0m-4.5 0a12.06 12.06 0 01-4.5 0" />
  </svg>
)

const RocketIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A15 15 0 004.59 14.37m0 0a6 6 0 00-1.84 2.58m1.84-2.58a6 6 0 011.84 2.58m0 0v4.8m0-4.8a6 6 0 011.84-2.58" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
)

function FivePillarCarousel() {
  const [currentPillar, setCurrentPillar] = useState(0)

  const pillars = [
    {
      title: "Pillar 1",
      description: "Description of first pillar - add your content here",
      icon: <ChartIcon />
    },
    {
      title: "Pillar 2",
      description: "Description of second pillar - add your content here",
      icon: <TargetIcon />
    },
    {
      title: "Pillar 3",
      description: "Description of third pillar - add your content here",
      icon: <LightbulbIcon />
    },
    {
      title: "Pillar 4",
      description: "Description of fourth pillar - add your content here",
      icon: <RocketIcon />
    },
    {
      title: "Pillar 5",
      description: "Description of fifth pillar - add your content here",
      icon: <StarIcon />
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-4 text-gray-900">Our Five Pillars</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          The foundation of our investment approach
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPillar * 100}%)` }}
            >
              {pillars.map((pillar, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-saffron-50 rounded-2xl p-12 text-center max-w-3xl mx-auto">
                    <div className="flex justify-center mb-6 text-indigo-600">{pillar.icon}</div>
                    <h3 className="text-3xl font-light mb-4 text-gray-900">{pillar.title}</h3>
                    <p className="text-lg text-gray-600">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {pillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPillar(index)}
                className={`h-3 rounded-full transition-all ${
                  currentPillar === index 
                    ? 'w-12 bg-saffron-500' 
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to pillar ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => setCurrentPillar((currentPillar - 1 + pillars.length) % pillars.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Previous pillar"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentPillar((currentPillar + 1) % pillars.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Next pillar"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FivePillarCarousel

