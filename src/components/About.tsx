import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span>Your Photo</span>
            </div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer with a love for creating
              elegant solutions to complex problems. With experience in
              full-stack development, I enjoy bringing ideas to life through
              clean, efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying the outdoors.
              I believe in continuous learning and pushing the boundaries of
              what's possible with technology.
            </p>
            <p>
              I'm always excited to take on new challenges and collaborate
              with others to build something amazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
