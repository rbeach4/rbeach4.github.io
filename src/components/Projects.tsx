import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description:
      'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and a responsive design.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'An e-commerce platform with a modern UI, shopping cart functionality, and secure payment processing.',
    tags: ['TypeScript', 'Next.js', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'A mobile-first progressive web app that helps users track their daily habits and goals.',
    tags: ['React', 'PWA', 'Firebase'],
    github: '#',
    demo: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span>Preview</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link">
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
