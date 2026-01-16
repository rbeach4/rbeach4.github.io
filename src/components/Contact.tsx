import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [result, setResult] = useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult('Sending...')
    const formData = new FormData(event.currentTarget)
    formData.append('access_key', '743e19bb-b536-450e-ba00-2b15a094ee48')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      setResult('Form Submitted Successfully')
      event.currentTarget.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
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

          <form className="contact-form" onSubmit={onSubmit}>
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
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {result && (
              <p className={`form-status ${result === 'Form Submitted Successfully' ? 'success' : ''}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
