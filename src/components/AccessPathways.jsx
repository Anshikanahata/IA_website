function AccessPathways() {
  const platforms = [
    { name: "Platform 1", logo: "🏦" },
    { name: "Platform 2", logo: "💼" },
    { name: "Platform 3", logo: "📈" },
    { name: "Platform 4", logo: "🏛️" },
    { name: "InvestNow", logo: "🚀", highlighted: true },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-4 text-gray-900">How to Access</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Multiple pathways to invest in India Avenue strategies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 text-center transition-all ${
                platform.highlighted
                  ? 'bg-gradient-to-br from-indigo-600 to-saffron-500 text-white shadow-lg transform hover:scale-105'
                  : 'bg-white text-gray-900 hover:shadow-md'
              }`}
            >
              <div className="text-5xl mb-4">{platform.logo}</div>
              <div className={`font-medium ${platform.highlighted ? 'text-lg' : ''}`}>
                {platform.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-light mb-4 text-gray-900">Not sure which option is right for you?</h3>
          <p className="text-gray-600 mb-6">
            Our team can help you understand the best way to access India Avenue investment strategies 
            based on your specific needs and circumstances.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Speak with an Advisor
          </button>
        </div>
      </div>
    </section>
  )
}

export default AccessPathways

