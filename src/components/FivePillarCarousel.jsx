import { useState } from 'react'

function FivePillarCarousel() {
  const [currentPillar, setCurrentPillar] = useState(0)

  const pillars = [
    {
      title: "Pillar 1",
      description: "Description of first pillar - add your content here",
      icon: "📊"
    },
    {
      title: "Pillar 2",
      description: "Description of second pillar - add your content here",
      icon: "🎯"
    },
    {
      title: "Pillar 3",
      description: "Description of third pillar - add your content here",
      icon: "💡"
    },
    {
      title: "Pillar 4",
      description: "Description of fourth pillar - add your content here",
      icon: "🚀"
    },
    {
      title: "Pillar 5",
      description: "Description of fifth pillar - add your content here",
      icon: "⭐"
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
                    <div className="text-6xl mb-6">{pillar.icon}</div>
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

