function Nav() {
  return (
    <div className="nav">
      <ul>
        <li className="nav-links">Home</li>
        <li className="nav-links">About</li>
        <li>
          <div className='li-img-container'><img className='li-img' src={require('../Images/camera-logo.png')} alt="logo" /></div>
        </li>
        <li className="nav-links">Gallery</li>
        <li className="nav-links">Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
