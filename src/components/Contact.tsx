import { useState, FormEvent } from 'react'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
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
                href="https://linkedin.com/in/rbeach4"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">◉</span>
                LinkedIn
              </a>
            </div>
          </div>

          {status === 'success' ? (
            <div className="form-success">
              <p className="form-status success">
                Thank you! Your message has been sent. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Web3Forms access key - get yours at https://web3forms.com */}
              <input type="hidden" name="access_key" value="743e19bb-b536-450e-ba00-2b15a094ee48" />
              <input type="hidden" name="subject" value="New contact from portfolio" />
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="form-status error">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
