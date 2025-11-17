function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-saffron-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Ready to Access India's Growth Story?
        </h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Start your investment journey with institutional-grade insights and grassroots expertise
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg">
            InvestNow
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-10 py-4 rounded-lg text-lg font-medium transition-all">
            Contact Us
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-indigo-200 mb-4">Join our mailing list for exclusive insights</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-saffron-500"
            />
            <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

