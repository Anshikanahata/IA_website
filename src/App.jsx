import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import OurFunds from './components/OurFunds'
import IndiaGrowthStory from './components/IndiaGrowthStory'
import OurEdge from './components/OurEdge'
import FivePillarCarousel from './components/FivePillarCarousel'
import GrassrootsInsights from './components/GrassrootsInsights'
import ActiveETFVideo from './components/ActiveETFVideo'
import KnowledgeHub from './components/KnowledgeHub'
// Import all page components
import OurJourney from './components/pages/OurJourney'
import TheTeam from './components/pages/TheTeam'
import BoardOfDirectors from './components/pages/BoardOfDirectors'
import InvestmentCommittee from './components/pages/InvestmentCommittee'
import ESGPhilosophy from './components/pages/ESGPhilosophy'
import EquityFund from './components/pages/EquityFund'
import India2030Fund from './components/pages/India2030Fund'
import WhitePapers from './components/pages/WhitePapers'
import Media from './components/pages/Media'
import Podcast from './components/pages/Podcast'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <FivePillarCarousel />
        <IndiaGrowthStory />
        <OurEdge />
        <OurFunds />
        <GrassrootsInsights />
        <ActiveETFVideo />
        <KnowledgeHub />
        
        {/* Dropdown Pages */}
        <OurJourney />
        <TheTeam />
        <BoardOfDirectors />
        <InvestmentCommittee />
        <ESGPhilosophy />
        <EquityFund />
        <India2030Fund />
        <WhitePapers />
        <Media />
        <Podcast />
      </main>
      <Footer />
    </div>
  )
}

export default App

