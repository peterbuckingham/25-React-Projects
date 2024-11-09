import Nav from './Components/Nav'
import Hero from './Components/Hero'
import './index.css'
import Intro from './Components/Intro'
import LoadingScreen from './Components/LoadingScreen'

function App() {
  return (
    <div>
      <LoadingScreen />
      <Nav />
      <Hero />
      <Intro />
      
    </div>
  )
}

export default App
