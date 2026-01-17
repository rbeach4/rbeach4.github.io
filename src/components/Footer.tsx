import { useForm, ValidationError } from '@formspree/react'
import './Footer.css'
import './Contact.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const [state, handleSubmit] = useForm('xlggdbkr')

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-content">
          <div className="contact-info">
            <p className="contact-description">
              I'm currently open to new consulting opportunities, architecture
              projects, and collaborations. Whether you need help with cloud
              migrations, DevOps transformation, or building scalable
              applications, let's connect!
            </p>
            <div className="contact-links">
              <a
                href="mailto:ricky@rbeachconsulting.com"
                className="contact-link"
              >
                <span className="link-icon">✉</span>
                ricky@rbeachconsulting.com
              </a>
              <a
                href="https://github.com/rbeach4"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">⌘</span>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/richardbva/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">◉</span>
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="subject" value="New contact from portfolio footer" />

            {state.succeeded && (
              <p className="form-status success">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}

            {!state.succeeded && (
              <>
                <div className="form-group">
                  <label htmlFor="footer-name">Name</label>
                  <input
                    type="text"
                    id="footer-name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="footer-email">Email</label>
                  <input
                    type="email"
                    id="footer-email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="footer-message">Message</label>
                  <textarea
                    id="footer-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your message..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">
          © {currentYear} Richard Beach. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
