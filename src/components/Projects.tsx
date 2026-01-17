import './Projects.css'

interface Project {
  id: number
  title: string
  role: string
  description: string
  highlights: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Yard Management Solutions',
    role: 'Lead Full Stack Engineer | Solutions Architect',
    description:
      'Led architecture transformation and DevOps modernization for a yard management SaaS platform, implementing enterprise-grade reliability and compliance.',
    highlights: [
      'Re-architected data collection with multi-region failover mechanism',
      'Containerized PHP monolith and migrated from Elastic Beanstalk to ECS',
      'Built Next.js 14 frontend with Ionic/Capacitor in NX monorepo',
      'Led SOC2 certification effort and reduced infrastructure costs by 40%',
    ],
    tags: ['AWS ECS', 'Terraform', 'Next.js', 'Datadog', 'PostgreSQL', 'Redis'],
  },
  {
    id: 2,
    title: 'ICANotes',
    role: 'Technical Team Lead | Full Stack Engineer',
    description:
      'Led development team for a HIPAA-compliant healthcare SaaS application, overseeing frontend development and DevOps practices.',
    highlights: [
      'Maintained and developed Angular and React applications',
      'Led online payment processing integration as team lead',
      'Architected CloudWatch logging strategy for EKS clusters',
      'Streamlined CI/CD practices to industry best standards',
    ],
    tags: ['Angular', 'React', 'AWS EKS', 'CloudWatch', 'CI/CD'],
  },
  {
    id: 3,
    title: 'Southern Trust Mortgage',
    role: 'AWS Software Engineer',
    description:
      'Designed and implemented cloud infrastructure for mortgage services, including a zero-trust security model for on-premise to cloud migration.',
    highlights: [
      'Built zero-trust security model for cloud migration',
      'Developed hands-free data pipeline using AWS services',
      'Managed production, test, and development environments',
      'Collaborated with architecture teams on scalable solutions',
    ],
    tags: ['AWS', 'Security', 'Data Pipeline', 'CloudFormation'],
  },
  {
    id: 4,
    title: 'RBeachConsulting L.L.C.',
    role: 'Owner | Solutions Architect',
    description:
      'Providing solutions architecture and technical leadership consulting to enterprises undergoing digital transformation.',
    highlights: [
      'Design scalable enterprise architecture solutions',
      'Lead cross-functional teams on complex integrations',
      'Partner with C-level executives on technology strategy',
      'Develop proof-of-concepts for emerging technologies',
    ],
    tags: ['Consulting', 'AWS', 'Architecture', 'Cloud Migration'],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Experience & Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
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
