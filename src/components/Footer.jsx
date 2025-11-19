// Professional SVG Icons
const EmailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)

const LocationPinIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
)

function Footer() {
  return (
    <footer id="contact" className="bg-indigo-900 text-white py-12">
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
              <li><a href="#home" className="text-indigo-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#investment-approach" className="text-indigo-200 hover:text-white transition-colors">Investment Approach</a></li>
              <li><a href="#insights" className="text-indigo-200 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-indigo-200 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#insights" className="text-indigo-200 hover:text-white transition-colors">Knowledge Hub</a></li>
              <li><a href="#insights" className="text-indigo-200 hover:text-white transition-colors">Market Insights</a></li>
              <li><a href="#insights" className="text-indigo-200 hover:text-white transition-colors">Reports</a></li>
              <li><a href="#contact" className="text-indigo-200 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-indigo-200">
              <li className="flex items-center"><span className="mr-2"><EmailIcon /></span> info@indiaavenue.com</li>
              <li className="flex items-center"><span className="mr-2"><PhoneIcon /></span> [Phone number]</li>
              <li className="flex items-center"><span className="mr-2"><LocationPinIcon /></span> [Office address]</li>
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

