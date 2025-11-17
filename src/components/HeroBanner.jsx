function HeroBanner() {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Invest in the Future of India
          </h1>
          <p className="text-xl md:text-2xl font-light text-indigo-100 mb-8">
            Access institutional-grade India investment opportunities backed by grassroots insights
          </p>
          <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Start Investing
          </button>
        </div>
      </div>
      {/* Placeholder for modern India image background */}
      <div className="absolute bottom-8 right-8 text-xs text-white/60">
        [Modern India Airport/Data Center Image]
      </div>
    </section>
  )
}

export default HeroBanner

