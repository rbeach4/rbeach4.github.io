import { useState, FormEvent, ChangeEvent } from "react";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

// TODO: Replace with your Formspree endpoint from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlggdbkr";

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="form-status success">
                Thank you! Your message has been sent. I'll get back to you
                soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status error">
                Oops! Something went wrong. Please try again or email me
                directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
