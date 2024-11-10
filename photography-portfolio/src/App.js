import Nav from './Components/Nav'
import Hero from './Components/Hero'
import './index.css'
import Intro from './Components/Intro'
import LoadingScreen from './Components/LoadingScreen'
import Bio from './Components/Bio'

function App() {
  return (
    <div>
      <LoadingScreen />
      <Nav />
      <Hero />
      <Intro />
      <Bio />
      
    </div>
  )
}

export default App
