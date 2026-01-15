import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          Richard Beach
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
