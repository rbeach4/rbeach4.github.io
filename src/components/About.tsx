import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4E03AQFCb0u6lxc9dg/profile-displayphoto-crop_800_800/B4EZsmRqVRGcAI-/0/1765873728563?e=1770249600&v=beta&t=9AV5nfF5AKGR_yWGvmPHo9NE8_N_TVhzr0m9MGHYyxo"
              alt="Richard Beach"
              className="profile-photo"
            />
          </div>
          <div className="about-text">
            <p>
              I'm a solutions-oriented Full Stack Engineer and AWS Solutions Architect
              with 8+ years of experience designing and deploying cloud-native applications.
              I have a proven track record architecting scalable solutions that enhance
              user experience and align with customer requirements.
            </p>
            <p>
              My expertise spans AWS cloud infrastructure, containerization, DevOps
              automation, and leading cross-functional teams through complex migrations
              and digital transformations. I hold an <strong>AWS Certified Solutions
              Architect – Professional</strong> certification.
            </p>
            <p>
              Key achievements include leading SOC2 certification efforts, architecting
              multi-region disaster recovery solutions, and driving FinOps initiatives
              that reduced infrastructure costs by 40% while achieving 99.99% availability.
            </p>
            <div className="education">
              <p><strong>Education:</strong></p>
              <p>M.S. Cyber Security – Liberty University</p>
              <p>B.S. Computer Science – Radford University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
