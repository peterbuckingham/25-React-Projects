import Nav from './Components/Nav'
import Hero from './Components/Hero'
import './index.css'
import Intro from './Components/Intro'
import LoadingScreen from './Components/LoadingScreen'
import Bio from './Components/Bio'
import BioLogos from './Components/BioLogos'

function App() {
  return (
    <div>
      <LoadingScreen />
      <Nav />
      <Hero />
      <Intro />
      <Bio />
      <BioLogos />

      
    </div>
  )
}

export default App
