import profilePic from './assets/profile.png'

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt='profile picture'/>
      <h2 className="card-title">Peter B</h2>
      <p className="card-title">I study do web developement</p>
    </div>
  )
}

export default Card
