function GrassrootsInsights() {
  const insights = [
    {
      image: "[Photo 1]",
      quote: "Authentic grassroots insight quote from tour",
      location: "Mumbai, Maharashtra"
    },
    {
      image: "[Photo 2]",
      quote: "Real observation from ground-level research",
      location: "Bangalore, Karnataka"
    },
    {
      image: "[Photo 3]",
      quote: "Direct insights from local business leaders",
      location: "Delhi NCR"
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-4 text-gray-900">Grassroots Insights</h2>
        <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto">
          Authentic perspectives from our on-the-ground research tours across India
        </p>
        <p className="text-center text-saffron-600 font-medium mb-16">
          [Rationale: This counters outdated perceptions and highlights unique access]
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gradient-to-br from-indigo-100 to-saffron-100 flex items-center justify-center text-gray-400">
                {insight.image}
              </div>
              <div className="p-6">
                <p className="text-gray-700 italic mb-4 leading-relaxed">"{insight.quote}"</p>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="mr-2">📍</span>
                  {insight.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-indigo-600 hover:text-indigo-700 font-medium">
            View More Insights →
          </button>
        </div>
      </div>
    </section>
  )
}

export default GrassrootsInsights

