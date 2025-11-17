function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-light mb-4">
              India Avenue
            </div>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Institutional-grade India investment opportunities backed by grassroots insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Investment Approach</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Knowledge Hub</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Market Insights</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">Reports</a></li>
              <li><a href="#" className="text-indigo-200 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li>📧 info@indiaavenue.com</li>
              <li>📞 [Phone number]</li>
              <li>📍 [Office address]</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-indigo-300">
            <p>© 2024 India Avenue Investment Management. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

