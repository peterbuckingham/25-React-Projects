import Nav from './Components/Nav'
import Hero from './Components/Hero'
import './index.css'
import Intro from './Components/Intro'
import LoadingScreen from './Components/LoadingScreen'
import Bio from './Components/Bio'
import BioLogos from './Components/BioLogos'
import Gallery from './Components/Gallery'

function App() {
  return (
    <div>
      <LoadingScreen />
      <Nav />
      <Hero />
      <Intro />
      <Bio />
      <BioLogos />
      <Gallery />
    </div>
  )
}

export default App
