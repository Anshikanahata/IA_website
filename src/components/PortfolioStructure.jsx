// Professional SVG Chart Icon
const ChartBarIcon = () => (
  <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13l4-4 4 4 5-5M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13" />
  </svg>
)

function PortfolioStructure() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center mb-4 text-gray-900">Portfolio Structure</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Diversified exposure across India's most promising sectors
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart placeholder */}
          <div className="bg-gradient-to-br from-indigo-50 to-saffron-50 rounded-2xl p-12 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-4 text-indigo-600">
                <ChartBarIcon />
              </div>
              <p className="text-gray-600">[Portfolio Allocation Chart]</p>
              <p className="text-sm text-gray-500 mt-2">Sector breakdown visualization</p>
            </div>
          </div>

          {/* Fact sheet */}
          <div>
            <h3 className="text-2xl font-light mb-6 text-gray-900">Key Portfolio Facts</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-saffron-500 pl-4">
                <div className="text-sm text-gray-500 mb-1">Number of Holdings</div>
                <div className="text-2xl font-light text-gray-900">[Add number]</div>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <div className="text-sm text-gray-500 mb-1">Top Sector Allocation</div>
                <div className="text-2xl font-light text-gray-900">[Add sector] - [%]</div>
              </div>
              <div className="border-l-4 border-saffron-500 pl-4">
                <div className="text-sm text-gray-500 mb-1">Average Market Cap</div>
                <div className="text-2xl font-light text-gray-900">[Add amount]</div>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <div className="text-sm text-gray-500 mb-1">Portfolio Turnover</div>
                <div className="text-2xl font-light text-gray-900">[Add rate]</div>
              </div>
            </div>

            <button className="mt-8 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Download Full Fact Sheet
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioStructure

