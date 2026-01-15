import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} Richard Beach. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/rbeach4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rbeach4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ricky@rbeachconsulting.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
