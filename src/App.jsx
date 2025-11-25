import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'

// About Us Pages
import OurJourney from './components/pages/OurJourney'
import TheTeam from './components/pages/TheTeam'
import BoardOfDirectors from './components/pages/BoardOfDirectors'
import InvestmentCommittee from './components/pages/InvestmentCommittee'

// Why Invest Pages
import WhyIndia from './components/pages/WhyIndia'
import WhyIndiaAvenue from './components/pages/WhyIndiaAvenue'
import ESGPhilosophy from './components/pages/ESGPhilosophy'

// Funds Pages
import EquityFund from './components/pages/EquityFund'
import India2030Fund from './components/pages/India2030Fund'

// Insights Pages
import Research from './components/pages/Research'
import GrassrootsExperience from './components/pages/GrassrootsExperience'
import WhitePapers from './components/pages/WhitePapers'
import Media from './components/pages/Media'
import Podcast from './components/pages/Podcast'

// Other Pages
import ActiveETF from './components/pages/ActiveETF'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Us Routes */}
          <Route path="/about/our-journey" element={<OurJourney />} />
          <Route path="/about/team" element={<TheTeam />} />
          <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/about/investment-committee" element={<InvestmentCommittee />} />
          
          {/* Why Invest Routes */}
          <Route path="/why-invest/why-india" element={<WhyIndia />} />
          <Route path="/why-invest/why-india-avenue" element={<WhyIndiaAvenue />} />
          <Route path="/why-invest/esg-philosophy" element={<ESGPhilosophy />} />
          
          {/* Funds Routes */}
          <Route path="/funds/equity-fund" element={<EquityFund />} />
          <Route path="/funds/india-2030-fund" element={<India2030Fund />} />
          
          {/* Active ETF Route */}
          <Route path="/active-etf" element={<ActiveETF />} />
          
          {/* Insights Routes */}
          <Route path="/insights/research" element={<Research />} />
          <Route path="/insights/grassroots-experience" element={<GrassrootsExperience />} />
          <Route path="/insights/white-papers" element={<WhitePapers />} />
          <Route path="/insights/media" element={<Media />} />
          <Route path="/insights/podcast" element={<Podcast />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
