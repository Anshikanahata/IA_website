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
          <button className="group bg-saffron-500 hover:bg-saffron-600 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-100 shadow-layered-lg hover:shadow-layered-xl focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:ring-offset-2 focus:ring-offset-indigo-900">
            <span className="flex items-center">
              InvestNow
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          <button className="group border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900">
            <span className="flex items-center">
              Contact Us
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
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
            <button className="bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap shadow-layered hover:shadow-layered-lg transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:ring-offset-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

