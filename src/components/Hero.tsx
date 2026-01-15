import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Richard Beach</span>
        </h1>
        <p className="hero-subtitle">
          Solutions Architect | Full Stack Engineer | AWS Professional
        </p>
        <p className="hero-description">
          8+ years of experience designing and deploying cloud-native applications.
          Specialized in AWS infrastructure, containerization, DevOps automation,
          and leading teams through complex digital transformations.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
