import profilePic from '../Images/introduction-visual.mp4'

function Bio() {
  return (
    <div className='bioContainer'>
      <div className="bioSection"><p>Creative Director , Fashion and Model Photographer for Kavyar which hosts all the Top Fashion Magazines Worldwide. Mark’s been active since 1988 and is involved in casting with SA’s  Top Agencies and getting talent published on a Global scale.</p></div>
      <div className='bioDivider'></div>
      <video className='bioVideo' autoPlay loop muted src={profilePic}></video>
    </div>
  )
}

export default Bio
