function IndiaGrowthStory() {
  const stats = [
    { number: "1.4B+", label: "Population", sublabel: "World's largest democracy" },
    { number: "7.2%", label: "GDP Growth", sublabel: "Fastest growing major economy" },
    { number: "$3.7T", label: "Economy Size", sublabel: "5th largest in the world" },
    { number: "65%", label: "Under 35", sublabel: "Demographic dividend" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-4">The India Growth Story</h2>
        <p className="text-center text-indigo-200 mb-16 max-w-2xl mx-auto text-lg">
          Key macro numbers that make India the investment opportunity of this decade
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-light text-saffron-400 mb-3">{stat.number}</div>
              <div className="text-xl font-medium mb-2">{stat.label}</div>
              <div className="text-indigo-200 text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-light mb-4">Why Now?</h3>
          <p className="text-indigo-100 leading-relaxed">
            [Add your compelling narrative about India's growth trajectory, structural reforms, 
            digital transformation, infrastructure development, and investment opportunities]
          </p>
        </div>
      </div>
    </section>
  )
}

export default IndiaGrowthStory

