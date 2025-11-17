import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import FivePillarCarousel from './components/FivePillarCarousel'
import IndiaGrowthStory from './components/IndiaGrowthStory'
import GrassrootsInsights from './components/GrassrootsInsights'
import PortfolioStructure from './components/PortfolioStructure'
import AccessPathways from './components/AccessPathways'
import KnowledgeHub from './components/KnowledgeHub'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <FivePillarCarousel />
        <IndiaGrowthStory />
        <GrassrootsInsights />
        <PortfolioStructure />
        <AccessPathways />
        <KnowledgeHub />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App

